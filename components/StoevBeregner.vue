<template>
  <div class="stoev-beregner p-6 bg-white rounded-lg shadow-md">
    <h3 class="text-lg font-semibold mb-3">Støvberegner</h3>

    <p class="mb-4 text-sm text-gray-600">
      Støvbehandling beregnes ud fra en standardbredde på 3 meter (uafhængig af
      den valgte vej-bredde). Hvis din vej/grusområde er bredere, kan du stadig
      justere "Vejens bredde" for vej/område-prisberegningen, men
      støvberegningen bruger altid 3m som standard.
    </p>

    <div class="grid gap-3">
      <div>
        <label class="block text-sm font-medium mb-1"
          >Antal meter grusvej</label
        >
        <input
          type="number"
          v-model.number="meters"
          placeholder="Fx 120"
          class="w-full p-2 border rounded"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Vejens bredde (m)</label>
        <input
          type="number"
          v-model.number="width"
          class="w-full p-2 border rounded"
          step="0.1"
          min="0.1"
        />
      </div>

      <div>
        <label class="block text-sm font-medium mb-1">Vælg støvprodukt</label>
        <select v-model="selectedDust" class="w-full p-2 border rounded">
          <option disabled value="">Vælg produkt</option>
          <option v-for="d in dusts" :key="d.id" :value="d">
            {{ d.name }} – {{ d.price.toFixed(2) }} kr/m²
          </option>
        </select>
      </div>

      <div
        class="mt-2 p-3 bg-[#f9b039] text-white rounded"
        v-if="meters && selectedDust && meters >= 100"
      >
        <div>
          Bredde: <strong>{{ width }} m</strong>
        </div>
        <div>
          Beregnede m²: <strong>{{ formatArea(squareMeters) }}</strong>
        </div>
        <div class="mt-2">
          Støvbehandling: <strong>{{ format(dustPrice) }}</strong>
        </div>
        <div v-if="meters > 1000" class="discount">
          Du vil modtage yderligere rabat ved kontakt grundet +1000 m.
        </div>
      </div>

      <div
        v-else-if="meters && meters < 100"
        class="mt-2 p-3 bg-red-100 text-red-700 rounded"
      >
        Minimum 100 meter for tilbud
      </div>

      <div v-else class="mt-2 text-sm text-gray-500">
        Indtast meter og vælg produkt for at se pris.
      </div>
    </div>
    <div class="mt-3">
      <button
        class="bg-[#199d43] text-white px-4 py-2 rounded"
        v-if="meters && meters >= 100 && dustPrice > 0"
        @click="showContactForm = true"
      >
        Kontakt mig
      </button>
    </div>
  </div>

  <!-- CONTACT FORM MODAL -->
  <div
    v-if="showContactForm"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
  >
    <div class="bg-white p-6 rounded max-w-md w-full">
      <h3 class="text-lg font-semibold mb-3">Kontakt mig</h3>
      <p class="text-sm text-gray-600 mb-4">
        Indtast dine kontaktoplysninger, så kontakter vi dig med tilbuddet.
      </p>

      <div class="grid gap-3">
        <div>
          <label class="block text-sm font-medium mb-1">Navn</label>
          <input
            type="text"
            v-model="contactName"
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            v-model="contactEmail"
            class="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">Telefon</label>
          <input
            type="tel"
            v-model="contactPhone"
            class="w-full p-2 border rounded"
          />
        </div>

        <div class="flex items-center gap-2 mt-4">
          <button
            class="bg-[#199d43] text-white px-4 py-2 rounded"
            :disabled="contactLoading"
            @click="sendDustEstimate"
          >
            {{ contactLoading ? "Sender..." : "Send" }}
          </button>
          <button
            class="bg-gray-200 px-4 py-2 rounded"
            @click="showContactForm = false"
          >
            Luk
          </button>
        </div>

        <p v-if="contactSuccess" class="text-green-600 mt-2">
          {{ contactSuccess }}
        </p>
        <p v-if="contactError" class="text-red-600 mt-2">{{ contactError }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const meters = ref(null);
const dusts = [
  { id: 1, name: "Dustex", price: 3.95 },
  { id: 2, name: "Innolig+", price: 3.5 },
  { id: 3, name: "Dust-away", price: 6.25 },
];
const selectedDust = ref("");

// editable width (meters), default 3
const width = ref(3);

const squareMeters = computed(() => {
  if (!meters.value) return 0;
  return meters.value * (width.value || 3);
});

const dustPrice = computed(() => {
  if (!selectedDust.value || !meters.value) return 0;
  if (meters.value < 100) return 0;
  return squareMeters.value * Number(selectedDust.value.price);
});

const format = (number) => {
  return (
    Number(number).toLocaleString("da-DK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " kr."
  );
};

// Format area (m²) without currency suffix
const formatArea = (number) => {
  return (
    Number(number).toLocaleString("da-DK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " m²"
  );
};

// Contact modal state and send logic (for dust-only enquiries)
const showContactForm = ref(false);
const contactName = ref("");
const contactEmail = ref("");
const contactPhone = ref("");
const contactLoading = ref(false);
const contactSuccess = ref("");
const contactError = ref("");

const sendDustEstimate = async () => {
  contactLoading.value = true;
  contactSuccess.value = "";
  contactError.value = "";

  try {
    const payload = {
      name: contactName.value || "",
      email: contactEmail.value || "",
      phone: contactPhone.value || "",
      meters: meters.value || 0,
      roadWidth: width.value || 3,
      service: "",
      roadPrice: 0,
      dustSelected: selectedDust.value ? selectedDust.value.name : "",
      dustPrice: dustPrice.value || 0,
      totalPrice: dustPrice.value || 0,
    };

    const res = await fetch("/api/beregner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    if (res.ok && result.success) {
      contactSuccess.value =
        "Din forespørgsel er sendt - vi vender tilbage hurtigst muligt.";
      contactName.value = "";
      contactEmail.value = "";
      contactPhone.value = "";
      showContactForm.value = false;
    } else {
      throw new Error(result.error || "Failed to send estimate");
    }
  } catch (err) {
    contactError.value = err.message || String(err);
    console.error("Fejl ved at sende støv-beregning:", err);
  } finally {
    contactLoading.value = false;
  }
};
</script>

<style scoped>
.stoev-beregner input,
.stoev-beregner select {
  box-sizing: border-box;
}

.discount {
  margin-top: 8px;
  font-size: 14px;
}
</style>

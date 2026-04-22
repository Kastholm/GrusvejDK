<template>
  <div class="calculator lg:translate-y-12">
    <h2 class="text-lg font-semibold vejberegnertekst">
      Beregn pris på din grusvej <br />
      (tilvalg af <Span class="text-[#137733]">støvbekæmpelse</Span>)
    </h2>

    <p class="description">
      Er der tale om areal +3 meters bredde- kontakt os for et skræddersyet
      tilbud.<br />
      <br />
      Indtast længden på din grusvej og vælg typen af behandling for at få en
      estimeret pris. (minimum 100 meter grusvej - maks bredde 3 meter)
      <br /><br />Ved +1000 meter grusvej vil du modtage yderligere
      <strong>rabat</strong> ved kontakt.
    </p>

    <div class="form">
      <!-- SERVICE -->
      <div class="field">
        <label>Vælg service</label>

        <select v-model="selectedService">
          <option disabled value="">Vælg behandling</option>
          <option
            v-for="s in services"
            :key="s.id"
            :value="s"
            placeholder="Vælg behandling"
          >
            {{ s.name }} ({{ s.price }} kr/m)
          </option>
        </select>
      </div>

      <!-- METER -->
      <div class="field">
        <label>Antal meter grusvej</label>

        <input type="number" v-model.number="meters" placeholder="Fx 120" />
      </div>

      <!-- width input removed; dust uses fixed 3 m and roadWidth defaults to 3 -->

      <!-- BEREGN -->
      <div class="actions">
        <button @click="calculateRoad">Udregn pris</button>

        <div v-if="roadPrice !== null" class="result">
          <div v-if="meters < 100" class="minimum">
            Minimum 100 meter for tilbud
          </div>
          <div class="price">
            Estimeret vejpris
            <span>{{ format(roadPrice) }}</span>
          </div>

          <div v-if="meters > 1000" class="discount">
            Du vil modtage yderligere rabat ved kontakt
          </div>
        </div>
        <div v-if="roadPrice !== null" class="mt-3">
          <button class="secondary" @click="showContactForm = true">
            Kontakt mig
          </button>
        </div>
      </div>

      <!-- STØVSPØRGSMÅL -->
      <div v-if="roadPrice > 0" class="dust-question">
        <p><strong>Skal vejen også støvbehandles?</strong></p>

        <div class="dust-buttons">
          <button class="secondary" @click="enableDust">Ja</button>

          <button class="secondary" @click="disableDust">Nej</button>
        </div>
      </div>

      <!-- STØVBEREGNER -->
      <div v-if="dustEnabled" class="dust-section">
        <p class="info">
          Støvbehandling beregnes ud fra en standardbredde på 3 meter.
        </p>

        <div class="field">
          <label>Vælg støvprodukt</label>

          <select v-model="selectedDust">
            <option disabled value="">Vælg produkt</option>
            <option :value="null">Ingen (ingen støvprodukt)</option>
            <option v-for="d in dusts" :key="d.id" :value="d">
              {{ d.name }} – {{ d.price.toFixed(2) }} kr/m²
            </option>
          </select>
        </div>

        <!-- RESULTAT -->
        <div v-if="dustPrice" class="dust-result">
          <div>
            Støvbehandling
            <span>{{ format(dustPrice) }}</span>
          </div>

          <div class="total">
            Samlet pris
            <span>{{ format(totalPrice) }}</span>
          </div>
        </div>
        <div v-if="dustPrice !== null" class="mt-3">
          <button class="secondary" @click="showContactForm = true">
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
                @click="sendEstimate"
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
            <p v-if="contactError" class="text-red-600 mt-2">
              {{ contactError }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const meters = ref(null);
// service options (id, human readable name, price per meter)
const services = [
  { id: 1, name: "Opretning / vedligehold", price: 57 },
  { id: 2, name: "Fuld renovering", price: 249 },
];

const selectedService = ref("");
const roadPrice = ref(null);

const dustEnabled = ref(false);
// dust product options (name, price per m²)
const dusts = [
  { id: 1, name: "GV støvbekæmper", price: 6.0 },
  { id: 2, name: "Innolig+", price: 4.0 },
  { id: 3, name: "Dust-away", price: 6.25 },
];
const selectedDust = ref("");

const showContactForm = ref(false);
const contactName = ref("");
const contactEmail = ref("");
const contactPhone = ref("");
const contactLoading = ref(false);
const contactSuccess = ref("");
const contactError = ref("");

const sendEstimate = async () => {
  contactLoading.value = true;
  contactSuccess.value = "";
  contactError.value = "";

  try {
    const payload = {
      name: contactName.value || "",
      email: contactEmail.value || "",
      phone: contactPhone.value || "",
      meters: meters.value || 0,
      service: selectedService.value?.name || "",
      roadPrice: roadPrice.value || 0,
      roadWidth: width.value || 3,
      dustSelected:
        dustEnabled.value && selectedDust.value ? selectedDust.value.name : "",
      dustPrice:
        dustEnabled.value && typeof dustPrice.value === "number"
          ? dustPrice.value
          : 0,
      totalPrice: totalPrice.value || 0,
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
      // reset form
      contactName.value = "";
      contactEmail.value = "";
      contactPhone.value = "";
      showContactForm.value = false;
    } else {
      throw new Error(result.error || "Failed to send estimate");
    }
  } catch (err) {
    contactError.value = err.message || String(err);
    console.error("Fejl ved at sende beregning:", err);
  } finally {
    contactLoading.value = false;
  }
};

// default road width (meters) - kept for payload but width input removed from UI
const width = ref(3);

// dust enable/disable helpers so we can clear any selected dust when turning off
const enableDust = () => {
  dustEnabled.value = true;
};

const disableDust = () => {
  dustEnabled.value = false;
  selectedDust.value = null;
};

const calculateRoad = () => {
  if (!meters.value || !selectedService.value) return;

  if (meters.value < 100) {
    roadPrice.value = 0;
    return;
  }

  roadPrice.value = meters.value * selectedService.value.price;
};

// area used for road price uses user-specified width
const squareMeters = computed(() => {
  if (!meters.value) return 0;

  return meters.value * (width.value || 3);
});

// dust calculations always use a fixed 3 m width (standard)
const dustSquareMeters = computed(() => {
  if (!meters.value) return 0;
  return meters.value * 3;
});

const dustPrice = computed(() => {
  if (!selectedDust.value) return null;
  return dustSquareMeters.value * Number(selectedDust.value.price);
});

const totalPrice = computed(() => {
  if (!dustPrice.value) return roadPrice.value;

  return roadPrice.value + dustPrice.value;
});

const format = (number) => {
  return (
    number.toLocaleString("da-DK", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " kr."
  );
};
</script>

<style scoped>
.calculator {
  max-width: 750px;
  margin: auto;
  padding: 30px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

h2 {
  color: #199d43;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.field {
  display: flex;
  flex-direction: column;
}

.description {
  margin-bottom: 25px;
  color: #555;
}

label {
  margin-bottom: 6px;
  font-weight: 600;
}

input,
select {
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

button {
  background: #199d43;
  color: white;
  border: none;
  padding: 14px 26px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

.secondary {
  background: #199d43;
  color: white;
}

.result {
  background: #f9b039;
  padding: 16px;
  border-radius: 10px;
  color: white;
  min-width: 220px;
}

.price span {
  display: block;
  font-size: 24px;
  font-weight: 700;
}

.discount {
  margin-top: 8px;
  font-size: 14px;
}

.dust-question {
  margin-top: 20px;
}

.dust-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.dust-section {
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  background: #f7f7f7;
}

.info {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.dust-result {
  margin-top: 15px;
  background: #f9b039;
  color: white;
  padding: 15px;
  border-radius: 10px;
}

.dust-result span {
  display: block;
  font-size: 20px;
  font-weight: 700;
}

.total {
  margin-top: 10px;
  font-size: 18px;
}

@media (max-width: 600px) {
  .actions {
    flex-direction: column;
    align-items: stretch;
  }

  button {
    width: 100%;
  }
}

.vejberegnertekst {
  color: #000000 !important;
  font-size: 22px;
}
</style>

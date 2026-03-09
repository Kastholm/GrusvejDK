<template>
  <div class="calculator lg:translate-y-12">
    <h2>Beregn pris på din grusvej</h2>

    <p class="description">
      Indtast længden på din grusvej og vælg typen af behandling for at få en
      estimeret pris. (minimum 100 meter grusvej - maks bredde 3 meter)
      <br /><br />Ved +1000 meter grusvej vil du modtage yderligere
      <strong>rabat</strong> ved kontakt.
    </p>

    <div class="form">
      <!-- SERVICE -->
      <div class="field">
        <label>Vælg service</label>

        <select v-model.number="selectedPrice">
          <option disabled value="">Vælg behandling</option>
          <option :value="57">Opretning / vedligehold (57 kr/m)</option>
          <option :value="249">Fuld renovering (249 kr/m)</option>
        </select>
      </div>

      <!-- METER -->
      <div class="field">
        <label>Antal meter grusvej</label>

        <input type="number" v-model.number="meters" placeholder="Fx 120" />
      </div>

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
      </div>

      <!-- STØVSPØRGSMÅL -->
      <div v-if="roadPrice !== 0" class="dust-question">
        <p><strong>Skal vejen også støvbehandles?</strong></p>

        <div class="dust-buttons">
          <button class="secondary" @click="dustEnabled = true">Ja</button>

          <button class="secondary" @click="dustEnabled = false">Nej</button>
        </div>
      </div>

      <!-- STØVBEREGNER -->
      <div v-if="dustEnabled" class="dust-section">
        <p class="info">
          Støvbehandling beregnes ud fra en standardbredde på 2.75 meter.
        </p>

        <div class="field">
          <label>Vælg støvprodukt</label>

          <select v-model.number="selectedDust">
            <option disabled value="">Vælg produkt</option>

            <option :value="3.95">Dustex – 3,95 kr/m²</option>

            <option :value="3.5">Innolig+ – 3,50 kr/m²</option>

            <option :value="6.25">Dust-away – 6,25 kr/m²</option>
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
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const meters = ref(null);
const selectedPrice = ref("");
const roadPrice = ref(null);

const dustEnabled = ref(false);
const selectedDust = ref("");

const ROAD_WIDTH = 2.75;

const calculateRoad = () => {
  if (!meters.value || !selectedPrice.value) return;

  if (meters.value < 100) {
    roadPrice.value = 0;
    return;
  }

  roadPrice.value = meters.value * selectedPrice.value;
};

const squareMeters = computed(() => {
  if (!meters.value) return 0;

  return meters.value * ROAD_WIDTH;
});

const dustPrice = computed(() => {
  if (!selectedDust.value) return null;

  return squareMeters.value * Number(selectedDust.value);
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
</style>

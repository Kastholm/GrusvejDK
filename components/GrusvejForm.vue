<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Navn er påkrævet"),
  email: yup.string().email("Ugyldig email").required("Email er påkrævet"),
  phone: yup.string(),
  text: yup.string(),
});

const isLoading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");
const emit = defineEmits(["close"]);

async function onSubmit(values) {
  isLoading.value = true;
  successMessage.value = "";
  errorMessage.value = "";

  try {
    const response = await fetch("/api/send-grusvej", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (result.success) {
      successMessage.value = "Din besked er sendt!";
    } else {
      errorMessage.value = result.error || "Noget gik galt. Prøv igen.";
    }
  } catch (err) {
    errorMessage.value = "Serverfejl. Prøv igen senere.";
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <Form
    class="notification-modal"
    :validation-schema="schema"
    @submit="onSubmit"
  >
    <div class="flex flex-col gap-4 items-start w-fit m-auto">
      <button
        type="button"
        @click="emit('close')"
        class="max-w-fit absolute lg:inset-[-190px] lg:left-[240px] lg:bottom-32 right-10 top-5 m-auto text-2xl font-semibold text-[#137733] hover:text-[#f9b039]"
      >
        X
      </button>
      <div>
        <label class="mr-10">Navn</label>
        <Field class="input-group" name="name" />
        <ErrorMessage class="text-[#1b703c]" name="name" />
      </div>
      <div>
        <label class="mr-[41px]">Email</label>
        <Field class="input-group" name="email" />
        <ErrorMessage class="text-[#1b703c]" name="email" />
      </div>
      <div>
        <label class="mr-5">Telefon</label>
        <Field class="input-group" name="phone" />
        <ErrorMessage class="text-[#1b703c]" name="phone" />
      </div>
      <div>
        <label class="mr-[23px]">Besked</label>
        <Field class="input-group" name="text" as="textarea" />
        <ErrorMessage class="text-[#1b703c]" name="text" />
      </div>
    </div>
    <button
      class="input-button hover:bg-[#f9b039]"
      type="submit"
      :disabled="isLoading"
    >
      {{ isLoading ? "Sender..." : "Send" }}
    </button>
  </Form>

  <!-- Overlay popup for success -->
  <div v-if="successMessage" class="notification-modal">
    <span class="text-green-600">{{ successMessage }}</span>
    <button
      @click="successMessage = ''"
      style="display: block; margin: 20px auto 0"
      class="bg-[#199d43] text-white px-4 py-2 rounded"
    >
      Luk
    </button>
  </div>
  <!-- Overlay popup for error -->
  <div v-if="errorMessage" class="">
    <span class="text-red-600">{{ errorMessage }}</span>
    <button
      @click="errorMessage = ''"
      style="display: block; margin: 20px auto 0"
      class="bg-red-600 text-white px-4 py-2 rounded"
    >
      Luk
    </button>
  </div>
</template>

<style>
.notification-modal {
  position: absolute;
  inset: 100px 0 0 0;
  margin: auto;
  background: rgb(255, 255, 255, 0.9);
  padding: 40px;
  font-size: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  min-width: 300px;
  text-align: center;
  width: fit-content;
  height: fit-content;
}

@media (max-width: 700px) {
  .notification-modal {
    inset: 500px 0 0 0;
    padding: 40px 20px;
  }
}

.notification-modal::before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.input-group {
  border-radius: 5px;
  border: none;
}

.input-button {
  padding: 4px 10px;
  background-color: #137733;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
}
</style>

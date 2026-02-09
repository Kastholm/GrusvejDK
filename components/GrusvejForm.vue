<script setup>
import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email(),
  phone: yup.string().required(),
  name: yup.string().required(),
  service: yup.string().required(),
});

const selectedOption = ref("Basis");

async function onSubmit(values) {
  console.log(values);
  const formData = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    grusvej: value,
    text: values.text,
  };

  try {
    const response = await fetch("/api/send-grusvej", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      notificationMessage.value = "E-mail sendt!";
      isNotificationVisible.value = true;
    } else {
      notificationMessage.value = "Fejl ved afsendelse af e-mail: " + result.error;
      isNotificationVisible.value = true;
    }
  } catch (error) {
    console.error("There was an error sending the e-mail:", error);
    notificationMessage.value = "Fejl ved afsendelse af e-mail.";
    isNotificationVisible.value = true;
  }
}

import { defineProps } from "vue";

const props = defineProps({
  selectedService: String,
});

const emit = defineEmits(["close"]);

function closeForm() {
  emit("close");
}

const isNotificationVisible = ref(false);
const notificationMessage = ref("");
</script>

<template >
  <Form :validation-schema="schema" @submit="onSubmit">
    <section
      class="bg-gray-300 bg-opacity-60 grid py-10 lg:pb-[120px] fixed right-0 left-0 top-0 bottom-0 z-50"
    >
      <div class="container m-auto">
        <div class="">
          <div class="w-full m-auto lg:w-1/2 xl:w-5/12 px-4">
            <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
              <button
                @click="closeForm"
                class="absolute bg-red-400 px-2 rounded-full top-3 right-3 text-2xl"
              >
                X
              </button>
              <div class="mb-6">
                <p class="mb-8 text-lg">
                  Vælg din grusvejs løsning her, <br />
                  så vender vi tilbage til dig hurtigst muligt.
                </p>
                <div class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] bg-gray-100">
                  Basis
                </div>
              </div>
              <div class="mb-6">
                <Field
                  class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  placeholder="Dit Navn"
                  name="name"
                  type="name"
                />
                <ErrorMessage name="name" />
              </div>
              <div class="mb-6">
                <Field
                  class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                  placeholder="Din Email"
                  name="email"
                  type="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div class="mb-6">
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Dit tlf nr."
                  class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                />
              </div>
              <div class="mb-6">
                <Field
                  as="textarea"
                  name="text"
                  placeholder="Skal du have ekstra services?"
                  v-model="text"
                  class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary"
                  rows="4"
                />
              </div>
              <div>
                <button
                  class="w-full text-gray-700 bg-primary rounded border border-primary p-3 transition hover:bg-opacity-90"
                >
                  Send
                </button>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Form>
  <div v-if="isNotificationVisible" class="notification-modal grid">
    <p>{{ notificationMessage }}</p>
    <button
      class="bg-SubColor2 p-2 text-lg rounded-lg mt-4 m-auto text-gray-100"
      @click="closeForm"
    >
      Luk Formen
    </button>
  </div>
</template>


<style>
.notification-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 40px;
  font-size: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  z-index: 100;
}
</style>
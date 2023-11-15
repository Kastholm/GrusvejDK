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

const selectedOption = ref("");

async function onSubmit(values) {
  console.log(values);
  const formData = {
    name: values.name,
    email: values.email,
    phone: values.phone,
    grusvej: selectedOption.value,
    text: values.text,
  };

  try {
    const response = await fetch("http://localhost:4000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("E-mail sendt!");
    } else {
      alert("There was an error sending the e-mail.");
    }
  } catch (error) {
    console.error("There was an error sending the e-mail:", error);
  }
}

const isFormVisible = ref(true); // En ny ref til at kontrollere formularens synlighed

function closeForm() {
  isFormVisible.value = false; // Skjuler formularen
}
</script>

<template >
  <Form v-if="isFormVisible" :validation-schema="schema" @submit="onSubmit">
    <section 
      class="bg-gray-300 bg-opacity-60 grid py-20 lg:py-[120px] fixed right-0 left-0 top-0 bottom-0 z-50"
    >
      <div class="container m-auto">
        <div class="">
          <div class="w-full m-auto lg:w-1/2 xl:w-5/12 px-4">
            <div class="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
              <button @click="closeForm" class="absolute bg-red-400 px-2 rounded-full top-3 right-3 text-2xl">
                X
              </button>
              <div class="mb-6">
                <Field
                  v-model="selectedOption"
                  name="service"
                  as="select"
                  class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                >
                  <option value="" disabled>Vælg en mulighed</option>
                  <option value="Den lille Grusvej">Den lille Grusvej</option>
                  <option value="Den lille Grusvej m. Dustex">
                    Den lille Grusvej m. Dustex
                  </option>
                  <option value="Den store grusvej / areal">
                    Den store grusvej / areal
                  </option>
                </Field>
                <ErrorMessage name="grusvej" />
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
                  placeholder="Your Email"
                  name="email"
                  type="email"
                />
                <ErrorMessage name="email" />
              </div>
              <div class="mb-6">
                <Field
                  name="phone"
                  type="tel"
                  placeholder="Dit Telefon Nr"
                  class="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                />
              </div>
              <div class="mb-6">
                <Field
                  as="textarea"
                  name="text"
                  placeholder="Din Besked"
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
</template>



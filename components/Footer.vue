<template>
  <footer class="bg-white text-center" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-16 lg:px-8 lg:pt-16">
      <div class="xl:grid xl:grid-cols-3 xl:gap-0">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-1 md:gap-8">
            <div>
              <h6 class="text-lg font-semibold leading-6 text-gray-900">
                Oversigt
              </h6>
              <ul
                role="list"
                class="mt-6 space-y-4 hover:scale-110 transition-all"
              >
                <li v-for="item in navigation.solutions" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base font-normal leading-6 text-gray-500 hover:text-[#2a8447]"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
            <!-- <div class="mt-10 md:mt-0">
              <h6 class="text-lg font-semibold leading-6 text-gray-900">
                FAQ
              </h6>
              <ul role="list" class="mt-6 space-y-4 hover:scale-110">
                <li v-for="item in navigation.support" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base font-normal leading-6 text-gray-500 hover:text-[#2a8447]"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div> -->
          </div>
          <div class="md:grid md:grid-cols-1 md:gap-8">
            <div>
              <h6 class="text-lg font-semibold leading-6 text-gray-900">
                Kontakt
              </h6>
              <ul
                role="list"
                class="mt-6 space-y-4 hover:scale-110 transition-all"
              >
                <li v-for="item in navigation.company" :key="item.name">
                  <a
                    :href="item.href"
                    class="text-base leading-6 text-gray-600 hover:text-[#2a8447]"
                    >{{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-10 xl:mt-0">
          <h6 class="text-xl font-semibold leading-6 text-gray-900">
            Skal vi kontakte dig?
          </h6>
          <p class="mt-2 text-sm leading-6 text-gray-600">
            Indtast email her - vi vender tilbage indenfor 24 timer alle
            hverdage.
          </p>
          <Form
            :validation-schema="schema"
            @submit="onSubmit"
            class="mt-6 text-center m-auto"
          >
            <div class="grid gap-2 place-content-center">
              <Field
                class="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                placeholder="Din e-mail"
                name="email"
                type="email"
              />

              <Field
                name="phone"
                type="tel"
                placeholder="Dit telefon nr."
                class="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
              />
              <Field
                class="w-full rounded py-2 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                placeholder="Dit navn"
                name="name"
                type="name"
              />
              <div
                class="mt-4 sm:mt-3 sm:flex-shrink-0 justify-center items-center flex"
              >
                <button
                  v-if="!sentMail"
                  @click="showImmediateConfirmation"
                  class="flex max-w-[90px] min-w-[90px] h-10 items-end justify-center rounded-md bg-[#2a8447] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f9b039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Afsted
                </button>
                <p
                  class="flex h-10 items-end justify-center rounded-md bg-[#f9b039] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#f9b039] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  v-if="sentMail"
                >
                  Din E-mail blev sendt
                </p>
              </div>
              <!-- <p
      v-if="isImmediateConfirmationVisible"
      class="text-base font-bold text-green-500 mt-2"
    >
      Din besked er blevet sendt! <br> Vi kontakter dig.
    </p>-->
            </div>
          </Form>
        </div>
      </div>
      <div
        class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24"
      >
        <div class="flex space-x-6 md:order-2">
          <a
            v-for="item in navigation.social"
            :key="item.name"
            :href="item.href"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <p class="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
          &copy; 2024 Grusvej.dk - alle rettigheder reserveret.
        </p>
        <p
          class="mt-8 text-sm leading-5 text-gray-500 md:order-1 md:mt-0 border-b-2"
        >
          Design af
          <NuxtLink
            to="https://www.webtify.dk"
            class="text-blue-600 font-semibold"
          >
            Webtify.dk</NuxtLink
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";

const navigation = {
  solutions: [
    { name: "Forside", href: "https://grusvej.dk/" },
    { name: "Grusveje", href: "https://grusvej.dk/grusveje" },
    { name: "Naturstier", href: "https://grusvej.dk/naturstier" },
    { name: "Støvbekæmpelse", href: "https://grusvej.dk/stoevbekaempelse" },
    { name: "Stabilisering af vejen", href: "https://grusvej.dk/stabiliseringafvejen" },
    { name: "Maskineriet", href: "https://grusvej.dk/maskineriet" },
    { name: "Serviceaftaler", href: "https://grusvej.dk/serviceaftale" },
  ],
  support: [
    { name: "Politik for databehandling", href: "#" },
    { name: "Vilkår", href: "#" },
    { name: "Salgs- & leveringsbetingelser", href: "#" },
  ],
  company: [
    { name: "Kontakt Grusvej.dk", href: "https://grusvej.dk/kontakt/" },
    
  ],
  legal: [
    { name: "Politik for databehandling", href: "#" },
    { name: "GDPR", href: "#" },
    { name: "Vilkår", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Grusvejdk-100063899478149/",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    
  ],
};

import { ref } from "vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

let sentMail = false;

const schema = yup.object({
  email: yup.string().email(),
  phone: yup.string().required(),
  name: yup.string().required(),
});

const selectedOption = ref(props.selectedService);

async function onSubmit(values) {
  console.log(values);
  const formData = {
    email: values.email,
    phone: values.phone,
    name: values.name,
  };

  try {
    const response = await fetch(
      "https://grusvejmail.webtify.dk/send-miniemail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      notificationMessage.value = "E-mail sendt!";
      sentMail = true;
      isNotificationVisible.value = true;
    } else {
      notificationMessage.value = "Fejl ved afsendelse af e-mail.";
      isNotificationVisible.value = true;
    }
  } catch (error) {
    console.error("There was an error sending the e-mail:", error);
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

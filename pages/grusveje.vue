<template>
  <div class="bg-white">
    <main class="isolate -translate-y-">
      <!-- Hero section -->
      <div class="isolate -z-10 -translate-y-">
        <GrusvejeUspHero />
      </div>

      <!-- Content section -->
      <Grusvejinfo>
        </Grusvejinfo>

      <!-- Image section -->
      <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8 -translate-y-36">
        <img
          src="https://i.ibb.co/m9Jn4QY/grusvej-bredformat.jpg "
          alt=""
          class="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";



const mobileMenuOpen = ref(false);
</script>

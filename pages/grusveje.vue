<template>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="isolate -z-10">
        <GrusvejeUspHero />
      </div>

      <!-- Content section -->
      <Grusvejinfo>
        </Grusvejinfo>

      <!-- Image section -->
      <div class=" xl:mx-auto xl:max-w-7xl xl:px-8 -translate-y-44">
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

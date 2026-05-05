<script setup>
import Nav from "~/components/Nav.vue";
import NavPrivat from "~/components/NavPrivat.vue";
import NavErhverv from "~/components/NavErhverv.vue";
import Footer from "~/components/Footer.vue";
import { useRoute, computed } from "#imports";
import { useUserType } from "~/composables/useUserType";

const route = useRoute();
const { userType } = useUserType();

const isHome = computed(() => route.path === "/");
const isPrivat = computed(() => userType.value === "privat");
const isErhverv = computed(() => userType.value === "erhverv");

useHead({
  script: [
    {
      children: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/20978f5d4cff56cb21297d119/c1164c6c1c0a0b3af07dd0d23.js");`,
    },
  ],
});
</script>

<template>
  <div>
    <div v-if="!isHome">
      <NavPrivat v-if="isPrivat" />
      <NavErhverv v-else-if="isErhverv" />
      <Nav v-else />
      <!-- fallback if no choice yet -->
    </div>
    <main>
      <slot />
    </main>
    <div v-if="!isHome">
      <Footer v-if="isPrivat" />
      <FooterErhverv v-else-if="isErhverv" />
      <!-- fallback if no choice yet -->
    </div>
  </div>
</template>

<style>
@import url("https://use.typekit.net/rwl1ktr.css");
/* Styling af Scrollbar */
/* ::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-gradient-to-t bg-Metric to-smooth;
}
::-webkit-scrollbar-thumb {
  @apply bg-cyangreen;
} */
/* Responsive tags der ændrer størrelse udfra skørmstørrelse */
/* 640px smaller */

@media screen and (max-width: 31em) {
  html {
    font-size: 4.2vw;
  }
}
@media screen and (max-width: 23em) {
  html {
    font-size: 5vw;
  }
}
/* 640px bigger */
@media screen and (min-width: 31em) {
  html {
    font-size: 3vw;
  }
}
@media screen and (min-width: 40em) {
  html {
    font-size: 2.5vw;
  }
}
@media screen and (min-width: 50em) {
  html {
    font-size: 1.05em;
  }
}
/* *{
  @apply text-smooth;
} */
/* p {
  font-family: "source-sans-3", sans-serif;
  font-weight: 400;
  font-style: normal;
  @apply text-[1.1rem];
} */
</style>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { defineComponent } from "@vue/composition-api";
import dotenv from "dotenv";
</script>
<<<<<<< HEAD
=======

<style>
/* Henter fonts fra Adobe Typekit (https://fonts.adobe.com/fonts/futura-pt-condensed) og Open Sans (https://fonts.adobe.com/fonts/open-sans)  */
@import url("https://use.typekit.net/rbp7ctt.css");
/* Generel Header styling */
.Header {
  font-family: "futura-pt-condensed", sans-serif;
  font-weight: 700;
  @apply tracking-normal;
}
/* Store headers, normalvis en H1 */
.MainHeader,
h1 {
  @apply max-w-2xl text-4xl font-bold uppercase text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto;
}
/* Section Headers der skal være fremtrædende ved sektioner, normalvis en H2 / H3 */
.SubHeader{
  @apply text-5xl uppercase font-semibold;
}
/* For testing purpose */
.TestHeader {
  @apply text-6xl uppercase;
  font-weight: 400;
}
/* Generel tekst styling */
.Text,
p,
a {
  font-family: "open-sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}
/* Læsbar skrift der skal læses af brugeren */
.TextReadable {
  @apply text-lg leading-8;
}
.TextHeader {
}
</style>
>>>>>>> cda12e7a74d35c8db8fb081ef1a0f81eac8da8dc

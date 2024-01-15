<template>
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script>
export default {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // other configurations...
};
</script>

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

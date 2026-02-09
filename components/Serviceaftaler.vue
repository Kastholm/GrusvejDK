<template>
  <section class="overflow-hidden bg-white">
    <div class="pt-8 pb-7">
      <center>
        <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div class="sm:max-w-full">
            <!-- skal gøres til H1-->
            <h1
              class="relative lg:text-[67px] text-[1.8rem] fontfam-NO-W mb-10 text-center max-w-[80%] m-auto pb-6 pt-10"
            >
              Vedligeholdelsesaftaler <br />
              - en investering i vejens levetid og vores ressourcer
            </h1>
            <!-- skal gøres til H1-->
          </div>
        </div>
      </center>
    </div>
  </section>
  <!-- serviceaftaler start -->
  <section
    class="bg-white  dark:bg-gray-800 sm:text-start text-center"
  >
    <div class="relative container px-6 py-8 mx-auto mb-10">
      <div
        class="flex items-center justify-center lg:flex-row flex-col gap-10"
      >
      <div class="lg:max-w-[50%] order-2 lg:order-1 flex flex-col gap-7 text-white">
      <p class=" text-white">
        <strong>Basis vedligeholdelse <br> - den nemme løsning for private</strong><br><br>
        Vil du gerne have en pæn og velfungerende grusvej uden selv at skulle holde øje med det hele?<br>
        Med vores basis vedligeholdelsesaftale sørger vi for, at din grusvej bliver passet løbende – så små problemer ikke udvikler sig til store og dyre reparationer.
      </p>
      <ul class="w-full flex flex-col gap-4">
        <p>Aftalen kan nemt udvides efter behov, og du vælger helt frit til og fra. Det giver både fleksibilitet, overblik og en bedre pris.
        Du kan tilvælge – <strong>helt uden binding:</strong></p>
        <li class="text-start font-bold">- Støvbekæmpelse</li>
        <li class="text-start font-bold">- Ekstra service efter skybrud og kraftig regn</li>
        <li class="text-start font-bold">- Forstærket vedligeholdelse ved tung trafik eller byggeri</li>
      </ul>
        </div>
        <div
          class="px-6 py-4 transition-colors duration-200 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 h-fit order-1 lg:order-2"
        >
          <p class="text-lg font-medium text-gray-800 dark:text-gray-100 ">
            <strong>Basis aftale</strong>
          </p>
          <h4
            class="mt-2 text-4xl font-semibold text-center sm:text-start text-gray-800 dark:text-gray-100"
          >
            39.-
            <span class="text-base font-normal text-gray-600 dark:text-gray-400"
              >/ pr.meter</span
            >
          </h4>
          <div class="mt-8 space-y-8">
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="max-w-5 max-h-5 min-w-5 min-h-5 text-[#137733]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sm:mx-4 text-gray-700 dark:text-gray-300 "
                >Gælder for grusveje på 100–300 meter. Er der mere, får du rabat. Er der mindre, skal vi have et lille gebyr for at komme.</span
              >
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="max-w-5 max-h-5 min-w-5 min-h-5 text-[#137733]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sm:mx-4 text-gray-700 dark:text-gray-300 "
                >Maks. <strong>3 meters bredde.</strong></span
              >
            </div>
            <div class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="max-w-5 max-h-5 min-w-5 min-h-5 text-[#137733]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="sm:mx-4 text-gray-700 dark:text-gray-300 "
                >Arealer over 300 meter gives <strong>20% rabat</strong></span
              >
            </div>

            <button
            @click="selectServiceOption('Basis')"
            class="w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-[#137733] rounded-md hover:bg-[#f9b039] focus:outline-none focus:bg-blue-600"
          >
            Vælg
          </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- serviceaftaler slut -->
  <GrusvejForm
    v-if="isFormVisible"
    :selectedService="selectedOption"
    @close="isFormVisible = false"
  >
  </GrusvejForm>

  <div class="flex flex-col items-center text-center">
    <h2 class="Header uppercase">Har du spørgsmål?</h2>
    <a href="/kontakt" class="text-white font-bold text-sm md:text-xl">
      <div
        class="h-14 w-fit rounded p-2 px-4 bg-[#2a8447] translate-y-2 transition-transform md:duration-200 md:hover:scale-110 text-center border shadow-2xl"
      >
        <button class="translate-y-1 sm:translate-y-2 text-base block">
          Kontakt Grusvej.dk
        </button>
      </div>
    </a>
  </div>
</template>

<script setup>
const isFormVisible = ref(false);

const selectedOption = ref("");

function selectServiceOption(option) {
  selectedOption.value = option;
  isFormVisible.value = true;
  console.log(selectedOption);
}
</script>

<style>
.fontfam-NO-W {
  font-family: "futura-pt-condensed", sans-serif;
  line-height: 1;
  font-weight: 700;
  text-transform: uppercase;
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / 1);
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.clippath1 {
  clip-path: polygon(82% 0, 83% 0, 100% 89%, 100% 94%);
}
.clippath2 {
  clip-path: polygon(85% 0, 84% 0, 100% 85%, 100% 80%);
}
</style>

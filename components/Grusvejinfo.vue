<template>
  <div class="bg-white py-24 sm:py-18 ">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-4 -translate-y-48 sm:-translate-y-36 lg:order-none order-last">
          <div
            class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 translate-y-36"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover "
              src="https://i.ibb.co/gtrs2bF/Naturstier2-Grusvej.webp"
              alt=""
            />
            <div class="absolute inset-0 mix-blend-multiply" />
            <div
              class="absolute left-1/2 top-1/2 -ml-16 transform-gpu"
              aria-hidden="true"
            >
              <div
                class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#fcf2ff] to-[#c9c1cc] opacity-40"
                style="
                  clip-path: polygon(
                    74.1% 44.1%,
                    100% 61.6%,
                    97.5% 26.9%,
                    85.5% 0.1%,
                    80.7% 2%,
                    72.5% 32.5%,
                    60.2% 62.4%,
                    52.4% 68.1%,
                    47.5% 58.3%,
                    45.2% 34.5%,
                    27.5% 76.7%,
                    0.1% 64.9%,
                    17.9% 100%,
                    27.6% 76.8%,
                    76.1% 97.7%,
                    74.1% 44.1%
                  );
                "
              />
            </div>
            <figure class="relative isolate h-10 sm:h-full">
              <img
                src="https://i.ibb.co/w4wfqxs/Grusvej-logo-200x95px.png"
                alt=""
                class="sm:h-16 w-auto sm:-translate-y-0 -translate-y-10"
              />
              <blockquote
                class="mt-6 text-xl font-semibold leading-8 text-white bg-[#646065] rounded-xl p-4 bg-opacity-60 text-center"
              >
                <p class="tracking-wide text-4xl fontfam">
                 "Vi håndterer alle typer grusveje - uanset type & størrelse"
                </p>
              </blockquote>
            </figure>
            
          </div>
        </div>
        <div>
          <div class="leading-7 text-gray-700 lg:max-w-lg -translate-y-4">
            <h1
              class="mt-2 text-4xl font-bold tracking-wide text-gray-900 sm:text-[3.60rem] sm:leading-[1] fontfam"
            >
            GRUSVEJ.DK GIVER DIN GRUSVEJ DEN RETTE FORM – OG PLEJE
            </h1>
            
            <div class="max-w-xl lg:order-none">
              <p class="mt-6 Text TextReadable">
                En korrekt anlagt grusvej holder i mange år. Med den rette pleje i endnu flere. I Danmark er det regnvandet som udfordrer de fleste grusveje.
                I kombination med forkert funderede underlag resulterer det i årlige ærgrelser med tilbagevendende huller og skred i vejprofilen.
                For ikke at tale om de omkostninger og slitage på køretøjer en dårlig grusvej afstedkommer. <br><br>
                Grusvej.dk har gennem mange år etableret og vedligeholdt grusveje i Danmark. Vores specialmaskiner har lagt bund for mange hundrede kilometer grusveje gennem årene. Med serviceaftaler forlænger vi levetiden på vejen, ligesom vi højner glæden ved at have en god og støvfri grusvej at færdes på.

              </p>
            </div>
          </div> 
        </div> 
      </div>
      <div class="flex flex-col items-center">
          <div class="max-w-[600]">
              <h3 class="text-center m-0 font-bold text-4xl text-grey-900 uppercase Header w-full  leading-[1] mt-20 mb-14">Garanti på din grusvej</h3>
             </div>
             <p class="Text TextReadable text-grey-900 max-w-[1000px] text-center">Når bærelaget har den tilstrækkelige bæreevne, vejprofilen får den rigtige facon og vandet kan afledes til rabat og nedsivningsarealet, så kan du få garanti på din grusvej ved indgåelse af en serviceaftale.
             <br><br>Vores service aftaler indgås individuelt, og tilbydes i forbindelse med, at vi fremsender tilbuddet på udbedring af din vej. <br><br> Her kan du se hvad en serviceaftale med grusvej.dk kan indeholde. </p>
             <a
                href="/serviceaftale"
                class="text-white font-bold text-sm md:text-xl"
              >
               <div
                  class="h-11 w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center translate-y-5 border shadow-2xl"
                >
                  <button class="translate-y-1 sm:translate-y-0 text-base block">
                    Se serviceaftaler
                  </button>
               </div>
              </a>
             <dl
            class="mt-10 grid grid-rows-2 border-t border-gray-900/10 sm:grid-rows-2 -translate-y-14 sm:order-none order-4 trans-0 mb-20"
          >
            <div v-for="(stat, statIdx) in stats" :key="statIdx">
              <dt
                class="text-6xl font-semibold leading-8 text-gray-900 fontfam tracking-wider py-10 text-center"
              >
                {{ stat.label }}
              </dt>
              <dd
                class="mt-3 text-7xl font-semibold leading-12 sm:leading-10 tracking-tight text-gray-900 fontfam text-center border-l-2 border-b-2 border-[#f9b039] p-3"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { value: "+4000 km anlagt" },
  { label: "FOR PRIVATE OG VIRKSOMHEDER", value: "+250 Glade kunder" },
];
</script>

<style>
.fontfam {
  font-family: "futura-pt-condensed", sans-serif;
}

.trans-0 {

  transform: translateY(0) !important;
  transform: translateX(0) !important;
}
</style>

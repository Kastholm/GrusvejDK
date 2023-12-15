<template>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="">
        <StoevUspHero />
      </div>
      <div class="relative isolate -z-10">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full mobile stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f9b039] to-[#137733] opacity-40"
            style="
              clip-path: polygon(
                63.1% 29.5%,
                100% 17.1%,
                76.6% 3%,
                48.4% 0%,
                44.6% 4.7%,
                54.5% 25.3%,
                59.8% 49%,
                55.2% 57.8%,
                44.4% 57.2%,
                27.8% 47.9%,
                35.1% 81.5%,
                0% 97.7%,
                39.2% 100%,
                35.2% 81.4%,
                97.2% 52.8%,
                63.1% 29.5%
              );
            "
          />
        </div>
        <div
          class="mx-auto mt-32 max-w-7xl px-6 sm:mt-0 lg:px-8 pt-14 sm:-translate-y-0 -translate-y-28"
        >
          <div class="mx-auto max-w-2xl lg:mx-0 inline">
            <h2
              class="font-bold tracking-tight text-gray-900 sm:text-7xl text-3xl Header text-center"
            >
              <span class="sm:text-9xl text-7xl rounded uppercase">
                Dustex </span
              >- <span> ET </span
              ><span class="uppercase text-[#199d43]"> miljøvenligt </span>
              PRODUKT
            </h2>
            <p
              class="mt-6 text-lg leading-8 font-semibold text-black text-center"
            >
              Du får mange fordele ved at vælge Dustex til behandling af din
              grusvej eller grusarealer.
            </p>
          </div>
          <dl
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            <div v-for="value in values" :key="value.name">
              <dt class="font-semibold text-xl text-gray-900">
                {{ value.name }}
              </dt>
              <dd class="mt-1 text-gray-600">{{ value.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div class="max-w-[100%] text-center sm:-translate-y-0 -translate-y-16">
        <h3
          class="font-bold tracking-tight text-gray-900 sm:text-7xl text-3xl Header text-center max-w-[100%] uppercase"
        >
          Dustex er perfekt til at stabilisere veje
        </h3>
        <p class="Text TextReadable max-w-[80%] m-auto">
          Hvis behovet er at stabilisere en vej med dårlig bæreevne, så er
          Dustex også ideel.<br />
          Dustex kan fræses ned i vejens dårlige bærelag. Ved at bruge en
          fræser, der kan knuse sten, får vi brugt den eksisterende asfalt og
          underlag og forvandlet dette til en stærk "plade". <br />
          Dette er en meget ressourcebesparende metode og derfor en økonomisk
          fordelagtig metode. På veje med mindre trafik kan man beholde vejen
          som en "dustex stabiliseret grusvej". Dette stabiliserede underlag er
          også ideelt til at lægge asfalt ovenpå og asfaltering kan finde sted
          efter en hærdningsperiode på 4-8 uger eller efter nogle år.
        </p>
      </div>

      <!--Stabilisering billeder-->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-16">
        <!-- First grid item (Image 1 with text) -->
        <div class="flex flex-col items-center">
          <div
            class="mb-2 Header uppercase text-gray-900 text-5xl font-bold pb-6 sm:text-start text-center"
          >
            Behandles med Dustex
          </div>
          <img
            class="rounded-lg sm:mb-0 mb-10"
            src="https://i.ibb.co/vdJZpHF/vej-i-proces.jpg"
            alt="Image 1"
          />
        </div>
        <!-- Second grid item (Image 2 with text) -->
        <div class="flex flex-col items-center">
          <div
            class="mb-2 Header uppercase text-gray-900 text-5xl font-bold pb-6 sm:text-start text-center"
          >
            Hårdhed efter 14 dage
          </div>
          <img
            class="rounded-lg"
            src="https://i.ibb.co/vd7FRhw/vej-efter-14-dage.jpg"
            alt="Image 2"
          />
        </div>
      </div>

      <!-- old Image section -->
      <!-- <div class="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <VideoPlayerDustex class="aspect-[5/2] w-full object-cover xl:rounded-3xl">
        </VideoPlayerDustex>
      </div> -->
      <!-- Content section -->
      <div
        class="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 translate-y-10 sm:-translate-y-10"
      >
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="text-5xl sm:text-7xl font-bold tracking-tight text-gray-900 ml-3 pb-3 pt-28 Header text-center sm:w-full w-[320px] sm:-translate-x-0 -translate-x-6"
          >
            SLIP FOR STØVGENER I AL SLAGS VIND & VEJR
          </h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-xl leading-8 text-gray-700 font-bold">
                Et eksempel fra de danske grusveje:
              </p>
              <div class="mt-10 max-w-xl text-xl leading-7 text-gray-700">
                <p>
                  Grundejere i sommerhusområder er nogle af dem som er mest
                  plaget af støvgener. På Tuse Næs i Nordvestsjælland valgte man
                  for år tilbage derfor at tage fat i problemet.
                  <br /><br />”Det er nu tre år siden at Grusvej.dk renoverede
                  vores fælles veje og gav dem den rigtige profil, så vejene kan
                  holde. Når vi kan mærke, at støvgenerne begynder at komme
                  igen, ringer vi bare til Grusvej.dk. Intervallerne afhænger
                  altid af, hvordan vejret har opført sig”, fortælle kasserer i
                  Fjordvang Grundejerforening, Kim Zengenberg, som er glad for
                  samarbejdet med Grusvej.dk.
                </p>
                <p class="mt-10 text-xl">
                  ”Det har givet en markant forbedring at få lagt Dustex på de
                  tilhørende fælles veje. Vores biler er ikke konstant støvet
                  til, og vi slipper for støvskyer drivende mellem og ind i
                  husene.” <br /><br />
                  Hvor lang tid der skal gå mellem støvbehandlingerne, afhænger
                  af hvor længe og hvor tørt vejret er. I perioder med ustadigt
                  og fugtigt vejr er problemet med støv selvsagt ikke så stort,
                  mens sommerens lange tørkeperioder fremmer problemet med støv
                  fra grusvejene.
                </p>
              </div>
            </div>
            <div
              class="lg:flex lg:flex-auto lg:justify-center flex-rows-reverse sm:-translate-y-0 -translate-y-20"
            >
              <dl class="w-64 space-y-8 xl:w-80 inline lg:block">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="flex flex-col-reverse gap-y-4 border-4 border-[#f9b039] bg-[#f9b039] text-center rounded-lg p-1 font-semibold translate-y-20"
                >
                  <dt class="text-base leading-1 text-white -translate-y-2">
                    {{ stat.label }}
                  </dt>
                  <center>
                    <dd
                      class="text-4xl fontfam font-bold tracking-wide text-white"
                    >
                      {{ stat.value }}
                    </dd>
                  </center>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-full rounded-md pt-">
        <div
          ref="playerContainer"
          id="vimeo-player"
          class="mt-10 aspect-[6/5] h-72 w-full rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 grid place-content-center overflow-hidden"
          style="height: 515px"
        >
          <button
            @click="toggleVideo"
            class="absolute lg:left-1/2 md:left-[19em] left-[50%] lg:top-[16.5em] top-[20em] transform -translate-x-1/2 translate-y-10 text-white bg-grey-200 bg-opacity-50 rounded-full p-2"
          >
            <PlayIcon v-if="!isPlaying" class="h-12 w-12" />
            <PauseIcon v-if="isPlaying" class="h-12 w-12" />
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref, onMounted, onUnmounted } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import {
  Bars3Icon,
  XMarkIcon,
  PlayIcon,
  PauseIcon,
} from "@heroicons/vue/24/outline";
import Player from "@vimeo/player";
let player = null;
let isPlaying = ref(false);
let playerContainer = ref(null);
onMounted(async () => {
  player = new Player("vimeo-player", {
    id: 886203979,
    width: playerContainer.value.offsetWidth * 0.8,
    controls: false,
    loop: true,
  });
  await player.setVolume(0.5);

  // Resize the player when the window is resized
  const resizeHandler = () => {
    player.setSize(playerContainer.value.offsetWidth);
  };

  window.addEventListener("resize", resizeHandler);

  // Remove the event listener when the component is unmounted
  onUnmounted(() => {
    window.removeEventListener("resize", resizeHandler);
  });
});

const toggleVideo = () => {
  if (player) {
    isPlaying.value ? player.pause() : player.play();
    isPlaying.value = !isPlaying.value;
  }
};

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Company", href: "#" },
];
const stats = [
  {
    label:
      "Dustex holder støvpartiklerne bundet i op til 1 år efter behandling af din grusvej.",
    value: "Op til 1 års holdbarhed",
  },
  {
    label:
      "Efter aftale ankommer vi på adressen og udfører arbejdet samme dag.",
    value: "Hurtig påføring",
  },
  {
    label:
      "Kroppen tager skade af kontinuerlig indånding af støvpartikler fra grusarealer. ",
    value: "Giver et bedre helbred",
  },
];
const values = [
  {
    name: "Ufarligt",
    description:
      "Dustex er 100% naturprodukt udvundet af norske grantræer og er ufarligt for mennesker og dyr. Det er desuden 100% CO2-neutralt.",
  },
  {
    name: "Allergivenligt",
    description:
      "Dustex giver ingen luftvejsgener da bindemidlet er så stærkt at det ikke forekommer luftbårent.",
  },
  {
    name: "Biologisk nedbrydeligt",
    description:
      "Dustex nedbrydes organisk fordi det stammer fra grantræer. Nedbrydningen er helt uskadelig for naturen.",
  },
  {
    name: "Ingen rustpåvirkning af biler & maskiner",
    description:
      "Dustex er ikke korrosivt og skader derfor ikke metaller eller lignende materialer vi anvender i vores køretøjer.",
  },
  {
    name: "Helbredsmæssige fordele",
    description:
      "Fordi Dustex effektivt binder støvet i grusveje/arealer undgår mennesker og dyr negative luftvejs påvirkninger, der kan være sundhedsskadelige på sigt.",
  },
  {
    name: "Lugtfrit naturprodukt",
    description:
      "Dustex er baseret på naturens eget bindemiddel, lignin. Til forskel fra harpiks, er Dustex næsten lugtfri.",
  },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>
</style>


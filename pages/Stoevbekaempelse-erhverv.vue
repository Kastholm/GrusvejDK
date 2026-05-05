<template>
  <head>
    <title>Slip for grusvejens støvgener med det naturvenlige Dustex</title>
    <meta
      name="description"
      content="Sig farvel til støvskyer på grusvejen og støvgener i hjemmet. Vores naturvenlige bindingsmiddel, Dustex, sikrer dig en støvfri grusvej i op til 2 år."
    />
  </head>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="">
        <StoevUspHeroErhverv />
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
          class="mx-auto flex flex-col items-center lg:mt-10 mt-20 max-w-7xl px-6 sm:mt-0 lg:px-8 pt-14 sm:-translate-y-0 -translate-y-28"
        >
          <div
            class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 max-w-5xl lg:ml-0"
          >
            <h2
              class="border-t-4 border-[#199d43] pt-5 text-gray-900 text-2xl lg:text-3xl smallHeader text-left"
            >
              <span class="text-[#199d43]">-</span> OP TIL 3 MÅNEDERS HOLDBARHED
            </h2>
            <h2
              class="lg:border-t-4 border-[#f9b039] lg:pt-5 text-gray-900 text-2xl lg:text-3xl smallHeader text-left"
            >
              <span class="text-[#f9b039]">-</span> HURTIG UDLÆGNING
            </h2>
            <h2
              class="lg:border-b-4 border-[#199d43] lg:pb-5 text-gray-900 text-2xl lg:text-3xl smallHeader text-left"
            >
              <span class="text-[#199d43]">-</span> STØVDÆMPNING GIVER BEDRE
              HELBREDSBETINGELSER FRI FOR STØV
            </h2>
            <h2
              class="border-b-4 border-[#f9b039] pb-5 text-gray-900 text-2xl lg:text-3xl smallHeader text-left"
            >
              <span class="text-[#f9b039]">-</span> BIOLOGISK NEDBRYDELIGT &
              UFARLIGT FOR MENNESKER & DYR
            </h2>
          </div>
        </div>

        <div
          class="flex flex-col items-center mx-auto lg:mt-10 max-w-7xl px-6 sm:mt-0 lg:px-8 pt-14 sm:-translate-y-0 -translate-y-28"
        >
          <div class="mx-auto max-w-2xl lg:mx-0 inline">
            <h2
              class="mb-14 font-bold tracking-tight text-gray-900 sm:text-7xl text-3xl Header text-center"
            >
              HOS
              <span
                class="sm:text-7xl text-5xl text-[#199d43] rounded uppercase"
              >
                Grusvej.dk </span
              >ARBEJDER VI PRIMÆRT MED:
            </h2>
            <NuxtLink
              to="/innolig-skema"
              class="text-white font-bold max-w-[300px] text-sm md:text-xl m-auto"
            >
              <div
                class="m-auto h-fit w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center -translate-y-5 border shadow-2xl"
              >
                <button class="sm:translate-y-0 text-base block">
                  Se sammenlignings-skema
                </button>
              </div>
            </NuxtLink>
          </div>

          <dl
            class="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-5 text-base leading-7 sm:grid-cols-2 lg:max-w-[75%] lg:grid-cols-2 lg:mb-10 lg:mx-auto"
          >
            <div v-for="inoligvalue in inoligvalues" :key="inoligvalue.name">
              <dt class="font-bold text-2xl text-[#199d43]">
                {{ inoligvalue.name }}
              </dt>
              <dd class="mt-3 font-semibold text-lg text-gray-600">
                <template v-if="inoligvalue.link">
                  <NuxtLink
                    :to="inoligvalue.link"
                    class="text-[#199d43] hover:opacity-80"
                  >
                    {{ inoligvalue.description }}
                  </NuxtLink>
                </template>
                <template v-else>
                  {{ inoligvalue.description }}
                </template>
              </dd>
            </div>
          </dl>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:gap-10 lg:pt-16 pt-10">
            <!-- First grid item (Image 1 with text) -->
            <div class="flex flex-col items-center">
              <img
                class="rounded-lg sm:mb-0 mb-10"
                src="https://i.ibb.co/vdJZpHF/vej-i-proces.jpg"
                alt="Image 1"
              />
            </div>
            <!-- Second grid item (Image 2 with text) -->
            <div class="flex flex-col items-center">
              <img
                class="rounded-lg"
                src="https://i.ibb.co/vd7FRhw/vej-efter-14-dage.jpg"
                alt="Image 2"
              />
            </div>
          </div>
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

const inoligvalues = [
  {
    name: "Innolig+",
    description:
      "Udvundet af restprodukter fra papirindustrien er Innolig+ et cirkulært og miljøvenligt valg, der ikke påvirker grundvand eller vegetation negativt. Produktet binder effektivt fine partikler til overfladen, reducerer støv selv i tørre perioder og skaber en fleksibel og slidstærk vejoverflade. Velegnet til grusveje og andre områder, hvor der ønskes en stabil og bæredygtig støvbekæmpelse",
  },
  {
    name: "GV Støvbekæmper",
    description:
      "Udvundet af grantræ er GV støvdæmper et naturbaseret og miljøvenligt valg. Produktet binder effektivt fine partikler, reducerer støv og skaber en stabil og slidstærk overflade. Velegnet til grusveje og andre arealer, hvor der ønskes en bæredygtig støvbekæmpelse uden negativ påvirkning af miljøet",
  },
  {
    name: "DUST-AWAY",
    description:
      "DUST-AWAY er et effektivt og miljøvenligt støvbindemiddel baseret på calciummagnesiumacetat (CMA). Produktet binder fine partikler til overfladen og reducerer støv markant, samtidig med at det skaber en stabil og holdbar overflade. DUST-AWAY er ikke-ætsende og skånsom mod materialer, og er særligt velegnet til veje og pladser med fast belægning, hvor der ønskes en driftssikker og langtidsholdbar støvbekæmpelse",
  },
  {
    name: "For mere information",
    description: "Kontakt Grusvej.dk →",
    link: "/kontakt",
  },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped></style>

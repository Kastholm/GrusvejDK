<template>
  <div class="bg-gray-50">
    <div class="mx-auto max-w-7xl pt-24 sm:px-2 sm:pt-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div
          class="grid grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2"
        >
          <img
            class="opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8"
            src="https://i.ibb.co/gtZq30x/Untitled-design.png"
            alt="Image Description"
          />
          <img
            class="opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8"
            src="https://i.ibb.co/p1253nF/Untitled-design-1.png"
            alt="Image Description"
          />
          <div class="w-full -translate-y-20">
            <h1
              class="tracking-tight text-gray-900 mb-16 Header uppercase font-bold relative text-7xl"
            >
              Effektiv og bæredygtig
              <span class="text-5xl lg:text-8xl text-[#199d43]"
                >Støvbekæmpelse</span
              >
            </h1>
            <p class="mt-4 text-black relative text-xl -translate-y-10">
              Støv fra grusveje kan være til gene for både trafikanter, beboere,
              maskiner og miljø. <br />Derfor tilbyder vi støvbekæmpelse med
              produkter, der er både effektive og mere skånsomme for naturen.
            </p>
            <a
              href="/serviceaftale"
              class="text-white font-bold text-sm md:text-xl"
            >
              <div
                class="h-fit w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center -translate-y-5 border shadow-2xl"
              >
                <button class="sm:translate-y-0 text-base block">
                  Få en serviceaftale hos Grusvej.dk
                </button>
              </div>
            </a>
          </div>
          <div class="relative overflow-hidden">
            <div
              id="vimeo-player"
              class="mt-10 aspect-[6/5] h-72 w-full max-w-lg rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 p-12 grid place-content-center"
              style="height: 515px"
            >
              <button
                @click="toggleVideo"
                class="absolute lg:left-1/2 md:left-[19em] left-[50%] lg:top-[16.5em] top-[20em] transform -translate-x-1/2 -translate-y-1/2 text-white bg-grey-200 bg-opacity-50 rounded-full p-2"
              >
                <PlayIcon v-if="!isPlaying" class="h-12 w-12" />
                <PauseIcon v-if="isPlaying" class="h-12 w-12" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
onMounted(async () => {
  player = new Player("vimeo-player", {
    id: 1187068251, // Video ID
    width: 720,
    height: 515,
    controls: false,
    loop: true,
  });
  await player.setVolume(0.5); // Optionally set the volume to 50%
});

const toggleVideo = () => {
  if (player) {
    isPlaying.value ? player.pause() : player.play();
    isPlaying.value = !isPlaying.value;
  }
};
</script>

<style>
.clippath1 {
  clip-path: polygon(82% 0, 83% 0, 100% 89%, 100% 94%);
}
.clippath2 {
  clip-path: polygon(85% 0, 84% 0, 100% 85%, 100% 80%);
}
.fontfam {
  font-family: "futura-pt-condensed", sans-serif;
}
</style>

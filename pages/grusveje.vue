<template>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="isolate -z-10">
        <GrusvejeUspHero />
      </div>

      <!-- Content section -->
      <Grusvejinfo> </Grusvejinfo>

      <div class="relative w-full rounded-md -translate-y-14">
        <div
          ref="playerContainer"
          id="vimeo-player"
          class="mt-10 aspect-[6/5] h-72 w-screen rounded-2xl sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 p-12 grid place-content-center "
          style="height: 515px; width: 100vw"
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
    id: 832545609,
    width: playerContainer.value.offsetWidth * 0.8,
    controls: false,
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

const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* #player-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 22.25%;
  height: 0;
}

#vimeo-player {
  width: 100%;
  height: 100%;
} */
</style>

<template>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="isolate -z-10">
        <GrusvejeUspHero />
      </div>


      <!-- Content section -->
      <Grusvejinfo> </Grusvejinfo>

    <div class=" -translate-y-16">
     <h3 class="mt-2 text-5xl w-[43%] font-bold tracking-wide text-gray-900 sm:text-6xl fontfam">DE <span class=" text-SubColor2 sm:text-8xl">5</span> BUD <br> <span class="sm:text-5xl">- PÅ EN PERFEKT GRUSVEJ</span></h3>
     
    </div>

      <div class="tabBody -translate-y-20">
        <div class="tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ active: currentTab.id === tab.id }"
            @click="changeTab(tab)"
          >
            {{ tab.manchet }}
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <div class="tab-content" :key="currentTab.id">
            <div class="px-2">
              <h2 class="font-bold -translate-y-4 sm:-translate-y-0">{{ currentTab.name }}</h2>
              <h3 class="translate-x-1 translate-y-2 font-bold">{{ currentTab.manchet }}</h3>
              <p class="translate-y-0 sm:translate-y-10">{{ currentTab.text }}</p>
              <p class="translate-y-0 sm:translate-y-16">{{ currentTab.text2 }}</p>
            </div>
            <div
              class="img-div max-h-64 translate-y-4 sm:translate-y-0 sm:max-h-96"
              :style="{ backgroundImage: 'url(' + currentTab.imgSrc + ')' }"
            ></div>
          </div>
        </transition>
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

const tabs = [
  {
    id: 1,
    name: "Vandet",
    imgSrc:
      "https://images.pexels.com/photos/12495785/pexels-photo-12495785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Det er i overvejende grad vand som ødelægger en grusvej. Når vand samlet sig i ujævnheder i vejen, fjernes grus og materiale yderligere og større huller begynder at danne sig. ",
    text2: "Slid på biler og dæk er også forbundet med vand, da vandet på ubehandlet veje vender småsten med den skarpe side op der resulterer i svær slid af bla. dæk på køretøjer.",
    manchet: "Bud 1",
  },
  {
    id: 2,
    name: "Grøften & nedsivnings arealet",
    imgSrc:
      "https://images.pexels.com/photos/4372184/pexels-photo-4372184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "For at vejen kan holde i flere år skal der altid være afledning væk fra vejen. Dette forhindre dannelse af små vandhuller i vejens ujævnheder og den medførte slid nævnt i bud 1. ",
    manchet: "Bud 2",
  },
  {
    id: 3,
    name: "Bærelaget i grusvejen",
    imgSrc:
      "https://images.pexels.com/photos/8938485/pexels-photo-8938485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Vi er allerede i en tid, hvor regnvand og store lastbiler belaster vores grusveje. Hvilket kun vil øges fremover, så vi skal sikre os at bærelaget i grusvejen har den nødvendige bæreevne.",
    manchet: "Bud 3",
  },
  {
    id: 4,
    name: "Vejens profil",
    imgSrc:
      "https://images.pexels.com/photos/12932782/pexels-photo-12932782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "For at lede vandet væk fra veje i det rette tempo skal vejprofilen have et tværfald på 25-40 promille. ",
    text2: "Det rette tempo på afledning af vandet er en vigtig faktor for, at vejen mister minimalt af grus og materiale over tid.",
    manchet: "Bud 4",
  },
  {
    id: 5,
    name: "Vejens slidlag",
    imgSrc:
      "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "For at vejen opnår den bedst mulige holdbarhed skal slidlaget være vejgrus. ",
    text2: "Den rette grus er vigtigt for vejens holdbarhed, at anvende den forkerte type grus kan resultere i, at vejens profil aftager langt hurtigere.",
    manchet: "Bud 5",
  },
];

const currentTab = ref(tabs[0]); // start with the first tab

function changeTab(tab) {
  currentTab.value = tab;
}
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
.tabs {
  @apply bg-opacity-60;
  margin-bottom: auto;
  display: grid;
  gap: 2em;
  padding: 2em 0 2em 0;
  height: 100%;
  box-shadow: 0 0 20px rgba(0.2, 0, 0, 0.2);
  background: #f9f9f9;
}
@media (max-width: 1150px) {
  .tabs {
    display: flex;
    justify-content: start;
    overflow-x: scroll;
    width: 100%;
  }
}
.tabs button {
  @apply bg-white bg-opacity-70;
  margin: 0 1em 0 1em;
  height: fit-content;
  padding: 1em;
  width: 10em;
  min-width: 8em;
  border-radius: 20px;
}

.tabs .active {
  /* Vue green */
  color: black;
  background: #99e1c1;
  @apply bg-[#199d43] bg-opacity-70;
  /* @apply bg-yellow-vivid-200; */
}

.tabBody {
  display: grid;
  grid-template-columns: auto auto;
  overflow: hidden;
  background: linear-gradient(to right, white 0%, white 20%, #199d4371 70%);
  border-radius: 20px;
}
@media (max-width: 1150px) {
  .tabBody {
    grid-template-columns: 1fr;
    overflow: visible;
  }
}

.tabBody .img-div {
  height: 35em;
  background-position: center;
  border-radius: 20px;
}

.tabBody h2 {
  font-size: 4rem;
  line-height: 4rem;
}
.tabBody h3 {
  font-size: 1.4rem;
  margin: 0;
  margin-bottom: 1em;
  text-align: left;
}
.tabBody p {
  font-size: 1.1rem;
}

.tab-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2em;
}
@media (max-width: 950px) {
  .tab-content {
    grid-template-columns: 1fr;
  }
}
</style>

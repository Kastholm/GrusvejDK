<template>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->
      <div class="isolate -z-10">
        <GrusvejeUspHero />
      </div>
<GrusvejForm> </GrusvejForm>

      <!-- Content section -->
      <Grusvejinfo> </Grusvejinfo>

      <div class="tabBody -translate-y-20">
        <div class="tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="{ active: currentTab.id === tab.id }"
            @click="changeTab(tab)"
          >
            {{ tab.name }}
          </button>
        </div>
        <transition name="fade" mode="out-in">
          <div class="tab-content" :key="currentTab.id">
            <div class="px-2">
              <h2>{{ currentTab.name }}</h2>
              <h3>{{ currentTab.manchet }}</h3>
              <p>{{ currentTab.text }}</p>
              <br />
              <p>{{ currentTab.text }}</p>
            </div>
            <div
              class="img-div"
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
    name: "Maskine 1",
    imgSrc:
      "https://images.pexels.com/photos/12495785/pexels-photo-12495785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
    manchet: "manchet",
  },
  {
    id: 2,
    name: "Maskine 2",
    imgSrc:
      "https://images.pexels.com/photos/4372184/pexels-photo-4372184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
    manchet: "manchet",
  },
  {
    id: 3,
    name: "Maskine 3",
    imgSrc:
      "https://images.pexels.com/photos/8938485/pexels-photo-8938485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
    manchet: "manchet",
  },
  {
    id: 4,
    name: "Maskine 4",
    imgSrc:
      "https://images.pexels.com/photos/12932782/pexels-photo-12932782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
    manchet: "manchet",
  },
  {
    id: 5,
    name: "Maskine 5",
    imgSrc:
      "https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur eaque iste porro expedita pariatur? Consectetur accusamus doloribus soluta dicta! Labore suscipit quis facere aut dignissimos asperiores officia eaque excepturi magni saepe, dolores non eos ipsum",
    manchet: "manchet",
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

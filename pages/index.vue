<template>

  <div class="bg-white font-sans">
    <main class="isolate">
      <!-- Hero section -->
      <div
        class="relative isolate -z-10 overflow-hidden bg-yellow-vivid-200 bg-gradient-to-b from-indigo-100/20"
      >
        <div
          class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div class="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pb-40 lg:px-8">
          <div
            class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none md:grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
          >
            <div
              class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1 pt-5 sm:pt-6"
            >
              <h1 class="fontfam mb-12 sm:text-7xl text-5xl ">
                Etablering - vedligehold og drift af grusveje
              </h1>
              

              <p class="Text TextReadable text-gray-600 pt-2">
                En grusvej er ikke bare en grusvej. Er grusvejen fra starten konstrueret korrekt og rigtigt vedligeholdt kan den holde i mange år.
                 Så enkelt er det – og vi er specialister i grusveje med det rigtige udstyr og viden på plads. 
              </p>
              <a
                href="/serviceaftale"
                class="text-white font-bold text-sm md:text-xl"
              >
               <div
                  class="sm:h-11 h-11 w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center translate-y-5 border shadow-2xl"
                >
                  <button class="text-base block">
                    Få serviceaftale hos Grusvej.dk
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
        <div class="mx-auto max-w-7xl px-6 lg:px-8 -translate-y-28">
          <center>
          <h2 class="mb-5 fontfam font-[600] font text-5xl sm:text-7xl cursor-vertical-text pt-10">
            NY GRUSVEJ ELLER VEDLIGEHOLD AF EKSISTERENDE?
          </h2>
          <p class="font-semibold text-3xl pb-10">
            <span class="text-[#137733]"> Grusvej.dk </span> Giver dig 5 bud på en stærk grusvej
          </p>
          </center>
          <!-- arbejdssteps start -->
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-5"
          >
            <div v-for="item in arbejdssteps" :key="item.name">
              <time
                :datetime="item.dateTime"
                class="flex items-center text-base font-bold font-serif leading-6 text-[#137733]"
              >
                <svg
                  viewBox="0 0 4 4"
                  class="mr-4 h-1 w-1 flex-none"
                  aria-hidden="true"
                >
                  <circle cx="2" cy="2" r="2" fill="currentColor" />
                </svg>
                {{ item.date }}
                <div
                  class="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p
                class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900"
              >
                {{ item.name }}
              </p>
              <p
                class="mt-1 text-base leading-7 text-gray-600  min-h-[11em]"
              >
                {{ item.description }}
              </p>
              <img
                :src="item.image"
                alt="Step Image"
                class="mt-4 rounded border shadow-1xl"
              />
            </div>
          </div>
        </div>
        <!-- arbejdsteps slut -->
        <div
          class="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"
        />
      </div>

      <!-- Logo cloud -->
      <div
        class="hoverRoadBody mx-auto relative mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8 transition-all -translate-y-22 h-fit max-h-[51em] overflow-hidden"
      >
        <div
          class="relative isolate overflow-hidden bg-[#137733a0] px-6 py-14 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2
            class="mx-auto max-w-5xl text-5xl font-bold fontfam tracking-tight leading-[1] text-gray-900 sm:text-6xl uppercase"
          >
            Se hvad der gør vores grusvej speciel
          </h2>

          <!-- <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Aliquip reprehenderit incididunt amet quis fugiat ut velit. Sit
            occaecat labore proident cillum in nisi adipisicing officia
            excepteur tempor deserunt.
          </p> -->
          <button
            @click="setOldImg"
            :class="{ active: activeButton === 'new' }"
            class="bg-white bg-opacity-30 px-8 py-5 mt-12 mx-4"
          >
            Vores Grusvej
          </button>
          <button
            @click="setNewImg"
            :class="{ active: activeButton === 'old' }"
            class="bg-white bg-opacity-30 px-8 py-5 mt-12 mx-4 mb-10 sm:mb-0"
          >
            Standard Grusvej
          </button>
          <transition name="fade">
            <img
              :src="imgSrc"
              :key="imgSrc"
              class="hoverRoad w-[70em] m-auto sm:scale-100 scale-110"
              alt=""
            />
          </transition>

          <div
            class="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            <div
              class="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style="
                clip-path: polygon(
                  73.6% 51.7%,
                  91.7% 11.8%,
                  100% 46.4%,
                  97.4% 82.2%,
                  92.5% 84.9%,
                  75.7% 64%,
                  55.3% 47.5%,
                  46.5% 49.4%,
                  45% 62.9%,
                  50.3% 87.2%,
                  21.3% 64.1%,
                  0.1% 100%,
                  5.4% 51.1%,
                  21.4% 63.9%,
                  58.9% 0.2%,
                  73.6% 51.7%
                );
              "
            />
          </div>
        </div>
      </div>
      <!-- Content section -->
      <div class="mt-32 overflow-hidden sm:mt-40 -translate-y-20">
        <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
          >
            <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
              <h2
                class="tracking-tight font-[700] sm:text-[68px] leading-[40px] text-[40px] fontfam text-gray-900 sm:leading-[70px] uppercase text-center sm:text-start"
              >
              Stenknuseren retter op på gamle og bulede grusveje
              </h2>
              <p class="mt-6 Text Textreadable text-base leading-8 text-gray-600">
                Tidligere brugte man gammelt byggeaffald, beton- og
                 teglbrokker til at understøtte grusveje. Disse løst nedgravede fraktioner skader efter mange års slid nu mere end de gavner. 
              </p>
              <p class="mt-6 Text Textreadable text-base leading-7 text-gray-600">
                I stedet for at fjerne dem i en tung og dyr proces, nedknuser vi materialerne så de virker som almindeligt stabilgrus.
                 Det sparer tid, indkøb af ny stabilunderlag, er miljørigtigt, hurtigt og effektivt.
              </p>
              <a
                href="/kontakt"
                class="text-white font-bold text-sm md:text-xl"
              >
            <div
                  class="h-11 w-fit rounded p-2 bg-[#2a8447] translate-y-4 transition-transform md:duration-200 md:hover:scale-110 text-center  border shadow-2xl"
                > 
                  <button class="translate-y-1 sm:translate-y-0 text-base block">
                    Kontakt Grusvej.dk
                  </button>
            </div>
            </a>
            </div>
            <div
              class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
            >
              <div
                class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
              >
                <img
                  src="https://i.ibb.co/SsDXCKL/Findelt.jpg"
                  alt=""
                  class="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div
                class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
              >
                <div
                  class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
                >
                  <img
                    src="https://i.ibb.co/WskRfTK/Maskiner-Grusvej.webp"
                    alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div
                  class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none"
                >
                  <img
                    src="https://i.ibb.co/Z6ykkYF/billedet-8.webp"
                    alt=""
                    class="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div
                  class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
                >
                  <img
                    src="https://i.ibb.co/x5SH8rk/Grusvej-grus.webp"
                    alt=""
                    class="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="mx-auto mt-14 max-w-7xl px-6  lg:px-8">
        <div class="mx-auto lg:mx-0 max-w-full">
          <h2
            class="text-3xl font-bold tracking-tight Header leading-[1] text-gray-900 sm:text-6xl text-center uppercase"
          >
            +90.000 km grusvej er forkert lagt i danmark
          </h2>
          <p class="mt-6 text-base leading-7 text-gray-600 max-w-[80%] text-center m-auto ">
            Marker, skovarealer, sommerhusområder, naturarealer, stier og veje.
            Der er masser af grusveje i Danmark som trænger til en kærlig hånd – og effektivt maskineri.</p>
        </div>
        <!-- card 1 -->
        <div
          class="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end text-center"
        >
          <div
            class="bg-[#f9b039] flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
          >
            <p
              class="flex-none text-3xl font-bold tracking-tight text-[#fcf2ff]"
            >
              Minimum vedligeholdelse
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              
              <p class="mt-2 text-base leading-7 text-[#fcf2ff] Text Textreadable">
                En korrekt grusvej er en investering der rækker mange år frem. Med en Grusvej.dk serviceaftale nærmest evigt.
              </p>
            </div>
          </div>
          <!-- card 2 -->
          <div
            class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-2xl lg:flex-auto lg:flex-col lg:items-start lg:gap-y-80"
            style="
              background-image: url('https://i.ibb.co/0ZwLm1f/Stabilisering-grusvej-cropped.webp');
              background-size: cover;
              background-position: center;
            "
          >
            <p class=""></p>
            <div class=""><br /><br /><br /><br /></div>
          </div>
          <!-- card 3 -->
          <div
            class="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-[#137733] p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28"
          >
            <p
              class="flex-none text-3xl font-bold tracking-tight text-[#fcf2ff]"
            >
              Vores grusvej holder i +1 år uden dannelse af huller
            </p>
            <div class="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              
              <p class="mt-2 text-base leading-7 text-[#fcf2ff] max-w-[90%] m-auto">
                Uden løbende vedligehold holder vores grusveje i mere end 1 år uden at vandet danner nye huller. Med årlig service forlænges dette faktum.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- cards slut -->

      <!-- Content section -->
      <!-- <div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div
          class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row"
        >
          <div class="w-full lg:max-w-lg lg:flex-auto">
            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Hos Grusvej.dk kan du få helårligt abonnement til din grusvej -
              slip for skader på bil mm. og tænk aldrig på vedligeholdelsen igen
            </h2>
            <p class="mt-6 text-xl leading-8 text-gray-600">
              Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
              euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
              sit eu in id.
            </p>
            <img
              src="https://i.ibb.co/FJGrLgy/Frontal.jpg"
              alt=""
              class="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
           <div class="w-full lg:max-w-xl lg:flex-auto">
            
            <ul class="-my-28 divide-y divide-gray-100">
              <li v-for="opening in jobOpenings" :key="opening.id" class="py-8 translate-y-20">
                <dl class="relative flex flex-wrap gap-x-3 gap-y-1 ">
                  
                  <dd
                    class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900"
                  >
                    <a :href="opening.href" class="text-2xl font-semibold text-[#262626]">
                      {{ opening.role }}
                      <span class="absolute inset-0" aria-hidden="true" />
                    </a>
                  </dd>
                  
                  <dd
                    class="mt-2 w-full flex-none text-lg font-medium tracking-normal leading-7 text-gray-600"
                  >
                    {{ opening.description }}
                  </dd>
                  
                  <dd
                    class="mt-4 text-base font-semibold leading-7 text-gray-900"
                  >
                    {{ opening.salary }}
                  </dd>


                </dl>
              </li>
            </ul>
            <div class="mt-8 flex pt-8">
              <a
                href="#"
                class="text-sm font-semibold leading-6 text-[#137733] hover:text-[#f9b039] pt-5 translate-y-24 underline underline-offset-4"
                >Se mere om vores årlige løsninger
                <span aria-hidden="true">&rarr;</span></a
              >
            </div>
          </div> 
        </div>
      </div> -->
    </main>
  </div>





<!-- ====== Contact Section Start -->


<Serviceaftaler/>

<!-- ====== Contact Section End -->






</template>

<style scoped>

.Header {
  font-family: "futura-pt-condensed", sans-serif;
  font-weight: 700;
  Font-size: 68px;
  @apply tracking-normal;
}
.fontfam {
  font-family: "futura-pt-condensed", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.active {
  @apply bg-yellow-vivid-200 text-black scale-110;
}
</style>

<script setup>
import { defineComponent, h, ref, onMounted } from "vue";
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
    id: 886106581, // Video ID
    width: 720,
    height: 515,
    controls: false,
  });
  await player.setVolume(0.5); // Optionally set the volume to 50%
});

const toggleVideo = () => {
  if (player) {
    isPlaying.value ? player.pause() : player.play();
    isPlaying.value = !isPlaying.value;
  }
};

const arbejdssteps = [
  {
    name: "Vandafledning",
    description:
      "Det er i overvejende grad vand som ødelægger en grusvej. Når vand samlet sig i ujævnheder i vejen, fjernes grus og materiale og større huller begynder at danne sig. ",
    date: "Bud 1",
    dateTime: "2021-08",
    image: "https://i.ibb.co/z8TdFp5/trin-1.webp",
  },
  {
    name: "Nedsivnings arealet",
    description:
      "Dette forhindre dannelse af små vandhuller i vejens ujævnheder og den medførte slid nævnt i bud 1.",
    date: "Bud 2",
    dateTime: "2021-12",
    image: "https://i.ibb.co/sPvjqMm/IMG-0954.webp",
  },
  {
    name: "Bærelaget i grusvejen",
    description:
      "Vi er allerede i en tid, hvor regnvand og store lastbiler belaster vores grusveje. Så vi skal sikre os at bærelaget i grusvejen har den nødvendige bæreevne.",
    date: "Bud 3",
    dateTime: "2022-02",
    image: "https://i.ibb.co/5hB952R/billedet-10.webp ",
  },
  {
    name: "Vandafledning",
    description:
      "For at lede vandet væk fra veje i det rette tempo skal vejprofilen have et tværfald på 25-40 promille.",
    date: "Bud 4",
    dateTime: "2022-12",
    image: "https://i.ibb.co/W5sF0Z2/trin-3-vinkling.webp",
  },
  {
    name: "Vejens slidlag",
    description:
      "Den rette grus er vigtigt for vejens holdbarhed, at anvende den forkerte type grus kan resultere i, at vejens profil aftager langt hurtigere.",
    date: "Bud 5",
    dateTime: "2022-12",
    image: "https://i.ibb.co/FHP6FTZ/trin-5-opt.webp",
  },
];

// Declare your image sources
const oldImg = "/img/nyGrusvej.png";
const newImg = "/img/gammelGrusvej.png";

// Set the initial image source
let imgSrc = ref(oldImg);

// Track the currently active button
let activeButton = ref("new");

// Create functions to set the image source and active button
const setNewImg = () => {
  imgSrc.value = newImg;
  activeButton.value = "old";
};

const setOldImg = () => {
  imgSrc.value = oldImg;
  activeButton.value = "new";
};

const mobileMenuOpen = ref(false);
</script>

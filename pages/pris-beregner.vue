<template>
  <head>
    <title>Beregn din pris</title>
    <meta
      name="description"
      content="Vores tyske maskinpark er af skræddersyet Stehr maskiner, bygget til etablering og vedligehold af naturstier. Vi anlægger naturstier i hele landet."
    />
  </head>
  <div class="bg-white">
    <main class="isolate">
      <!-- Hero section -->

      <img
        class="-z-10 opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8"
        src="https://i.ibb.co/gtZq30x/Untitled-design.png"
        alt="Image Description"
      />
      <img
        class="-z-10 opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8"
        src="https://i.ibb.co/p1253nF/Untitled-design-1.png"
        alt="Image Description"
      />
      <div class="relative isolate -z-10">
        <svg
          class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
              class="fill-SubColor2"
            />
          </svg>
          <rect
            stroke-width="0"
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            class="sm:max-w-[100%] sm:max-h-[100%] max-w-[390px]"
          />
        </svg>

        <div
          class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#137733] to-[#f9b039] opacity-30"
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
        <div class="overflow-hidden">
          <div
            class="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pt-20 lg:px-8 lg:pt-0"
          >
            <div
              class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            >
              <VejBeregner />
            </div>
          </div>
        </div>
      </div>

      <!-- Content section -->
      <!-- <div class="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            IMAGE SEKTION MED DE FORSKELLIGE MASKINER (alla Musikmekanikeren
            service/skoleservice gsap)
          </h2>
          <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p class="text-xl leading-8 text-gray-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <div class="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id.
                </p>
                <p class="mt-10">
                  Et vitae blandit facilisi magna lacus commodo. Vitae sapien
                  duis odio id et. Id blandit molestie auctor fermentum
                  dignissim. Lacus diam tincidunt ac cursus in vel. Mauris
                  varius vulputate et ultrices hac adipiscing egestas. Iaculis
                  convallis ac tempor et ut. Ac lorem vel integer orci.
                </p>
              </div>
            </div>
            <div class="lg:flex lg:flex-auto lg:justify-center">
              <dl class="w-64 space-y-8 xl:w-80">
                <div
                  v-for="stat in stats"
                  :key="stat.label"
                  class="flex flex-col-reverse gap-y-4"
                >
                  <dt class="text-base leading-7 text-gray-600">
                    {{ stat.label }}
                  </dt>
                  <dd
                    class="text-5xl font-semibold tracking-tight text-gray-900"
                  >
                    {{ stat.value }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Logo cloud -->

      <center class="">
        <!-- pattern start -->
        <div class="mt-4">
          <svg
            class="absolute h-[40rem] w-[100%] mobile flex-none stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" class="overflow-visible fill-gray-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                stroke-width="0"
                class="fill-SubColor2"
              />
            </svg>
            <rect
              stroke-width="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              class="sm:max-w-[100%] sm:max-h-[100%] max-w-[390px]"
            />
          </svg>
        </div>
        <!-- pattern slut -->
      </center>
    </main>
  </div>
</template>

<script setup>
import VejBeregner from "@/components/VejBeregner.vue";
import { defineComponent, h, ref, computed } from "vue";

const mobileMenuOpen = ref(false);
</script>

<style scoped></style>

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
        <div class="overflow-hidden">
          <div
            class="mx-auto max-w-7xl px-6 pb-20 pt-14 sm:pt-20 lg:px-8 lg:pt-0"
          >
            <div
              class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
            >
              <a
                href="#stoevberegner"
                class="mb-10 inline-block lg:hidden bg-[#199d43] text-white px-4 py-2 rounded text-base font-medium hover:opacity-90"
                >Beregn kun støvbekæmpelse</a
              >
              <VejBeregner id="vejberegner" />

              <div id="stoevberegner"><StoevBeregner /></div>
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
    </main>
  </div>
</template>

<script setup>
import VejBeregner from "@/components/VejBeregner.vue";
import StoevBeregner from "~/components/StoevBeregner.vue";
import { defineComponent, h, ref, computed } from "vue";

const mobileMenuOpen = ref(false);
</script>

<style scoped></style>

<template>
  <div class="bg-white py-24 sm:py-18">
    <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-4 -translate-y-20 sm:-translate-y-32">
          <div
            class="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 translate-y-32"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="https://i.ibb.co/SsDXCKL/Findelt.jpg"
              alt=""
            />
            <div class="absolute inset-0 mix-blend-multiply" />
            <div
              class="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
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
                class="sm:h-16 w-auto"
              />
              <blockquote
                class="mt-6 text-xl font-semibold leading-8 text-white bg-[#646065] rounded-xl p-4 bg-opacity-60 text-center"
              >
                <p class="tracking-wide text-4xl fontfam">
                  “Amet amet eget scelerisque tellus sit neque faucibus non
                  eleifend. Integer eu praesent at a. Ornare arcu gravida
                  natoque erat et cursus.”
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
        <div>
          <div class="leading-7 text-gray-700 lg:max-w-lg sm:-translate-y-5">
            <h1
              class="mt-2 text-5xl font-bold tracking-wide text-gray-900 sm:text-6xl fontfam"
            >
              Grusvej.dk giver din grusvej plejen den fortjener
            </h1>
            <div class="max-w-xl">
              <p class="mt-6">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p class="mt-4">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
              
            </div>
          </div>
          <dl
            class="mt-10 grid grid-rows-2 border-t border-gray-900/10 sm:grid-rows-2 -translate-y-14"
          >
            <div v-for="(stat, statIdx) in stats" :key="statIdx">
              <dt
                class="text-4xl font-semibold leading-8 text-gray-900 fontfam tracking-wider p-4 text-center"
              >
                {{ stat.label }}
              </dt>
              <dd
                class="mt-3 text-6xl font-bold leading-12 sm:leading-10 tracking-tight text-gray-900 fontfam text-center border-l-2 border-b-2 border-[#f9b039] p-3"
              >
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>
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
</style>

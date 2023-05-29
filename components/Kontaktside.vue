<template>
  <div class="overflow-hidden bg-gray-900 py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
      <img
            class=" opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8"
            src="https://i.ibb.co/gtZq30x/Untitled-design.png"
            alt="Image Description"
          />
          <img
            class=" opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover transition-transform duration-500 ease-in-out rounded-xl border-cyangreen border-8"
            src="https://i.ibb.co/p1253nF/Untitled-design-1.png"
            alt="Image Description"
          />
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <h2 class="text-xl sm:text-2xl font-semibold leading-7 text-indigo-400">
              Kontakt os idag &
            </h2>
            <p
              class="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Lad os få en god dialog
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-white">
                  <component
                    :is="feature.icon"
                    class="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <img
          src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
          alt="Product screenshot"
          class=" relative w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];
</script>

<style scoped>
.clippath1 {
clip-path: polygon(82% 0, 83% 0, 100% 89%, 100% 94%);

}
.clippath2 {
clip-path: polygon(85% 0, 84% 0, 100% 85%, 100% 80%);

}
</style>
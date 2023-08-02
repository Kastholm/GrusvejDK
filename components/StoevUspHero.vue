<template>
  <div class="bg-gray-50 ">
    <div class="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div class="grid grid-cols-1 items-center gap-x-12 gap-y-10 lg:grid-cols-2">
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
          <div class="w-full">
            <h1 class="tracking-tight text-gray-900 mb-16 Header uppercase font-bold relative text-6xl">
            Stabiliser vejen og slip for støvgener med <br>
            <span class="text-8xl text-[#199d43]">Dustex</span>
            </h1>
            <p class="mt-4 text-black relative text-xl">At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.</p>
          </div>
          <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 relative">
            <img src="https://i.ibb.co/C2hSj70/bil-paa-grusvej.jpg" alt="" class="object-cover object-center aspect-[3/2]" />
          </div>
        </div>
        <div class="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
          <div v-for="incentive in incentives" :key="incentive.name" class="sm:flex lg:block">
            <div class="sm:flex-shrink-0">
              <img class="h-16 w-16" :src="incentive.imageSrc" alt="" />
            </div>
            <div class="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
              <h3 class="text-sm font-medium text-gray-900">{{ incentive.name }}</h3>
              <p class="mt-2 text-sm text-gray-500">{{ incentive.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const incentives = [
  {
    name: 'Kommer til anviste adresse',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: 'Lang holdbarhed',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: '100% tilfredshedsgaranti',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
]
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
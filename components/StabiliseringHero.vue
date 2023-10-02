<template>
  <div class="bg-gray-50">
    <div class="relative">
      <svg
        class="absolute z-0 inset-x-0 top-0 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
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
            class="fill-[#f9b039]"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          stroke-width="0"
          class="z-index[1]"
          fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
        />
      </svg>
    </div>
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
              Stabiliser vejen med en professionel maskinpark <br />
            </h1>
            <p class="mt-4 text-black relative text-xl -translate-y-10">
              At the beginning at least, but then we realized we could make a
              lot more money if we kinda stopped caring about that. Our new
              strategy is to write a bunch of things that look really good in
              the headlines, then clarify in the small print but hope people
              don't actually read it.
            </p>
          </div>
          <div
            class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100 relative -translate-y-20"
          >
            <img
              src="https://i.ibb.co/mDX8BS5/Stabilisering-header-grusvej.webp"
              alt=""
              class="object-cover object-center aspect-[3/2]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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

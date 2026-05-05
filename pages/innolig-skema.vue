<template>
  <div class="relative w-full h-full flex flex-col items-center justify-center">
    <div
      class="abs border-none h-fit w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center shadow-2xl"
    >
      <button
        @click="goBack"
        class="sm:translate-y-0 text-base block text-white font-bold"
      >
        ← Tilbage
      </button>
    </div>

    <img
      class="vw-full h-fit lg:mt-0 mt-20"
      src="https://i.ibb.co/yFP7X6YB/Sammenligning-St-vbek-mpelse-Danmark-maj2026-mh-kopi-kopi-xlsx-page-0001.jpg"
      alt=""
    />
    <div
      class="abs-2 border-none h-fit w-fit rounded p-2 bg-[#2a8447] transition-transform md:duration-200 md:hover:scale-110 text-center shadow-2xl"
    >
      <button
        @click="goBack"
        class="sm:translate-y-0 text-base block text-white font-bold"
      >
        ← Tilbage
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style>
.abs {
  position: absolute;
  top: 40px;
  left: 40px;
}

.abs-2 {
  position: absolute;
  bottom: -20px;
  left: 40px;
}

@media screen {
  .abs-2 {
    display: none;
  }
}
</style>

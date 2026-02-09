<template>
<main class="relative">
  <img
        class="-z-10 opacity-80 clippath1 w-full h-full absolute top-0 left-0 object-cover rounded-xl border-cyangreen border-8"
        src="https://i.ibb.co/gtZq30x/Untitled-design.png"
        alt="Image Description"
      />
      <img
        class="-z-10 opacity-80 clippath2 w-full h-full absolute top-0 left-0 object-cover rounded-xl border-cyangreen border-8"
        src="https://i.ibb.co/p1253nF/Untitled-design-1.png"
        alt="Image Description"
      />
   
  <section class="w-full h-screen relative">
    <div class="absolute m-auto inset-0 h-[20rem] w-[95%] lg:w-[40rem] bg-white flex flex-col justify-center items-center gap-8 rounded-lg shadow-2xl border-l-4 border-l-[#2a8447] border-r-4 border-r-[#f5a940] mx-auto">
      <h1 class="fontfam sm:text-xl text-xl"> Velkommen til Grusvej.dk</h1>
      <p class="w-[60%] text-center">Fortæl os om du er privat- eller erhvervskunde, så vi kan give dig den bedste oplevelse.</p>
      <div class="flex gap-8">
        <button class="text-white font-bold text-sm md:text-xl px-8 py-3 rounded bg-[#2a8447] transition-all md:duration-200 md:hover:shadow-lg md:hover:bg-[#1f5f33]" @click="goPrivate()">
          Privat
        </button>
        <div class="h-12 w-px bg-gray-300"></div>
        <button class="text-white font-bold text-sm md:text-xl px-8 py-3 rounded bg-[#F9B038] transition-all md:duration-200 md:hover:shadow-lg md:hover:bg-[#f5a940]" @click="goErhverv()">
          Erhverv
        </button>
        </div>
    </div>
  </section>
</main>
</template>

<script>
export default {
  methods: {
    goPrivate() {
      const userType = useUserType()
      userType.value = 'privat'
      this.$router.push('/privat')
    },
    goErhverv() {
      const userType = useUserType()
      userType.value = 'erhverv'
      this.$router.push('/erhverv')
    }
  }
}
</script>

<style>
.clippath1 {
clip-path: polygon(82% 0, 83% 0, 100% 89%, 100% 94%);

}
.clippath2 {
clip-path: polygon(85% 0, 84% 0, 100% 85%, 100% 80%);

}
</style>
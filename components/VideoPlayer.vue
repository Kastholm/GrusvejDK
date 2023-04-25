<template>
    <div class="relative">
    <video ref="videoPlayer" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" @play="onPlay" @pause="onPause" class="w-full h-full"></video>
    <div class="absolute inset-0 flex justify-center items-center">
      <button @click="play" class="bg-white rounded-full w-12 h-12 flex justify-center items-center">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M5 3l14 9-14 9V3z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<template>
  <div class="loading-screen">
    <img src="/Grusvej-logo-stor.png" alt="Logo" class="logo">
    <video src="/Final-loading-_screen-Grusvej.dk.mp4" autoplay loop muted class="video"></video>
  </div>
</template>

<style>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.logo {
  max-width: 200px;
  margin-bottom: 20px;
}

.video {
  max-width: 300px;
}
</style>

<script>
export default {

}
</script>


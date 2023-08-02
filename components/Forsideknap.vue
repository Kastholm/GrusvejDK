<template>
  <button class=" w-10 h-10" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      // Handle button click event
      // You can add your custom logic here
      console.log('Button clicked!');
    }
  }
}
</script>

<style>

</style>
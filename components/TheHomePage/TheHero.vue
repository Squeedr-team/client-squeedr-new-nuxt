<template>
  <div class="hero-section">
    <h1>{{ sectionData }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    sectionData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
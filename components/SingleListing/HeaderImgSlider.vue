<!-- eslint-disable no-console -->
<template>
  <div class="w-full bg-red-400 mb-10">
    <nuxt-img
      provider="cloudinary"
      class="w-full h-[50vh] max-h-[60vh] object-cover"
      src="/v1663308694/Video_shoot_tile_v2.jpg"
    />
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  mounted() {
   //  console.log('THis .images', this.slides)
  },
}
</script>

<style></style>

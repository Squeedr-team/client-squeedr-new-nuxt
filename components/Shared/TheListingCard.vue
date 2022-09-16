<template>
  <nuxt-link :to="cardData.href" class="listing-card relative">
    <nuxt-img
      provider="cloudinary"
      :src="cardData.image"
      width="500"
      height="500"
    />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      require: true,
    },
  },
}
</script>

<style>
</style>
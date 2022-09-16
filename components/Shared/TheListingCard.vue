<template>
  <nuxt-link
    :to="cardData.href"
    class="listing-card relative block"
    :class="{ rounded: rounded }"
  >
    <nuxt-img provider="cloudinary" :src="cardData.image" :class="{ rounded: rounded }"/>
    <div class="absolute bottom-8 left-0 w-full">
      <h4 class="text-white font-bold text-xl text-center">
        {{ cardData.title }}
      </h4>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      require: true,
    },
    rounded: {
      type: Boolean,
      require: false,
    },
  },
}
</script>

<style>
</style>
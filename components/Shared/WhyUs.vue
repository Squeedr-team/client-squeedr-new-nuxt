<template>
  <section class="why-us flex flex-wrap overflow-hidden">
    <div class="w-full lg:w-1/2">
      <nuxt-img provider="cloudinary" :src="image" />
    </div>
    <div class="bg-gray-200 flex-1 flex items-center px-4 lg:px-0 py-8 lg:py-0">
      <div v-html="$md.render(text)" class="about-us_text lg:pl-8"></div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: `# Why Squeedr?\n## Unique spaces\nEvery day we uncover new, creative spaces - from neighborhood galleries to hidden rooftops and beyond \n## Honest pricing\nOur spaces are priced to fit your budget. Pay by the hour without worrying about hidden fees.\n## Smooth bookings\nNo more messy contracts. We build the tools to make booking a space as easy as the click of a button.`,
      image: '/v1663313155/Why_Peerspace.jpg',
    }
  },
}
</script>

<style>
</style>
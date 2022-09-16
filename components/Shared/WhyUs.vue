<template>
  <section class="why-us flex overflow-hidden my-16">
    <div class="w-1/2">
      <nuxt-img provider="cloudinary" :src="image" class="w-full object-cover" />
    </div>
    <div class="bg-gray-200 flex-1 flex items-center">
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
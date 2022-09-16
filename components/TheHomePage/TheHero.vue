<template>
  <div
    class="hero-section h-screen lg:h-hero bg-green-500"
    :style="{
      background: 'url(' + heroDaata.background_image + ')',
      'background-size': 'cover',
    }"
  >
    <div class="container h-full flex flex-col justify-center">
      <the-hero-search />
    </div>
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
  data() {
    return {
      heroDaata: {
        background_image:
          'https://img.peerspace.com/image/upload/f_auto,q_auto,dpr_auto,fl_progressive/homepage_images/hero_images/5-hero',
        randome_text: ['workshop', 'shower', 'photo shoot'],
      },
      titel: 'Your Next photo shoot',
    }
  },
}
</script>

<style>
</style>
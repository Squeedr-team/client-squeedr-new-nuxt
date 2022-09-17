<template>
  <section class="app-update">
    <div class="container overflow-hidden">
      <div class="app-update__content relative flex items-center  ">
        <nuxt-img provider="cloudinary" :src="sectionData.image" />
        <div
          class="app-update__text-wraper relative z-10 px-8 lg:px-16 w-full"
          :class="{
            'text-center': sectionData.center_text,
            'lg:max-w-screen-md': !sectionData.center_text,
          }"
        >
          <h4 class="section-title mt-0">{{ sectionData.title }}</h4>
          <p v-if="sectionData.text">{{ sectionData.text }}</p>
          <nuxt-link
            :to="sectionData.cta.href"
            class="
              inline-block
              mt-8
              py-3
              px-8
              bg-appLight
              rounded
              text-white
              font-bold
              capitalize
            "
            >{{ sectionData.cta.text }}</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionData: {
      type: Object,
      require: true,
      default() {
        return {
          center_text: false,
          image: '/v1663360641/dummy_1536x300_000000_efef67.webp',
          title: 'Peerspace Ambassadors',
          text: 'We’ve provided guidelines and enhanced safety measures for hosts so guests can book with peace of mind.',
          cta: {
            text: 'learn more',
            href: '#',
          },
        }
      },
    },
  },
}
</script>

<style>
</style>
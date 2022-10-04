<!-- eslint-disable no-console -->
<template>
  <div class="single-listing-header relative w-full mb-10">
    <VueSlickCarousel
      v-if="slides.length > 0"
      v-bind="settings"
      ref="space-images"
      @afterChange="afterChange"
    >
      <div v-for="img in slides" :key="img" class="relative w-full h-full">
        <nuxt-img
          provider="cloudinary"
          :src="img"
          class="listing-slide-img rounded"
        />
        <div class="flex items-center absolute top-5 right-5">
          <button class="flex items-center p-2 px-5 bg-white rounded-md mr-3">
            <img width="20px" height="20px" :src="shareIcon" alt="love" />
            <span class="text-[#494e57] ml-2">Share</span>
          </button>
          <button class="flex items-center p-2 px-5 bg-white rounded-md">
            <img
              width="20px"
              height="20px"
              :src="bookmarked ? heartFilledIcon : heartIcon"
              alt="love"
              @click="bookmarked = !bookmarked"
            />
            <span class="text-[#494e57] ml-2">Save</span>
          </button>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: {
    slides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bookmarked: false,
      membersIcons: require('@/assets/icons/people-icon.svg'),
      heartIcon: require('@/assets/icons/heartDark.svg'),
      heartFilledIcon: require('@/assets/icons/heart-filled-dark.svg'),
      shareIcon: require('@/assets/icons/uploadIcon.svg'),
      settings: {
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slick-dots space-custom-dots',
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //   variableWidth: true,
        //   variableHeight: true,
      },
    }
  },
  methods: {
    afterChange() {
      // eslint-disable-next-line no-console
      console.log('afterChange')
    },
  },
}
</script>

<style>
.single-listing-header .slick-next {
  right: 20px;
  z-index: 999;
}

.single-listing-header .slick-prev {
  left: 20px !important;
  z-index: 999;
}

.single-listing-header .slick-slide .listing-slide-img {
  width: 100%;
  max-height: 500px;
}
</style>

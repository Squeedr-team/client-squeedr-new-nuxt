<template>
  <section class="container">
    <h4 class="section-title">{{ sectionData.title }}</h4>
    <div class="carousel-wraper relative">
      <VueSlickCarousel
        v-if="sectionData.listings.length > 0"
        v-bind="sectionData.settings"
        :ref="sectionData.ref"
        @afterChange="afterChange"
      >
        <div v-for="list in sectionData.listings" :key="list.id">
          <the-listing-card :card-data="list" :rounded="true" />
        </div>
      </VueSlickCarousel>
      <div class="arrows">
        <button @click="showPrev" :class="{ invisible: !arrowShowPrev }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        <button @click="showNext" :class="{ invisible: !arrowShowNext }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
    </div>
    <nuxt-link
      v-if="sectionData.cta"
      :to="sectionData.cta.href"
      class="block mt-4 text-md text-lightPrimaryColor font-medium"
      >{{ sectionData.cta.text }}</nuxt-link
    >
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: {
    sectionData: {
      type: Object,
      require: true,
      default() {
        return {
          settings: {
            dots: false,
            dotsClass: 'slick-dots custom-dot-class',
            edgeFriction: 0.35,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true,
                },
              },
            ],
          },
          listings: [],
        }
      },
    },
  },
  data() {
    return { arrowShowPrev: false, arrowShowNext: true }
  },
  methods: {
    showNext() {
      console.log(this.$refs[this.sectionData.ref])
      this.$refs[this.sectionData.ref].next()
    },
    showPrev() {
      this.$refs[this.sectionData.ref].prev()
    },
    afterChange(slideIndex) {
      console.log('slideIndex', slideIndex)
      if (slideIndex === 0) {
        this.arrowShowPrev = false
      } else {
        this.arrowShowPrev = true
      }
    },
  },
}
</script>

<style>
</style>
<template>
  <div class="event-carousel">
    <p class="ml-2 mb-2 pb-0 text-gray-700 font-semibold">
      {{ sectionData.title }}
    </p>
    <div class="carousel-wraper relative">
      <VueSlickCarousel
        v-if="sectionData.listings.length > 0"
        v-bind="sectionData.settings"
        :ref="sectionData.ref"
        @afterChange="afterChange"
      >
        <div v-for="list in sectionData.listings" :key="list.id">
          <nuxt-link :to="list.href" class="relative block rounded">
            <nuxt-img provider="cloudinary" :src="list.image" class="rounded" />
            <div class="absolute bottom-2 z-20 text-center w-full">
              <span class="text-white font-bold text-sm text-center">
                {{ list.title }}
              </span>
            </div>
          </nuxt-link>
        </div>
      </VueSlickCarousel>
      <div class="arrows">
        <button :class="{ invisible: !arrowShowPrev }" @click="showPrev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
            />
          </svg>
        </button>
        <button :class="{ invisible: !arrowShowNext }" @click="showNext">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path
              d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
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
      this.$refs[this.sectionData.ref].next()
    },
    showPrev() {
      this.$refs[this.sectionData.ref].prev()
    },
    afterChange(slideIndex) {
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
.event-carousel .slick-dots {
  display: none !important;
}
.event-carousel .carousel-wraper {
  height: unset;
}
.event-carousel .arrows button {
  width: 20px;
  height: 20px;
}
.event-carousel .slick-slider {
  height: auto;
}
.event-carousel .slick-slider .slick-slide {
  padding: 3px;
}
.event-carousel .slick-list {
  height: auto;
}
.event-carousel .slick-track {
  height: auto;
}
</style>

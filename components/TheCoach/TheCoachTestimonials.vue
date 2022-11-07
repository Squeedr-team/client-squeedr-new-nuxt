<template>
  <div class="coach-testimonials bg-profile_dark_1 py-16">
    <div class="container lg:flex lg:gap-8">
      <div class="coach-testimonials__text lg:w-1/5">
        <p>What Client Says</p>
        <h6 class="text-3xl capitalize font-bold my-4">testimonials</h6>
      </div>
      <div class="coach-testimonials__slider lg:flex-1 overflow-hidden">
        <VueSlickCarousel
          v-if="testimonialsData.length > 0"
          v-bind="settings"
          :ref="ref"
          @afterChange="afterChange"
        >
          <div v-for="(list, i) in testimonialsData" :key="i">
            <single-testimonial :single-testimonial="list" />
          </div>
        </VueSlickCarousel>
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
    testimonialsData: {
      type: Array,
      require: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      ref: 'coachTestimonialSlider',
      settings: {
        dots: true,
        arrows: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      },
    }
  },
  methods: {
    showNext() {
      this.$refs[this.ref].next()
    },
    showPrev() {
      this.$refs[this.ref].prev()
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
</style>
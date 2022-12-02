<template>
  <div >
      <VueSlickCarousel
        ref='carousel'
        class='own-carousel'
        v-bind="settings"
        @afterChange='afterChange'
      >
        <slot/>
      </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name:'Carousel',
  components: { VueSlickCarousel },
  props: {
    settings: {
      type: Object,
      require: true,
      default() {
        return {
          dots: false,
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
                infinite: false,
                dots: true
              }
            }
          ]
        }
      }
    }
  },
  data() {
    return { arrowShowPrev: false, arrowShowNext: true }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
    afterChange(slideIndex) {
      this.arrowShowPrev = slideIndex !== 0
    }
  }
}
</script>

<style lang='scss'>
.own-carousel{
  .slick-list {margin: 0 -5px;}
  .slick-slide>div {padding: 0 5px;}
}
</style>

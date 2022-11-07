<template>
  <div
    class="coach-classes-carousel"
    :style="{ background: 'url(' + activeClass.cover_image + ')' }"
  >
    <div class="container relative z-10">
      <h1 class="coach-name capitalize font-bold text-2xl mb-4">
        Upcoming Classes
      </h1>
      <div class="active-class mb-8">
        <h3 class="mb-2">{{ activeClass.class_name }}</h3>
        <div class="flex text-[10px] gap-1 items-center mb-4">
          <div class="flex mr-1">
            <div>{{ activeClass.date }}</div>
          </div>
          <div class="mr-1">{{ activeClass.duration }}</div>
          <div>{{ activeClass.location }}</div>
        </div>
        <p class="text-xs leading-6 w-full max-w-[500px] mb-4">
          {{ activeClass.about }}
        </p>
        <button class="bg-profile_light_1 px-4 rounded text-sm font-bold py-2">
          Book Now
        </button>
      </div>
      <div class="carousel-wraper relative">
        <VueSlickCarousel
          v-if="classesData.length > 0"
          v-bind="settings"
          :ref="ref"
          @afterChange="afterChange"
        >
          <div
            v-for="list in classesData"
            :key="list.id"
            @click="setActive(list)"
            class="cursor-pointer"
          >
            <the-class-card
              :cardData="list"
              :class="
                activeClass.id === list.id
                  ? 'border border-2 border-profile_light_1'
                  : ''
              "
            />
          </div>
        </VueSlickCarousel>
        <div
          class="
            coach-classes-carousel__arrows
            rounded
            overflow-hidden
            flex
            items-center
          "
        >
          <button
            @click="showPrev"
            class="bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fill-black	">
              <path
                d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              />
            </svg>
          </button>
          <button @click="showNext" class="bg-profile_light_1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="fill-white">
              <path
                d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              />
            </svg>
          </button>
        </div>
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
    classesData: {
      type: Array,
      require: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      settings: {
        dots: false,
        arrows: false,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
            },
          },
        ],
      },
      ref: 'coachCarousel',
      arrowShowPrev: false,
      arrowShowNext: true,
      activeClass: this.classesData[0],
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
    setActive(list) {
      this.activeClass = list
    },
  },
}
</script>

<style>
</style>
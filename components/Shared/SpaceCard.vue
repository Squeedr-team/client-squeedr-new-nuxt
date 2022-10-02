<template>
  <div class="cursor-pointer">
    <VueSlickCarousel
      v-if="spaceData?.images?.length > 0"
      v-bind="settings"
      ref="space-images"
      @afterChange="afterChange"
    >
      <div v-for="img in spaceData.images" :key="img" class="relative">
        <nuxt-img provider="cloudinary" :src="img" class="rounded" />

        <img
          class="absolute top-2 right-2 cursor-pointer"
          width="30px"
          height="30px"
          :src="bookmarked ? heartFilledIcon : heartIcon"
          alt="love"
          @click="bookmarked = !bookmarked"
        />
        <span
          class="absolute bottom-2 right-2 cursor-pointer bg-gray-900 p-1 text-xs text-white rounded leading-tight"
        >
          from <span class="text-lg">€130</span> /hr
        </span>
      </div>
    </VueSlickCarousel>
    <p class="text-[#343840] text-lg line-clamp-1">
      {{ spaceData.title }}
    </p>
    <div class="my-2">
      <span class="flex items-center text-sm text-[#6a707a]">
        <img width="16px" :src="membersIcons" alt="icon" />{{
          spaceData.members
        }}
      </span>
    </div>
    <p class="text-[#6a707a] font-semibold text-sm capitalize">
      {{ spaceData.note }}
    </p>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  props: {
    spaceData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bookmarked: false,
      membersIcons: require('@/assets/icons/people-icon.svg'),
      heartIcon: require('@/assets/icons/heart.svg'),
      heartFilledIcon: require('@/assets/icons/heart-filled.svg'),
      settings: {
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slick-dots space-custom-dots',
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
  methods: {
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
.space-card .slick-list,
.space-card .slick-slider {
  height: auto;
}

.space-card .slick-slide {
  padding: 0;
}
/* .space-card .slick-slide {
     padding: 0px !important;
     height: 200px;
   }
   .space-card .slick-slide img {
     height: 200px;
   } */
.space-card .space-custom-dots {
  position: absolute;
  bottom: 0px;
  color: white;
}
.space-card .space-custom-dots button:before {
  font-size: 15px;
  color: #b4b4b4;
}
.space-card .space-custom-dots .slick-active button:before {
  color: #b4b4b4;
}
.space-card .space-custom-dots li {
  margin: 0px;
  width: 20px;
  height: 30px;
}

/* .space-custom-dots li button::before {
     color: white;
   } */

.space-card .slick-next {
  right: 0;
  z-index: 999;
}

.space-card .slick-prev {
  left: 0 !important;
  z-index: 999;
}
</style>

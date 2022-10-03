<template>
  <a
    :href="`/search/listings/${spaceData.id}`"
    target="_blank"
    class="space-card"
  >
    <div class="cursor-default" @click.stop.prevent>
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
            class="flex items-center gap-1 absolute bottom-2 right-2 cursor-pointer bg-gray-900 p-1 text-xs text-white rounded leading-tight"
          >
            <img
              v-if="spaceData.instant_book"
              :src="lightIcon"
              alt="instant book"
            />
            from <span class="text-lg">€130</span> /hr
          </span>
        </div>
      </VueSlickCarousel>
    </div>

    <div class="group">
      <p class="text-[#343840] text-lg line-clamp-1 group-hover:text-gray-500">
        {{ spaceData.title }}
      </p>
      <p
        class="flex items-center text-sm text-[#6a707a my-1 group-hover:text-gray-500"
      >
        <img width="16px" :src="membersIcons" alt="icon" />{{
          spaceData.members
        }}
      </p>
      <p
        v-if="spaceData.covid_enhanced"
        class="mb-1 flex items-center font-bold text-[#1a6dfd] text-xs group-hover:text-[#116dee]"
      >
        <img
          width="14px"
          height="14px"
          class="mr-1"
          :src="sheildIcon"
          alt="shelid"
        />
        Enhanced &nbsp;<span class="text-sm"> COVID-19 </span>&nbsp; Measures
      </p>
      <p
        v-if="spaceData.instant_book"
        class="ml-1 cursor-pointer flex items-center text-sm mb-1 text-gray-400"
      >
        <img
          width="10px"
          height="10px"
          class="mr-1"
          :src="lightIcon"
          alt="shelid"
        />
        Instant Book
      </p>
      <p
        class="text-gray-700 font-semibold text-sm capitalize group-hover:text-gray-500 group-hover:font-normal"
      >
        {{ spaceData.note }}
      </p>
    </div>
  </a>
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
      sheildIcon: require('@/assets/icons/enhanced-badge.svg'),
      lightIcon: require('@/assets/icons/lightningbolt.svg'),
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
    test() {
      console.log('CLicked')
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

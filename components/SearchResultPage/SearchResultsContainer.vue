<template>
  <div class="">
    <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      sectionData: {
        ref: 'allkinds',
        settings: {
          dots: false,
          dotsClass: 'slick-dots custom-dot-class',
          edgeFriction: 0.35,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
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
        listings: [
          {
            id: 1,
            image: '/v1663308694/Video_shoot_tile_v2.jpg',
            title: 'Video shoot',
            href: '#',
          },
          {
            id: 2,
            image: '/v1663308737/Photo_shoot_tile.jpg',
            title: 'Photo shoot',
            href: '#',
          },
          {
            id: 3,
            image: '/v1663308759/Meeting_tile.jpg',
            title: 'Meeting',
            href: '#',
          },
          {
            id: 4,
            image: '/v1663308775/Party_tile.jpg',
            title: 'party',
            href: '#',
          },
          {
            id: 5,
            image: '/v1663308789/workshop.jpg',
            title: 'Workshop',
            href: '#',
          },
          {
            id: 6,
            image: '/v1663308801/Baby_shower_tile.jpg',
            title: 'baby shower',
            href: '#',
          },
          {
            id: 7,
            image: '/v1663308817/Popup_tile.jpg',
            title: 'pop-up',
            href: '#',
          },
          {
            id: 8,
            image: '/v1663308831/Performance_tile.jpg',
            title: 'Performance',
            href: '#',
          },
        ],
        title: 'Spaces of all kinds',
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

<style></style>

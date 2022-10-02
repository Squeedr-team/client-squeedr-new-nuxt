<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="grid grid-cols-2 overflow-hidden px-4">
    <div class="mt-3">
      <events-carousel :sectionData="eventsCarouselData" />
      
    </div>
    <div></div>
  </div>
</template>

<script>
import EventsCarousel from './EventsCarousel.vue'
export default {
  components: { EventsCarousel },
  data() {
    return {
      eventsCarouselData: {
        title: 'What kind of space are you looking for?',
        ref: 'all-events',
        settings: {
          dots: false,
          dotsClass: 'slick-dots custom-dot-class',
          edgeFriction: 0.35,
          infinite: false,
          speed: 500,
          slidesToShow: 5,
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
      },
    }
  },
}
</script>

<style></style>

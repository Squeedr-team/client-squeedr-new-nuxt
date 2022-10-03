<!-- eslint-disable vue/no-lone-template -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div
    class="grid grid-cols-5 overflow-hidden max-h-screen overflow-y-hidden px-4 relative"
  >
    <div
      class="pt-3 pr-3 pb-16 h-screen overflow-y-scroll overflow-x-hidden mt-16"
      :class="`${showMap ? 'col-span-3' : 'col-span-5'} `"
    >
      <template v-if="showList">
        <events-carousel :sectionData="eventsCarouselData" />
        <result-spaces :results="searchResultsData" :fullWidth="!showMap" />
      </template>
    </div>
    <div
      v-if="showMap"
      class="hidden sm:block col-span-2 bg-red-200 mt-16 min-w-screen"
      :class="`${
        isSmallScreen
          ? 'col-span-5 absolute left-0 top-0 w-screen'
          : 'col-span-2 w-auto relative'
      }`"
    >
      <spaces-map :results="searchResultsData" />
    </div>
  </div>
</template>

<script>
import EventsCarousel from './EventsCarousel.vue'
import ResultSpaces from './ResultSpaces.vue'
import SpacesMap from './SpacesMap.vue'
export default {
  components: { EventsCarousel, ResultSpaces, SpacesMap },
  props: {
    isSmallScreen: {
      type: Boolean,
      required: true,
    },
    showMap: {
      type: Boolean,
      required: true,
    },
  },
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
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 640,
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
      searchResultsData: [
        {
          id: 3,
          images: [
            '/v1663308801/Baby_shower_tile.jpg',
            '/v1663308759/Meeting_tile.jpg',
          ],
          image: '/v1663308759/Meeting_tile.jpg',
          title: 'Lieu artistique et atypique au coeur de P',
          members: 100,
          position: {
            lat: 48.12891567,
            lng: 2.3525,
          },
          price: 500,
          note: 'new space',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: false,
          covid_enhanced: true,
          href: '#',
        },
        {
          id: 1,
          image: '/v1663308694/Video_shoot_tile_v2.jpg',
          title: 'Théâtre privatisable pour tous vos événe',
          members: 100,
          position: {
            lat: 47.9999,
            lng: 2.3522,
          },
          price: 500,
          images: [
            '/v1663308694/Video_shoot_tile_v2.jpg',
            '/v1663308789/workshop.jpg',
          ],
          note: 'new space',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: true,
          covid_enhanced: false,
          href: '#',
        },
        {
          id: 4,
          image: '/v1663308775/Party_tile.jpg',
          title: 'Galerie dart idéale pour pop-up et petits',
          members: 100,
          position: {
            lat: 48.124828568,
            lng: 2.13526,
          },
          price: 500,
          images: [
            '/v1663308775/Party_tile.jpg',
            '/v1663308759/Meeting_tile.jpg',
          ],
          note: 'new space',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: false,
          covid_enhanced: false,
          href: '#',
        },
        {
          id: 2,
          image: '/v1663308737/Photo_shoot_tile.jpg',
          title: 'Loft zen et harmonieux de 400m2 pour v',
          members: 100,
          position: {
            lat: 48.8569,
            lng: 2.923521,
          },
          price: 500,
          images: [
            '/v1663308801/Baby_shower_tile.jpg',
            '/v1663308801/Baby_shower_tile.jpg',
          ],
          note: 'Responds within 12 hrs',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: true,
          covid_enhanced: false,
          href: '#',
        },
        {
          id: 5,
          image: '/v1663308789/workshop.jpg',
          title: 'Superbe Showroom & Studio Photo dans ',
          members: 100,
          position: {
            lat: 48.948562,
            lng: 2.933521,
          },
          price: 500,
          images: [
            '/v1663308789/workshop.jpg',
            '/v1663308801/Baby_shower_tile.jpg',
          ],
          note: 'Responds in over 48 hrs',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: false,
          covid_enhanced: true,
          href: '#',
        },
        {
          id: 6,
          image: '/v1663308801/Baby_shower_tile.jpg',
          title:
            'Superbe appartement Haussmannien au coeur du 16ème arrondissement idéal pour réceptions, cocktails, rendez-vous professionnels',
          members: 100,
          position: {
            lat: 48.12562,
            lng: 2.43523,
          },
          price: 500,
          note: 'Responds within 1 hr',
          images: [
            '/v1663308801/Baby_shower_tile.jpg',
            '/v1663308831/Performance_tile.jpg',
          ],
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: false,
          covid_enhanced: false,
          href: '#',
        },
        {
          id: 7,
          image: '/v1663308817/Popup_tile.jpg',
          title:
            'Studio lumineux et chaleureux de 80m2 avec petit coin de verdure',
          members: 100,
          position: {
            lat: 48.8563,
            lng: 2.3524,
          },
          price: 500,
          images: [
            '/v1663308817/Popup_tile.jpg',
            '/v1663308775/Party_tile.jpg',
          ],
          note: 'new space',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: false,
          covid_enhanced: false,
          href: '#',
        },
        {
          id: 8,
          image: '/v1663308831/Performance_tile.jpg',
          title: 'Beautiful Yoga Studio in the Marais',
          members: 100,
          position: {
            lat: 48.7565,
            lng: 2.4525,
          },
          price: 500,
          images: [
            '/v1663308831/Performance_tile.jpg',
            '/v1663308775/Party_tile.jpg',
          ],
          note: 'new space',
          covidEnhancment: true,
          instantBook: false,
          rate: null,
          instant_book: false,
          covid_enhanced: false,
          href: '#',
        },
      ],
    }
  },
  computed: {
    showList() {
      if (this.isSmallScreen) {
        if (this.showMap) {
          return false
        } else {
          return true
        }
      } else {
        return true
      }
    },
  },
  mounted() {
    console.log('this.isSmalls', this.isSmallScreen)
    // if (this.isSmallScreen) {
    //   if (this.showMap) {
    //     return false
    //   }
    // }
  },
}
</script>

<style></style>

<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="container pt-5">
    <header-img-slider :slides="listingData.images" />
    <div class="grid grid-cols-12">
      <div class="col-span-12 lg:col-span-9 order-2 lg:order-1 pr-0 lg:pr-5">
        <p class="font-bold text-lg md:text-xl">{{ listingData.title }}</p>
        <p class="flex items-center gap-2 text-gray-500">
          <img width="18px" :src="locationIcon" alt="map" />
          {{ listingData.address }}
        </p>
        <div class="mt-3 pb-3 flex items-center border-b">
          <p class="flex items-center gap-2 mr-5">
            <img width="18px" :src="personIcon" />
            <span>{{ listingData.people }} people</span>
          </p>
          <p class="flex items-center gap-2 mr-5">
            <img width="18px" :src="clockIcon" />
            <span>{{ listingData.hour }}</span>
          </p>
          <p class="flex items-center gap-2 mr-5">
            <img width="18px" :src="triangleIcon" />
            <span>{{ listingData.space }}</span>
          </p>
        </div>
        <div class="py-4 flex items-center justify-between border-b">
          <p class="flex items-center gap-2">
            <img
              class="rounded-full"
              width="40px"
              src="https://i.pravatar.cc/150?img=17"
              alt="avatar"
            />
            <span class="text-gray-600 hover:text-gray-500">
              Hosted by Laurent S.
            </span>
          </p>
          <button
            class="border border-[#dde0e6] px-4 py-2 font-semibold rounded"
          >
            Message Host
          </button>
        </div>
        <div class="py-4 border-b">
          <p class="flex items-center font-bold text-[#1a6dfd]">
            <img class="mr-2" width="30px" :src="sheildIcon" />
            <span class="md:text-lg">
              Enhanced COVID-19 Health & Safety Measures
            </span>
          </p>
          <p class="md:text-lg text-gray-700">
            Les lieux sont nettoyés après chaque tournage par les loueur. Un
            ménage est fait un fois par semaine par un professionnel.
          </p>
        </div>
        <div
          v-for="panel in listingData.features.slice(0, 4)"
          :key="panel.id"
          class=""
        >
          <listing-accordion :panelData="panel" />
        </div>
        <div class="py-4">
          <h2 class="text-xl mb-2">About the Space</h2>
          <p :class="`text-gray-700 ${readMore ? '' : 'line-clamp-1'}`">
            Maison moderne avec bardage bois et jardin provençal vert toute
            l’année. Cuisine américaine ouverte sur le salon idéal pour vidéos
            des recettes. Pièce à vivre de 60m2. Deux chambres disponibles,
            bureau, deux salles de bain. Matériel disponible: Slider motorisé 3m
            avec tête 3D i-footage. Projecteur led avec diffuseur.
          </p>
          <button
            class="py-1 text-green-600 hover:text-green-500"
            @click="readMore = !readMore"
          >
            {{ readMore ? 'Hide' : 'Read More' }}
          </button>
        </div>
        <div
          v-for="panel in listingData.features.slice(
            4,
            listingData.features.length
          )"
          :key="panel.id"
        >
          <listing-accordion :panelData="panel" />
        </div>
        <div class="py-4 border-b">
          <p class="md:text-lg font-semibold">Included in your booking</p>
          <div
            class="relative pl-5"
            :class="
              showAllBookingFeatures
                ? ''
                : 'h-[110px] overflow-y-hidden bg-gradient-to-t from-gray-300 via-white to-transparent'
            "
          >
            <p class="font-bold mt-3">Amenities</p>
            <div class="grid grid-cols-3 mt-2">
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Tables</span>
              </p>
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Tables</span>
              </p>
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Tables</span>
              </p>
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Tables</span>
              </p>
            </div>
            <p class="font-bold mt-3">Features</p>
            <div class="grid grid-cols-3 mt-2">
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Kitchen</span>
              </p>
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Kitchen</span>
              </p>
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Kitchen</span>
              </p>
              <p class="flex items-center mb-2">
                <img width="15px" class="mr-2" :src="clockIcon" />
                <span>Kitchen</span>
              </p>
            </div>
            <p class="text-gray-500">
              Don't see an amenity you're looking for?
              <a href="#" class="text-green-600"> Ask the host, Laurent </a>
            </p>
          </div>

          <button
            class="py-1 text-green-600 hover:text-green-500"
            @click="showAllBookingFeatures = !showAllBookingFeatures"
          >
            {{ showAllBookingFeatures ? 'Show Less' : 'Show All' }}
          </button>
        </div>
        <div class="py-4 border-b">
          <p class="md:text-lg font-semibold">Location</p>
          <div class="mt-3 overflow-hidden">
            <spaces-map
              :results="[listingData]"
              :height="`400px`"
              :single-place="true"
            />
          </div>
        </div>
        <div class="py-4 border-b">
          <p class="md:text-lg font-semibold">Operating Hours</p>
          <div class="mt-3">
            <p
              v-for="dayTime in listingData.operating_hours"
              :key="dayTime.day"
              class="flex justify-between max-w-md mb-2"
            >
              <span>
                {{ dayTime.day }}
              </span>
              <span>
                {{ dayTime.time }}
              </span>
            </p>
          </div>
        </div>
        <div class="py-4 border-b mb-10">
          <p class="md:text-lg font-semibold">Cancellation Policy</p>
          <div>
            <p
              v-for="policy in listingData.cancellation_policies"
              :key="policy.id"
            >
              <span class="block font-bold text-lg mt-3 text-gray-700">
                {{ policy.title }}
              </span>
              <span class="text-gray-600">{{ policy.description }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-3 order-1 lg:order-2 mb-5 lg:mb-0">
        <book-space-card />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderImgSlider from '~/components/SingleListing/HeaderImgSlider.vue'
import ListingAccordion from '~/components/SingleListing/ListingAccordion.vue'
import SpacesMap from '~/components/SearchResultPage/SpacesMap.vue'
import BookSpaceCard from '~/components/SingleListing/BookSpaceCard.vue'
export default {
  components: { HeaderImgSlider, ListingAccordion, SpacesMap, BookSpaceCard },
  layout: 'footerLayout',
  data() {
    return {
      locationIcon: require('@/assets/icons/location-icon-black.svg'),
      personIcon: require('@/assets/icons/person.svg'),
      triangleIcon: require('@/assets/icons/triangle.svg'),
      clockIcon: require('@/assets/icons/clock.svg'),
      sheildIcon: require('@/assets/icons/enhanced-badge.svg'),
      readMore: false,
      showAllBookingFeatures: false,
      listingData: {
        id: 1,
        image: '/v1663308694/Video_shoot_tile_v2.jpg',
        title: 'Théâtre privatisable pour tous vos événe',
        members: 100,
        address: 'Épinettes, Paris',
        people: 40,
        space: '130 m²',
        hour: '5 hr min',
        cancellation_policies: [
          {
            id: 1,
            title: 'Very Flexible',
            description:
              'Guests may cancel their Booking until 24 hours before the event start time and will receive a full refund (including all Fees) of their Booking Price. Bookings cancellations submitted less than 24 hours before the Event start time are not refundable.',
          },
        ],
        operating_hours: [
          { day: 'Monday', time: '8:00 AM - 8:00 PM' },
          { day: 'Tuesday', time: '8:00 AM - 8:00 PM' },
          { day: 'Wednesday', time: '8:00 AM - 8:00 PM' },
          { day: 'Thursday', time: '8:00 AM - 8:00 PM' },
          { day: 'Friday', time: '8:00 AM - 8:00 PM' },
          { day: 'Saturday', time: '8:00 AM - 8:00 PM' },
          { day: 'Sunday', time: '8:00 AM - 8:00 PM' },
        ],
        features: [
          {
            id: 1,
            title: 'Cleaning protocol',
            icon: require('@/assets/icons/cleaning.svg'),
          },
          {
            id: 2,
            title: 'Protective gear',
            icon: require('@/assets/icons/distanceIcon.svg'),
          },
          {
            id: 3,
            title: 'Physical distance',
            icon: require('@/assets/icons/mask.svg'),
          },
          {
            id: 4,
            title: 'Signage',
            icon: require('@/assets/icons/letter.svg'),
          },
          {
            id: 5,
            title: 'Parking',
            icon: require('@/assets/icons/parking.svg'),
          },
          {
            id: 6,
            title: 'Host Rules',
            icon: require('@/assets/icons/letter.svg'),
          },
        ],
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
    }
  },
}
</script>

<style></style>

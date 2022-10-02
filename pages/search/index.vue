<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div class="relative">
    <filters-container :showMap="showMap" @toggleMap="showMap = !showMap" />
    <search-results-container
      :showMap="showMap"
      :isSmallScreen="isSmallScreen"
    />
    <div
      class="ml-auto w-screen py-3 absolute bottom-1 z-[9999999] justify-center flex md:hidden"
    >
      <button
        v-if="!showMap"
        class="text-white flex items-center bg-[#41838f] gap-2 px-2 py-2 rounded-full"
        @click="showMapHideList"
      >
        <img width="20px" height="20px" :src="locationIcon" alt="map" />
        <span>Map</span>
      </button>
      <button
        v-else
        class="text-white flex items-center bg-[#41838f] gap-2 px-2 py-2 rounded-full"
        @click="showListHideMap"
      >
        <img :src="gridIcon" alt="map" />
        <span>List</span>
      </button>
    </div>
    <!-- <template v-for="section in pageData">
      <component
        :is="section.component_name"
        v-if="section.component"
        :key="section.id"
        :section-data="section.content"
      />
    </template> -->
  </div>
</template>

<script>
import FiltersContainer from '~/components/SearchResultPage/FiltersContainer.vue'
import SearchResultsContainer from '~/components/SearchResultPage/SearchResultsContainer.vue'
export default {
  components: { FiltersContainer, SearchResultsContainer },
  layout: 'empty',
  data() {
    return {
      isSmallScreen: false,
      showMap: true,
      locationIcon: require('@/assets/icons/locationIcon.svg'),
      gridIcon: require('@/assets/icons/grid-Icon.svg'),
      // pageData: [
      //     {
      //         id: 1,
      //         component: true,
      //         component_name: "filters-container",
      //         content: {},
      //     },
      //     {
      //         id: 1,
      //         component: true,
      //         component_name: "search-results-container",
      //         content: {},
      //     },
      // ],
    }
  },
  head: {
    title: 'Squeedr Results',
  },
  created() {
    if (typeof window === 'object') {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('resize', this.resizingHandler)
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.resizingHandler)
  },
  methods: {
    resizingHandler(e) {
      const windowWidth = window.innerWidth
      if (windowWidth < 768) {
        this.showMap = false
      } else {
        this.isSmallScreen = false
      }
    },
    showMapHideList() {
      this.isSmallScreen = true
      this.showMap = true
    },
    showListHideMap() {
      this.isSmallScreen = true
      this.showMap = false
    },
  },
}
</script>

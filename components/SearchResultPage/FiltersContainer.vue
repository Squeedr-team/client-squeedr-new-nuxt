<template>
  <div class="w-full bg-white px-5 py-3 border-b flex">
    <div class="mr-3 hidden md:block">
      <button
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 rounded"
        @click="showPriceMenu = !showPriceMenu"
      >
        Price
      </button>
      <price-menu v-if="showPriceMenu" @closeMenu="showPriceMenu = false" />
    </div>
    <div class="mr-3 hidden md:block">
      <button
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 rounded"
        @click="showAttendeesMenu = !showAttendeesMenu"
      >
        Attendees
      </button>
      <attendees-menu
        v-if="showAttendeesMenu"
        @closeMenu="showAttendeesMenu = false"
      />
    </div>
    <div class="mr-3 w-full md:w-1/12">
      <button
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 w-full"
        @click="showDateMenu = !showDateMenu"
      >
        When?
      </button>
      <select-date-menu v-if="showDateMenu" @closeMenu="showDateMenu = false" />
    </div>
    <div class="mr-0 md:mr-3 w-full md:w-1/6">
      <button
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 w-full flex items-center gap-1"
        @click="showModaFiltersModal = !showModaFiltersModal"
      >
        <img :src="filterIcon" alt="filter icon" height="17px" width="17px" />
        More Filters
      </button>
      <more-filters-modal
        v-if="showModaFiltersModal"
        @closeMenu="showModaFiltersModal = false"
      />
    </div>
    <div class="mr-3 hidden md:block">
      <input
        id="keyword"
        class="border rounded-sm p-2"
        type="text"
        placeholder="Enter a keyword"
      />
    </div>
    <div class="ml-auto self-center hidden md:block">
      <label
        for="default-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          id="default-toggle"
          type="checkbox"
          value=""
          class="sr-only peer"
        />
        <div
          class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#52a2b1] outline-none border-0"
        ></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Map
        </span>
      </label>
    </div>
  </div>
</template>

<script>
import priceMenu from './PriceMenu.vue'
import AttendeesMenu from './AttendeesMenu.vue'
import SelectDateMenu from './SelectDateMenu.vue'
import MoreFiltersModal from './MoreFiltersModal.vue'
export default {
  components: { priceMenu, AttendeesMenu, SelectDateMenu, MoreFiltersModal },
  props: {
    sectionData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showPriceMenu: false,
      showAttendeesMenu: false,
      showDateMenu: false,
      showModaFiltersModal: false,
      filterIcon: require('@/assets/icons/filter-teal.svg'),
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('FILTER CONTAINER PROPS', this.sectionData)
  },
}
</script>

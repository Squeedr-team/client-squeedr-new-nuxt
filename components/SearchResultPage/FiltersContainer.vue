<template>
  <div class="w-screen fixed z-50 bg-white px-5 py-3 border-b flex">
    <!-- START PRICE FILTER -->

    <div class="mr-3 hidden md:block">
      <button
        v-if="!queryFilterData.price"
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 rounded"
        @click="openFilterDropDown('showPriceMenu')"
      >
        Price
      </button>
      <button
        v-if="queryFilterData.price"
        class="bg-green-200 py-2 px-4 rounded text-green-800 border border-green-200"
        @click="openFilterDropDown('showPriceMenu')"
      >
        {{ queryFilterData.price }}
      </button>
      <price-menu
        v-if="opendMenuName === 'showPriceMenu'"
        :prev-val="queryFilterData.price"
        @closeMenu="opendMenuName = null"
        @selectPrice="selectFilterValue"
      />
    </div>

    <!-- END PRICE FILTER -->

    <!-- START ATTENDEE FILTER -->

    <div class="mr-3 hidden md:block">
      <button
        v-if="!queryFilterData.attendees"
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 rounded"
        @click="openFilterDropDown('showAttendeesMenu')"
      >
        Attendees
      </button>
      <button
        v-if="queryFilterData.attendees"
        class="bg-green-200 py-2 px-4 rounded text-green-800 border border-green-200"
        @click="openFilterDropDown('showAttendeesMenu')"
      >
        {{ queryFilterData.attendees }} people
      </button>
      <attendees-menu
        v-if="opendMenuName === 'showAttendeesMenu'"
        :prev-val="queryFilterData.attendees"
        @closeMenu="opendMenuName = null"
        @selectAttendees="selectFilterValue"
      />
    </div>

    <!-- End ATTENDEE FILTER -->

    <div class="mr-3 w-full md:w-1/12">
      <button
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 w-full text-center md:text-left"
        @click="openFilterDropDown('showDateMenu')"
      >
        When?
      </button>
      <select-date-menu
        v-if="opendMenuName === 'showDateMenu'"
        @closeMenu="opendMenuName = null"
      />
    </div>
    <div class="mr-0 md:mr-3 w-full md:w-1/6">
      <button
        class="bg-white hover:bg-gray-100 py-2 px-4 border hover:border-gray-300 w-full flex items-center gap-1"
        @click="showMoreFiltersModal = !showMoreFiltersModal"
      >
        <img :src="filterIcon" alt="filter icon" height="17px" width="17px" />
        More Filters
      </button>
      <more-filters-modal
        v-if="showMoreFiltersModal"
        @closeMenu="showMoreFiltersModal = false"
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
          :checked="showMap"
          @change="$emit('toggleMap')"
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
    showMap: {
      type: Boolean,
    },
  },
  data() {
    return {
      opendMenuName: null,
      showAttendeesMenu: false,
      showDateMenu: false,
      showMoreFiltersModal: false,
      filterIcon: require('@/assets/icons/filter-teal.svg'),
      queryFilterData: {
        price: '',
        attendees: '',
        date: '',
        keyword: '',
      },
    }
  },
  methods: {
    openFilterDropDown(menuName) {
      // if it already opend ==> close it
      if (menuName === this.opendMenuName) {
        this.opendMenuName = null
      } else {
        this.opendMenuName = menuName
      }
    },
    selectFilterValue(args) {
      // eslint-disable-next-line no-console
      console.log('val', args)
      // eslint-disable-next-line no-console
      console.log('filterQueryKey', args)
      this.queryFilterData[args.filterQueryKey] = args.val
      this.$router.push({
        query: { ...this.$route.query, ...this.queryFilterData },
      })
    },
    toggleFilterModa() {
      this.showMoreFiltersModal = !this.showMoreFiltersModal
      this.opendMenuName = null
    },
  },
}
</script>

<!-- 

  1- update new button text
  2- update route query params
  3- make selected value checked

 -->

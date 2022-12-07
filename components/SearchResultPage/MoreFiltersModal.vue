<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div
    class="backdrop-blur-sm flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 w-full md:inset-0 h-modal md:h-full"
  >
    <div class="relative p-4 w-screen min-h-screen pb-96">
      <!-- Modal content -->
      <div
        class="absolute inset-x-0 mx-auto -mt-5 top-24 max-w-md rounded-t-none bg-white rounded-lg shadow mb-56"
      >
        <div class="border-b">
          <button
            type="button"
            class="absolute top-2 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            @click="$emit('closeMenu')"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <p class="font-bold text-center w-full text-lg py-2">Filters</p>
        </div>
        <div class="max-h-[50vh] overflow-y-scroll">
          <div class="py-6 pb-5 px-6">
            <div class="flex flex-col border-b pb-5">
              <label class="mb-2 font-semibold" for="keyword">Keyword</label>
              <input
                id="keyword"
                class="border rounded-sm p-2"
                type="text"
                placeholder="Enter a keyword"
                @change="$emit('keywordSearch', $event.target.value)"
              />
            </div>
          </div>
          <div
            v-for="section in modalSections"
            :key="section.title"
            class="px-6 pb-5"
          >
            <div class="flex flex-col border-b pb-5">
              <label class="mb-2 font-semibold" for="outdoor">
                {{ section.title }}
              </label>
              <div class="grid grid-cols-2">
                <div
                  v-for="space in section.data"
                  :key="space.label"
                  class="flex items-center mb-2"
                >
                  <input
                    :id="space.label"
                    class="text-blue-600 bg-gray-100"
                    type="checkbox"
                    :data-section-title-val="section.section_title_val"
                    :value="space.value"
                    @change="onSectionInputChange"
                  />
                  <label
                    :for="space.label"
                    class="ml-2 cursor-pointer text-gray-400"
                  >
                    {{ space.label }}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="px-6 pb-5 border-b">
            <div class="flex items-center">
              <input
                id="covid"
                type="checkbox"
                value="covid"
                class="text-blue-600 bg-gray-100"
              />
              <label
                for="covid"
                class="ml-2 cursor-pointer flex items-center font-bold text-[#1a6dfd]"
              >
                <img
                  width="18px"
                  height="18px"
                  class="mr-2"
                  :src="sheildIcon"
                  alt="shelid"
                />
                Enhanced &nbsp;<span class="text-base"> COVID-19 </span>&nbsp;
                Measures
              </label>
            </div>
            <p class="ml-5 text-sm text-gray-500">
              Only show listings from hosts who take extra precautions to reduce
              the spread of COVID-19.
              <a href="/" class="text-green-400"> Learn more</a>
            </p>
          </div>
          <div class="px-6 py-5 border-b">
            <div class="flex items-center">
              <input
                id="instant-book"
                type="checkbox"
                value="instant-book"
                class="bg-gray-100"
              />
              <label
                for="instant-book"
                class="ml-2 cursor-pointer flex items-center font-bold"
              >
                <img
                  width="12px"
                  height="12px"
                  class="mr-2"
                  :src="lightIcon"
                  alt="shelid"
                />
                Instant Book
              </label>
            </div>
            <p class="ml-5 text-sm text-gray-500">
              Only see spaces that can be instantly booked
            </p>
          </div>
          <div class="w-full h-full relative block md:hidden">
            <price-menu
              :isMenu="true"
              :prev-val="pricePrevVal"
              @closeMenu="opendMenuName = null"
              @selectPrice="(val) => $emit('selectResponsiveInput', val)"
            />
          </div>
          <div class="w-full h-full relative block md:hidden">
            <attendees-menu
              :isMenu="true"
              :prev-val="attendeePrevVal"
              @closeMenu="opendMenuName = null"
              @selectAttendees="(val) => $emit('selectResponsiveInput', val)"
            />
          </div>
        </div>
        <div class="flex justify-between p-5 border-t px-6">
          <button
            class="text-gray-400 hover:text-gray-500"
            @click="$emit('clearAll')"
          >
            Clear all
          </button>
          <button
            class="bg-[#e82953] hover:bg-[#c8163d] text-white p-2 px-3 rounded"
          >
            View 10 spaces
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PriceMenu from './PriceMenu.vue'
import AttendeesMenu from './AttendeesMenu.vue'
export default {
  components: { PriceMenu, AttendeesMenu },
  props: {
    prevVal: {
      type: Object,
      required: false,
      default: () => {},
    },
    pricePrevVal: {
      type: String,
      required: false,
      default: () => '',
    },
    attendeePrevVal: {
      type: String,
      required: false,
      default: () => '',
    },
  },
  data() {
    return {
      sheildIcon: require('@/assets/icons/enhanced-badge.svg'),
      lightIcon: require('@/assets/icons/lightningbolt.svg'),
      customFiltersObj: {},
      modalSections: [
        {
          title: 'Outdoor Spaces',
          section_title_val: 'outdoor_features',
          data: [
            {
              label: 'Backyard',
              value: 'backyard',
            },
            {
              label: 'Desert',
              value: 'desert',
            },
            {
              label: 'Garden',
              value: 'garden',
            },
            {
              label: 'Patio',
              value: 'patio',
            },
            {
              label: 'Shop',
              value: 'shop',
            },
          ],
        },
        {
          title: 'Interior Spaces',
          section_title_val: 'indoor_features',
          data: [
            {
              label: 'Bathroom',
              value: 'bathroom',
            },
            {
              label: 'Dining Area',
              value: 'dining-area',
            },
            {
              label: 'Home Office',
              value: 'home-office',
            },
            {
              label: 'Bedroom',
              value: 'bedroom',
            },
            {
              label: 'Kids Room',
              value: 'kids-room',
            },
          ],
        },
        {
          title: 'Production Equipment',
          section_title_val: 'production_features',
          data: [
            {
              label: 'Cyclorama',
              value: 'cyclorama',
            },
            {
              label: 'Daylight Setup',
              value: 'daylight-setup',
            },
            {
              label: 'Green Screen',
              value: 'green-screen',
            },
            {
              label: 'Seamless Backdrop',
              value: 'seamless-backdrop',
            },
          ],
        },
        {
          title: 'Style',
          section_title_val: 'style',
          data: [
            {
              label: 'Bohemian',
              value: 'bohemian',
            },
            {
              label: 'Coastal / Beachy',
              value: 'coastal-beachy',
            },
            {
              label: 'Colorful',
              value: 'colorful',
            },
            {
              label: 'Farmhouse',
              value: 'farmhouse',
            },
            {
              label: 'Loft',
              value: 'loft',
            },
            {
              label: 'Industrial',
              value: 'industrial',
            },
          ],
        },
        {
          title: 'Space Type',
          section_title_val: 'space_type',
          data: [
            {
              label: 'Apartment',
              value: 'apartment',
            },
            {
              label: 'Banquet Hall',
              value: 'banquet-hall',
            },
            {
              label: 'Bar',
              value: 'bar',
            },
            {
              label: 'Church',
              value: 'church',
            },
            {
              label: 'Classroom',
              value: 'classroom',
            },
            {
              label: 'Conference Room',
              value: 'conference-room',
            },
          ],
        },
        {
          title: 'Amenities',
          section_title_val: 'amenities',
          data: [
            {
              label: 'Deck',
              value: 'deck',
            },
            {
              label: 'Elevator',
              value: 'elevator',
            },
            {
              label: 'Fire Pit',
              value: 'fire-pit',
            },
            {
              label: 'Exposed Brick',
              value: 'exposed-brick',
            },
            {
              label: 'Fireplace',
              value: 'fireplace',
            },
            {
              label: 'Gazebo',
              value: 'gazebo',
            },
          ],
        },
      ],
    }
  },
  methods: {
    onSectionInputChange(inputElement) {
      // eslint-disable-next-line no-unused-vars
      const inputSectionTitle = inputElement.target.getAttribute(
        'data-section-title-val'
      )
      const selectedSectionData = this.prevVal[inputSectionTitle]
      // // eslint-disable-next-line no-console
      // console.log(' this.prevVal  this.prevVal', this.prevVal)

      if (selectedSectionData) {
        this.customFiltersObj[
          inputSectionTitle
        ] = `${selectedSectionData}+${inputElement.target.value}`
      } else {
        this.customFiltersObj[inputSectionTitle] = inputElement.target.value
      }

      this.$emit('selectedCustomFilters', {
        filterQueryKey: inputSectionTitle,
        val: this.customFiltersObj[inputSectionTitle],
      })
    },
  },
}
</script>

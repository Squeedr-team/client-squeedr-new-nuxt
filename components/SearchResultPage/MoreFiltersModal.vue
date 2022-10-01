<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div
    class="backdrop-blur-sm flex items-center justify-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
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
              />
            </div>
          </div>
          <div
            v-for="section in modalSections"
            :key="section.title"
            class="px-6 pb-5"
          >
            <div class="flex flex-col border-b pb-5">
              <label class="mb-2 font-semibold" for="outdoor">{{
                section.title
              }}</label>
              <div class="grid grid-cols-2">
                <div
                  v-for="space in section.data"
                  :key="space.label"
                  class="flex items-center mb-2"
                >
                  <input
                    :id="space.label"
                    type="checkbox"
                    :value="space.label"
                    class="text-blue-600 bg-gray-100"
                  />
                  <label
                    :for="space.label"
                    class="ml-2 cursor-pointer text-gray-400"
                    >{{ space.label }}</label
                  >
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
                Enhanced &nbsp;<span class="text-md"> COVID-19 </span>&nbsp;
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
            <price-menu :isMenu="true" />
          </div>
          <div class="w-full h-full relative block md:hidden">
            <attendees-menu :isMenu="true" />
          </div>
        </div>
        <div class="flex justify-between p-5 border-t px-6">
          <button class="text-gray-400 hover:text-gray-500">Clear all</button>
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
  data() {
    return {
      sheildIcon: require('@/assets/icons/enhanced-badge.svg'),
      lightIcon: require('@/assets/icons/lightningbolt.svg'),
      modalSections: [
        {
          title: 'Outdoor Spaces',
          data: [
            {
              label: 'Backyard',
            },
            {
              label: 'Desert',
            },
            {
              label: 'Garden',
            },
            {
              label: 'Patio',
            },
            {
              label: 'Shop',
            },
          ],
        },
        {
          title: 'Interior Spaces',
          data: [
            {
              label: 'Bathroom',
            },
            {
              label: 'Dining Area',
            },
            {
              label: 'Home Office',
            },
            {
              label: 'Bedroom',
            },
            {
              label: 'Kids Room',
            },
          ],
        },
        {
          title: 'Production Equipment',
          data: [
            {
              label: 'Cyclorama',
            },
            {
              label: 'Daylight Setup',
            },
            {
              label: 'Green Screen',
            },
            {
              label: 'Seamless Backdrop',
            },
          ],
        },
        {
          title: 'Style',
          data: [
            {
              label: 'Bohemian',
            },
            {
              label: 'Coastal / Beachy',
            },
            {
              label: 'Colorful',
            },
            {
              label: 'Farmhouse',
            },
            {
              label: 'Loft',
            },
            {
              label: 'Industrial',
            },
          ],
        },
        {
          title: 'Space Type',
          data: [
            {
              label: 'Apartment',
            },
            {
              label: 'Banquet Hall',
            },
            {
              label: 'Bar',
            },
            {
              label: 'Church',
            },
            {
              label: 'Classroom',
            },
            {
              label: 'Conference Room',
            },
          ],
        },
        {
          title: 'Style',
          data: [
            {
              label: 'Bohemian',
            },
            {
              label: 'Coastal / Beachy',
            },
            {
              label: 'Colorful',
            },
            {
              label: 'Farmhouse',
            },
            {
              label: 'Loft',
            },
            {
              label: 'Industrial',
            },
          ],
        },
        {
          title: 'Amenities',
          data: [
            {
              label: 'Deck',
            },
            {
              label: 'Elevator',
            },
            {
              label: 'Fire Pit',
            },
            {
              label: 'Exposed Brick',
            },
            {
              label: 'Fireplace',
            },
            {
              label: 'Gazebo',
            },
          ],
        },
      ],
    }
  },
}
</script>

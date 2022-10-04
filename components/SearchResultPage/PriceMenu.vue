<template>
  <div>
    <div
      :class="`${
        isMenu ? 'relative' : 'absolute border'
      } w-full max-w-sm bg-white shadow-sm p-5 py-4 mt-2`"
    >
      <p v-if="isMenu" class="font-semibold mb-2">Price:</p>
      <div
        v-for="priceRange in pricesRange"
        :key="priceRange.value"
        class="flex items-center justify-start mb-2 gap-2"
      >
        <input
          :id="priceRange.value"
          :value="priceRange.value"
          type="radio"
          :checked="prevVal === priceRange.value"
          name="price-input"
          @click="showRange = false"
          @change="
            $emit('selectPrice', {
              filterQueryKey: 'price',
              val: $event.target.value,
            })
          "
        />
        <label
          :for="priceRange.value"
          class="font-bold text-gray-700 cursor-pointer"
        >
          {{ priceRange.label }}
        </label>
      </div>

      <!-- RANGE INPUT  -->
      <div class="flex items-center justify-start mb-2 gap-2">
        <input
          id="range"
          type="radio"
          name="price-input"
          :checked="!prevVal"
          @change="showRange = true"
        />
        <label for="range" class="font-bold text-gray-700 cursor-pointer">
          Enter range
        </label>
      </div>
      <div v-if="showRange" class="flex items-center justify-center mb-2 gap-2">
        <div class="flex items-center">
          <span class="p-2 border border-r-0 rounded-md rounded-r-none">
            €
          </span>
          <input
            class="p-2 border rounded-md rounded-l-none w-[120px] outline-none"
            type="text"
            placeholder="min"
            @change="inputRangeHandler({ min: $event.target.value })"
          />
        </div>
        <span>&nbsp; to &nbsp;</span>
        <div class="flex items-center">
          <span class="p-2 border border-r-0 rounded-md rounded-r-none">
            €
          </span>
          <input
            class="p-2 border rounded-md rounded-l-none w-[120px] outline-none"
            type="text"
            placeholder="max"
            @change="inputRangeHandler({ max: $event.target.value })"
          />
        </div>
      </div>
      <div v-show="!isMenu" class="w-full flex justify-between my-4">
        <button class="text-gray-400 hover:text-gray-500">Clear</button>
        <button
          class="bg-[#52a2b1] hover:bg-[#41838f] text-white p-2 px-4 rounded-md"
          @click="$emit('closeMenu')"
        >
          Done
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMenu: {
      type: Boolean,
      required: false,
    },
    prevVal: {
      type: String,
      required: false,
      default: () => '',
    },
  },
  data() {
    return {
      showRange: false,
      inputRange: {
        min: '',
        max: '',
      },
      pricesRange: [
        { label: 'Up to €100', value: 'Up to €100' },
        { label: '€100 to €250', value: '€100 to €250' },
        { label: '€250 to €500', value: '€250 to €500' },
      ],
    }
  },
  methods: {
    inputRangeHandler(val) {
      this.inputRange = { ...this.inputRange, ...val }
      this.$emit('selectPrice', {
        filterQueryKey: 'price',
        val: `€${this.inputRange.min} - €${this.inputRange.max}`,
      })
    },
  },
}
</script>

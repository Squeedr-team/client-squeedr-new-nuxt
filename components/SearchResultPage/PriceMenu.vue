<template>
  <div>
    <div
      :class="`${
        isMenu ? 'relative' : 'absolute border'
      } w-full max-w-sm bg-white shadow-sm p-5 py-4 mt-2`"
    >
      <p v-if="isMenu" class="font-semibold mb-2">Price:</p>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="100$" type="radio" name="price-input" />
        <label for="100$" class="font-bold text-gray-700 cursor-pointer"
          >Up to €100</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="100-250" type="radio" name="price-input" />
        <label for="100-250" class="font-bold text-gray-700 cursor-pointer"
          >$100 to $250</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="250-500" type="radio" name="price-input" />
        <label for="250-500" class="font-bold text-gray-700 cursor-pointer"
          >$250 to $500</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input
          id="range"
          type="radio"
          name="price-input"
          @change="showRange = true"
        />
        <label for="range" class="font-bold text-gray-700 cursor-pointer">
          Enter range
        </label>
      </div>
      <div v-if="showRange" class="flex items-center justify-center mb-2 gap-2">
        <div class="flex items-center">
          <span class="p-2 border border-r-0 rounded-md rounded-r-none"> € </span>
          <input class="p-2 border rounded-md rounded-l-none w-[120px] outline-none" type="text" placeholder="min" />
        </div>
        <span>&nbsp; to &nbsp;</span>
        <div class="flex items-center">
          <span class="p-2 border border-r-0 rounded-md rounded-r-none"> € </span>
          <input class="p-2 border rounded-md rounded-l-none w-[120px] outline-none" type="text" placeholder="max" />
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
  },
  data() {
    return {
      showRange: false,
    }
  },
}
</script>

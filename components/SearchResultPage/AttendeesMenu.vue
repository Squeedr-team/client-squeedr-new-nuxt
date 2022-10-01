<template>
  <div>
    <div
      :class="`${
        isMenu ? 'relative' : 'absolute border'
      } w-full max-w-sm bg-white shadow-sm p-5 py-4 mt-2`"
    >
      <p v-if="isMenu" class="font-semibold mb-2">Attendees:</p>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="1 to 10" type="radio" name="price-input" />
        <label for="1 to 10" class="font-bold text-gray-700 cursor-pointer"
          >1 to 10</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="11 to 25" type="radio" name="price-input" />
        <label for="11 to 25" class="font-bold text-gray-700 cursor-pointer"
          >11 to 25</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="26 to 50" type="radio" name="price-input" />
        <label for="26 to 50" class="font-bold text-gray-700 cursor-pointer"
          >26 to 50</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="51 to 100" type="radio" name="price-input" />
        <label for="51 to 100" class="font-bold text-gray-700 cursor-pointer"
          >51 to 100</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="> 100" type="radio" name="price-input" />
        <label for="> 100" class="font-bold text-gray-700 cursor-pointer"
          >Over 100</label
        >
      </div>
      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="range" type="radio" name="price-input" />
        <label for="range" class="font-bold text-gray-700 cursor-pointer"
          >Exact count</label
        >
      </div>
      <div class="flex items-center justify-center mb-2 gap-2">
        <input
          class="p-2 border rounded-md"
          type="text"
          placeholder="e.g. 73"
        />
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
}
</script>

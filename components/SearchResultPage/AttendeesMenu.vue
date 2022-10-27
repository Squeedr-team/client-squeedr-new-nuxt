<template>
  <div>
    <div
      :class="`${
        isMenu ? 'relative' : 'absolute border'
      } w-full max-w-sm bg-white shadow-sm p-5 py-4 mt-2`"
    >
      <p v-if="isMenu" class="font-semibold mb-2">Attendees:</p>
      <div
        v-for="attendeeInput in attendeesInputs"
        :key="attendeeInput.val"
        class="flex items-center justify-start mb-2 gap-2"
      >
        <input
          :id="attendeeInput.value"
          :value="attendeeInput.value"
          :checked="prevVal === attendeeInput.value"
          type="radio"
          name="price-input"
          @change="
            $emit('selectAttendees', {
              filterQueryKey: 'attendees',
              val: $event.target.value,
            })
          "
        />
        <label
          :for="attendeeInput.value"
          class="font-bold text-gray-700 cursor-pointer"
        >
          {{ attendeeInput.label }}
        </label>
      </div>

      <div class="flex items-center justify-start mb-2 gap-2">
        <input id="range" type="radio" name="price-input" />
        <label for="range" class="font-bold text-gray-700 cursor-pointer">
          Exact count
        </label>
      </div>
      <div class="flex items-center justify-center mb-2 gap-2">
        <input
          class="p-2 border rounded-md"
          type="text"
          placeholder="e.g. 73"
        />
      </div>
      <div v-show="!isMenu" class="w-full flex justify-between my-4">
        <button class="text-gray-400 hover:text-gray-500" @click="clear">
          Clear
        </button>
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
      attendeesInputs: [
        { label: '1 to 10', value: '1 to 10' },
        { label: '11 to 25', value: '11 to 25' },
        { label: '26 to 50', value: '51 to 100' },
      ],
    }
  },
  methods: {
    clear() {
      this.$emit('selectAttendees', {
        filterQueryKey: 'attendees',
        val: '',
      })
      this.$emit('closeMenu')
    },
  },
}
</script>

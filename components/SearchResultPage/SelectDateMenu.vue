<template>
  <div
    class="moreFiltersModal-container absolute bg-white shadow-sm border mt-2"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 justify-center">
      <div class="moreFiltersModal-datePicker border-r-2">
        <date-picker
          v-model="when"
          value-type="format"
          placeholder="When?"
          input-class="filters-calendar-input"
          :append-to-body="false"
          :open="openDatePicker"
          @click="openDatePicker = true"
          @change="selectDate"
        ></date-picker>
      </div>
      <div class="p-5 flex flex-col">
        <div class="flex items-center">
          <select
            class="bg-white px-3 py-2 rounded rounded-r-none border border-r-0"
          >
            <option>9:00 AM</option>
          </select>
          <select class="bg-white px-3 py-2 rounded rounded-l-none border">
            <option>5:00 PM</option>
          </select>
        </div>
        <div class="mt-auto py-2">
          <button
            class="w-full mb-3 bg-[#e82953] hover:bg-[#c8163d] text-white py-2 rounded"
          >
            Apply
          </button>
          <button class="w-full text-gray-400 hover:text-gray-500">
            Clear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
  components: { DatePicker },
  data() {
    return {
      when: null,
      openDatePicker: true,
    }
  },
  methods: {
    selectDate(value) {
      // eslint-disable-next-line no-console
      console.log('selectDate', value)
      // if (this.openDatePicker) {
      //   this.openDatePicker = false
      // }
    },
  },
}
</script>
<style>
.moreFiltersModal-container .mx-calendar {
  width: 100%;
}
.moreFiltersModal-container .mx-datepicker-popup {
  position: relative !important;
  top: 0 !important;
  width: fit-content;
  box-shadow: none !important;
  border: none !important;
}
.moreFiltersModal-container .mx-icon-calendar {
  display: none !important;
}
.moreFiltersModal-container .filters-calendar-input {
  display: none !important;
}
</style>

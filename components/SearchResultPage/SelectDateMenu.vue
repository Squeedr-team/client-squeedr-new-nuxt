<template>
  <div
    class="moreFiltersModal-container absolute bg-white shadow-sm border mt-2"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 justify-center">
      <div class="moreFiltersModal-datePicker border-r-2">
        <date-picker
          v-model="formValues.date"
          value-type="format"
          placeholder="When?"
          input-class="filters-calendar-input"
          :disabled-date="(date) => date < new Date()"
          :append-to-body="false"
          :open="openDatePicker"
          @click="openDatePicker = true"
          @change="selectDateTime"
        ></date-picker>
      </div>
      <div class="p-5 flex flex-col">
        <div class="flex items-center">
          <select
            v-model="formValues.start_time"
            class="bg-white px-3 py-2 rounded rounded-r-none border border-r-0"
            @change="selectDateTime($event.target.value)"
          >
            <option value="">Start time</option>
            <option value="09:00 AM">9:00 AM</option>
          </select>
          <select
            v-model="formValues.end_time"
            class="bg-white px-3 py-2 rounded rounded-l-none border"
            @change="selectDateTime($event.target.value)"
          >
            <option value="">End time</option>
            <option value="05:00 PM">5:00 PM</option>
          </select>
        </div>
        <div class="mt-auto py-2">
          <button
            :disabled="isDisabled"
            class="w-full mb-3 bg-[#e82953] hover:bg-[#c8163d] text-white py-2 rounded disabled:bg-red-400 disabled:cursor-not-allowed"
            @click="submitDateTime"
          >
            Apply
          </button>
          <button
            class="w-full text-gray-400 hover:text-gray-500"
            @click="clear"
          >
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
  props: {
    prevVal: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      isDisabled: true,
      formValues: {
        date: this.prevVal.date || '',
        human_readable_date: this.prevVal.human_readable_date || '',
        start_time: this.prevVal.start_time || '',
        end_time: this.prevVal.end_time || '',
      },
      openDatePicker: true,
    }
  },
  methods: {
    submitDateTime() {
      this.formValues.human_readable_date = this.$dateFns.format(
        this.formValues.date,
        'MMM dd'
      )
      this.$emit('selectDataTime', {
        filterQueryKey: 'dateTime',
        val: { ...this.formValues, hasValue: true },
      })
      this.$emit('closeMenu')
    },
    selectDateTime() {
      const isAllFilled = Object.values(this.formValues).every((val) =>
        Boolean(val)
      )
      this.formValues.human_readable_date = this.$dateFns.format(
        this.formValues.date,
        'MMM dd'
      )
      if (isAllFilled) {
        this.isDisabled = false
      }
    },
    clear() {
      this.$emit('selectDataTime', {
        filterQueryKey: 'dateTime',
        val: '',
      })
      this.$emit('closeMenu')
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

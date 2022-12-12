<template>
  <div>
    <div class="border text-center p-5">
      <p class="text-sm"><span class="text-3xl font-bold">€75</span> /hr</p>
      <p class="text-sm text-gray-500 text-center">5 hr minimum</p>
    </div>
    <div class="book-space-form border border-t-0 p-5">
      <label class="font-bold" for="data-time">Date & Time</label>
      <div v-for="(bookingForm, index) in bookingDays" :key="index">
        <date-picker v-model="bookingForm.start_date" :default-value="bookingForm.start_date" placeholder="start date"
          input-class="book-space-calendar-input"></date-picker>
        <div class="flex items-center mt-2 w-full">
          <select v-model="bookingForm.start_time" value=""
            class="text-gray-400 bg-white px-3 py-3 rounded rounded-r-none border border-gray-300 outline-none border-r-0 w-full">
            <option value="">start time</option>
            <option value="09:00 am">9:00 AM</option>
          </select>
          <select v-model="bookingForm.end_time"
            class="text-gray-400 bg-white px-3 py-3 rounded rounded-l-none border border-gray-300 outline-none w-full">
            <option value="">end time</option>
            <option value="05:00 pm">5:00 PM</option>
          </select>
        </div>
      </div>
      <div class="flex justify-between">
        <button class="text-sm text-green-400 mt-3" @click="addMoreBookingDay">
          Extend a day
        </button>
        <button v-if="bookingDays.length > 1" class="text-sm text-green-400 mt-3" @click="removeLastDay">
          Remove
        </button>
      </div>
      <!-- bill data -->
      <div v-show="showBill" class="w-full mt-3">
        <p class="font-semibold mb-1">Price</p>
        <p class="flex items-center justify-between w-full text-gray-600">
          <span>€75.00 x 5 hours</span>
          <span>€375.00</span>
        </p>
        <p class="flex items-center justify-between w-full text-gray-600">
          <span>Cleaning</span>
          <span>€30.00</span>
        </p>
        <p class="flex items-center justify-between w-full text-gray-600">
          <span>Processing</span>
          <span>€38.48</span>
        </p>
        <hr class="my-3" />
        <p class="text-lg font-semibold flex items-center justify-between w-full -mt-1">
          <span>Total</span>
          <span> €443.48 </span>
        </p>
      </div>
      <button :disabled="!showBill"
        class="mt-3 w-full bg-red-500 hover:bg-red-600 p-3 rounded-md text-white disabled:bg-red-400 disabled:cursor-not-allowed"
        @click="bookspace">
        Book Now
      </button>
      <div>
        <p class="mt-4 flex items-center font-bold">
          <img width="12px" height="12px" class="mr-2" :src="lightIcon" alt="shelid" />
          Instant Book
        </p>
        <p class="text-sm text-gray-500 mt-2">
          Your booking will be instantly confirmed and you can cancel for free
          within 24 hours.
        </p>
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
      lightIcon: require('@/assets/icons/lightningbolt.svg'),
      showBill: false,
      bookingDays: [
        {
          id: 1,
          start_date: '',
          start_time: '',
          end_time: '',
        },
      ],
    }
  },
  watch: {
    bookingDays: {
      handler(updatedData) {
        // eslint-disable-next-line array-callback-return
        updatedData.map((eachDayObj) => {
          const isDataEntered = Object.values(eachDayObj).every((val) =>
            Boolean(val)
          )
          if (isDataEntered) {
            this.showBill = true
            // todo fetch/update bill data
          } else {
            this.showBill = false
          }
        })
      },
      deep: true,
    },
  },
  methods: {
    addMoreBookingDay() {
      // todo: check if last day is completed before added new one
      const lastAddedDay = this.bookingDays[this.bookingDays.length - 1]
      this.bookingDays = [
        ...this.bookingDays,
        {
          id: lastAddedDay.id + 1,
          start_date: lastAddedDay.start_date,
          start_time: lastAddedDay.start_time,
          end_time: lastAddedDay.end_time,
        },
      ]
    },
    removeLastDay() {
      this.bookingDays.pop()
    },
    async bookspace() {
      try {
        const count = await this.$strapi.$http.$get('orders/count')
        console.log('count', count)
        const data = {
          order_number: `order-sq-${count + 1}`,
          date: '10/12/2022',
          start_time: '12:00',
          end_time: '17:00',
          amount: 443.48,
          payment_status: 'pending', // pending, paid,cancelled,declined,refunded,disputed
          booking_status: 'pending', // pending, confirmed, declined, cancelled
          type: 'space', // space,event,appointment,inventory
          space: '6370249df1c0390016f7a897', // space id
          details: {
            duration: '5 hours',
            price: 375,
            cleaningFee: 30,
            processingFee: 34.48
          },
          provider: '6293b95e175ce70016d14cf7',
          payout: {
            destination: 'acct_1MBkI4RipgvW3Pnk' // this is coming dynamicly from the provider data 
          }
        }
        console.log('data,', data)
        const order = await this.$strapi.create('orders', data)
        // update store with order data for later use and save in the local storage incase of refresh
        this.$store.commit('SET_ORDER', order)
        this.$router.push('/checkout')
        console.log('order', order)
      } catch (error) {
        console.log('error', error)
      }
    }
  },
}
</script>

<style>
.book-space-form .mx-datepicker {
  width: 100%;
}

.book-space-form .book-space-calendar-input {
  margin-top: 15px;
  padding: 10px;
  font-size: 18px;
  border: 1px solid rgb(202, 202, 202);
  border-radius: 5px;
  width: 100%;
}

.book-space-form .mx-icon-calendar,
.book-space-form .mx-icon-clear {
  right: 10px;
  top: 40px;
}
</style>

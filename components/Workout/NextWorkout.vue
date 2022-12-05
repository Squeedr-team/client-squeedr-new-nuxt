<template>
  <div>
    <div class='bg-white rounded-2xl shadow-md block w-full'>
      <div class='flex flex-wrap'>
        <div class='w-full md:w-1/2 xl:w-full mb-5 p-3'>
          <date-picker v-model='date' :open='true' style='width: 100%' :inline='true' class='own-picker'/>
        </div>
        <div class='w-full md:w-1/2 xl:w-full lg:border-t sm:border-t-0 border-t py-3 md:px-8 md:pt-0 px-5'>
          <div class='my-3'>Next week plan</div>
          <div v-for='(i,idx) in 3' :key='idx' class='py-3'>
            <div class='flex items-center'>
              <div
                class='mr-3 rounded-2xl flex flex-col justify-center items-center md:w-16 md:h-16 w-14 h-14 bg-primary-100'
              >
                <p class='xl:text-2xl md:text-lg text-md text-primary-900 mb-0'>{{ $moment().format('DD')
                  }}
                </p>
              </div>
              <div>
                <h4 class='lg:text-lg sm:text-md text-sm pb-2'><a >Cycling Routine</a></h4>
                <div class='statusTxt lg:text-md sm:text-sm text-xs'>
        <span class='text-dustTxtColor capitalize'>
          20km target distances
        </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'NextWorkout',
  components: { DatePicker },
  props: {
    sectionData: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      date: new Date()
    }
  }
}
</script>

<style scoped>

</style>

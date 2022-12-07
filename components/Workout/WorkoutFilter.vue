<template>
  <div class='bg-white rounded-2xl p-5 lg:p-8 shadow-md'>
    <div class='flex items-center mb-3 flex-wrap gap-5 justify-between'>
      <div>
        <h6 class='text-lg mb-2 font-semibold'>{{ sectionData.title }}</h6>
        <p class='text-sm text-darkDust'>{{ sectionData.description }}</p>
      </div>
      <div class='flex items-center flex-wrap gap-y-2 w-full sm:w-auto'>
        <div class='flex bg-secondary-100 p-1 rounded-2xl sm:mr-5 mr-0 w-full sm:w-auto '>
          <button
            v-for='(item,idx) in sectionData.filterItems' :key='idx'
            class='xl:px-5 px-3 xl:py-3 py-2 rounded-2xl xl:font-semibold text-sm xl:text-base'
            :class="filter===item.value?'bg-white text-primary-900':'text-secondary'"
            @click='filter===item.value?filter="":filter=item.value'
          >
            {{ item.name }}
          </button>
        </div>
        <button
          class='xl:px-5 px-4 xl:py-4 py-3 rounded-2xl text-white bg-primary hover:bg-primary-700 flex items-center'>
          <font-awesome-icon icon='fa-solid fa-sliders' class='md:text-xl'></font-awesome-icon>
          <span class='ml-2 font-semibold'>Filter</span>
        </button>
      </div>

    </div>
    <div>
      <div v-for='(workout,idx) in filteredWorkout' :key='idx'>
        <workout-item :workout='workout' />
      </div>
    </div>

  </div>
</template>

<script>
import WorkoutItem from './WorkoutItem'

export default {
  name: 'WorkoutFilter',
  components: { WorkoutItem },
  props: {
    workouts: {
      type: Array,
      default: () => []
    },
    sectionData: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      filter: 'all'
    }
  },
  computed: {
    filteredWorkout() {
      const arr = this.workouts
      if (this.filter === 'finished' || this.filter === 'unfinished') {
        return arr.filter(item => item.status === this.filter)
      }
      return arr
    }
  }
}
</script>

<style scoped>

</style>

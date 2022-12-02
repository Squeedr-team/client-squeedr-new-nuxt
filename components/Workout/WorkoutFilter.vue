<template>
  <div class='bg-white rounded-2xl p-5 shadow-md'>
    <div class='flex items-center my-3 flex-wrap gap-5'>
      <div>
        <h6 class='text-lg mb-2 font-semibold'>{{ sectionData.title }}</h6>
        <p class='text-sm text-darkDust'>{{ sectionData.description }}</p>
      </div>
      <div class='flex bg-secondary-100 p-1 rounded-2xl'>
        <button
          v-for='(item,idx) in sectionData.filterItems' :key='idx'
          class='md:px-5 px-3 md:py-3 py-1 rounded-2xl font-semibold'
          :class="filter===item.value?'bg-white text-primary-900':'text-secondary'"
          @click='filter===item.value?filter="":filter=item.value'
        >
          {{ item.name }}
        </button>
      </div>
      <button
        class='md:px-5 px-3 md:py-4 py-2 rounded-2xl text-white bg-primary hover:bg-primary-700 flex items-center'>
        <font-awesome-icon icon='fa-solid fa-sliders' class='md:text-xl'></font-awesome-icon>
        <span class='ml-2 font-semibold'>Filter</span>
      </button>
    </div>
    <div>
      <div v-for='(workout,idx) in workouts' :key='idx'>
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
  }
}
</script>

<style scoped>

</style>

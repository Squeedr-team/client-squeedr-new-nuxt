<template>
  <div class="bg-white rounded-lg p-5 lg:p-8 ">
    <div class="add-class absolute bottom-8 lg:bottom-8 right-6 lg:right-12">
      <button
        class="text-base bg-primary text-white rounded-full w-[50px] h-[50px] hover:bg-gray-100 hover:text-primary"
      >
        <font-awesome-icon
          icon="fa-solid fa-plus"
          class="text-3xl"
        ></font-awesome-icon>
      </button>
    </div>
    <div class="flex items-center mb-3 flex-wrap gap-5 justify-between">
      <div class="flex items-center flex-wrap gap-y-2 w-full sm:w-auto">
        <div
          class="flex items-center bg-secondary-100 space-x-4 px-4 py-2 rounded-xl"
        >
          <button class="rounded-2xl text-primary flex items-center">
            <font-awesome-icon
              icon="fa-solid fa-sliders"
              class="md:text-xl"
            ></font-awesome-icon>
            <span class="ml-2 font-semibold">Filter</span>
          </button>
          <button
            v-for="(item, idx) in sectionData.filterItems"
            :key="idx"
            class="rounded-full xl:font-semibold text-sm xl:text-base px-4 py-2"
            :class="
              filter === item.value
                ? 'bg-white text-primary-900'
                : 'text-secondary'
            "
            @click="
              filter === item.value ? (filter = '') : (filter = item.value)
            "
          >
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <div v-for="(workout, idx) in filteredWorkout" :key="idx">
        <workout-item :workout="workout" />
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
      default: () => [],
    },
    sectionData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      filter: 'all',
    }
  },
  computed: {
    filteredWorkout() {
      const arr = this.workouts
      if (this.filter === 'finished' || this.filter === 'unfinished') {
        return arr.filter((item) => item.status === this.filter)
      }
      return arr
    },
  },
}
</script>

<style scoped></style>

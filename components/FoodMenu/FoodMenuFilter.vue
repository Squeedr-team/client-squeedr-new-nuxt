<template>
  <div v-if='sectionData'>

    <div class='flex items-center mb-3 flex-wrap gap-5 justify-between'>
      <div>
        <h6 class='text-lg mb-2 font-semibold'>{{ sectionData.title }}</h6>
        <p class='text-darkDust'>{{ sectionData.description }}</p>
      </div>
      <div class='flex flex-wrap gap-y-4 gap-x-4 items-center'>
        <form class='sm:w-80 w-full'>
          <div class='relative'>
            <input
              id='search' type='search'
              class='block w-full lg:p-4 py-2 px-3 pr-12 text-sm text-dustTxtColor focus:border-primary focus:outline-none border rounded-2xl'
              placeholder='Search' required>
            <button
              class='absolute inset-y-0  rounded-2xl right-0 w-14 lg:w-16 text-white bg-primary hover:bg-primary-700'>
              <font-awesome-icon icon='fa-solid fa-search' class='lg:text-2xl font-bold'></font-awesome-icon>
            </button>
          </div>
        </form>
        <button
          class='lg:px-6 px-5 lg:py-4 py-3 rounded-2xl text-white bg-primary hover:bg-primary-700 flex items-center'>
          <font-awesome-icon icon='fa-solid fa-sliders' class='lg:text-xl'></font-awesome-icon>
          <span class='ml-2 font-semibold text-sm lg:text-base'>Filter</span>
        </button>
      </div>
    </div>
    <div class='flex flex-wrap gap-x-5 gap-y-2 mt-7'>
      <button
        v-for='(item,idx) in sectionData.filterItems' :key='idx'
        class='lg:px-5 px-4 lg:py-4 py-3 rounded-2xl text-sm sm:text-base'
        :class="filter.includes(item.value)?'bg-warning hover:bg-warning-700 text-black':'bg-warning-100 text-warning hover:bg-warning hover:text-white'"
        @click='filter.includes(item.value)?filter.splice(idx,1):filter.push(item.value)'
      >
        {{ item.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuFilter',
  props: {
    sectionData: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      filter: ['recommend']
    }
  }
}
</script>

<style scoped>

</style>

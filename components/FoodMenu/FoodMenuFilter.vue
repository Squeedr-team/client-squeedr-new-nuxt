<template>
  <div v-if='sectionData'>


    <div class='flex items-center my-3 flex-wrap gap-5'>
      <div>
        <h6 class='text-lg mb-2 font-semibold'>{{ sectionData.title }}</h6>
        <p class='text-sm text-darkDust'>{{ sectionData.description }}</p>
      </div>
      <form class='sm:mr-5 w-full max-w-sm'>
        <div class='relative'>
          <input
            id='search' type='search'
            class='block w-full md:p-4 py-2 px-3 pr-12 text-sm text-dustTxtColor focus:border-primary focus:outline-none border rounded-2xl'
            placeholder='Search' required>
          <button class='absolute inset-y-0  rounded-2xl right-0 w-12 md:w-16 text-white bg-primary hover:bg-primary-700'>
            <font-awesome-icon icon='fa-solid fa-search' class='md:text-2xl'></font-awesome-icon>
          </button>
        </div>
      </form>
      <button class='md:px-5 px-3 md:py-4 py-2 rounded-2xl text-white bg-primary hover:bg-primary-700 flex items-center'>
        <font-awesome-icon icon="fa-solid fa-sliders" class="md:text-xl"></font-awesome-icon>
        <span class="ml-2 font-semibold">Filter</span>
      </button>
    </div>
    <div class="flex flex-wrap gap-4">
      <button
        v-for="(item,idx) in sectionData.filterItems" :key="idx"
        class='md:px-5 px-3 md:py-4 py-2 rounded-2xl'
        :class="filter.includes(item.value)?'bg-warning hover:bg-warning-700 text-black':'bg-warning-100 text-warning hover:bg-warning hover:text-white'"
        @click="filter.includes(item.value)?filter.splice(idx,1):filter.push(item.value)"
      >
        {{item.name}}
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

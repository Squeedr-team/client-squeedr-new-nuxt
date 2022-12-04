<template>
  <div class="block">
    <div v-if="sectionData" class="bg-white p-5 xl:p-8 rounded-2xl shadow-sm">
      <div class='flex items-center justify-between flex-wrap gap-5 mb-8'>
      <div>
        <h6 class='text-lg mb-2 font-semibold'>{{ sectionData.title }}</h6>
        <p class='text-sm text-darkDust'>{{ sectionData.description }}</p>
      </div>
      <button class='p-4 rounded-2xl text-white bg-primary hover:bg-primary-700 flex items-center'>
        <font-awesome-icon icon="fa-solid fa-plus" class="text-2xl"></font-awesome-icon>
      </button>
    </div>
    <div v-if="sectionData.item">
      <div class="flex">
        <img
          :src='sectionData.item.img'
          class='rounded-xl bg-gray-200 w-20 h-20'
          alt='user'/>
        <div class="ml-2 mb-2">
          <h6 class='text-md mb-2 font-semibold'>{{ sectionData.item.name }}</h6>
          <div v-if="sectionData.item.author" class="text-sm text-dustTxtColor">by {{sectionData.item.author.name}}
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center py-1">
          <div class="w-6">
            <font-awesome-icon icon="fa-regular fa-clock" class="text-darkDust text-xl"/>
          </div>
          <span class="text-sm mx-2">{{sectionData.item.cookTime}}</span>
        </div>
        <div class="flex items-center py-1">
          <div class="w-6">
            <font-awesome-icon icon="fa-regular fa-calendar" class="text-darkDust text-xl"/>
          </div>
          <span class="text-sm  mx-2">{{sectionData.item.schedule}}</span>
        </div>
        <div class="flex items-center py-1">
          <div class="w-6">
            <font-awesome-icon icon="fa-solid fa-prescription-bottle" class="text-darkDust text-xl"/>
          </div>
          <span class="text-sm text-primary mx-2">{{sectionData.item.ingredients_count}} Ingredients</span>
        </div>
      </div>

    </div>
  </div>
  </div>

</template>

<script>
    export default {
        name: "DietMenu",
        props: {
            sectionData: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>

<style scoped>

</style>


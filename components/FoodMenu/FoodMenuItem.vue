<template>
  <div v-if='info' class='border-b'>
    <div class='lg:flex lg:flex-row flex-wrap block py-5 lg:gap-5'>
      <div class='lg:w-28 w-20 float-left mr-4 lg:mr-0'>
        <nuxt-link to='/'>
          <img
            :src='info.img'
            width='120px'
            class='rounded-xl bg-gray-200 w-full'
            alt='user' />
        </nuxt-link>
      </div>
      <div class='flex-1 mb-3'>
        <h6 class='text-md mb-2 font-semibold'>{{ info.name }}</h6>
        <p class='text-sm text-darkDust'>{{ info.description }}</p>
        <div v-if='info.author' class='flex items-center flex-wrap gap-5 mt-4'>
          <div class='flex items-center mr-auto'>
            <img
              :src='info.author.avatar'
              class='rounded-full bg-gray-200 w-8 h-8'
              alt='user' />
            <span class='text-sm ml-3'>{{ info.author.name }}</span>
          </div>
          <div class='flex flex-wrap gap-x-4 gap-y-2'>
            <div class='flex items-center'>
              <font-awesome-icon icon='fa-regular fa-clock' class='text-darkDust text-xl' />
              <span class='text-sm mx-2'>{{ info.cookTime }}</span>
            </div>
            <div class='flex items-center'>
              <font-awesome-icon icon='fa-solid fa-prescription-bottle' class='text-darkDust text-xl' />
              <span class='text-sm mx-2'>{{ info.ingredients_count }} Ingredients</span>
            </div>
            <div class='flex items-center'>
              <font-awesome-icon icon='fa-regular fa-star' class='text-warning text-xl' />
              <span class='text-sm mx-2'>{{ info.reviews_count }} Reviews</span>
            </div>
          </div>
        </div>
      </div>
      <div class='lg:text-right'>
        <button
          class='bg-primary-100 rounded-2xl text-sm md:p-3 p-2 text-sm hover:bg-primary hover:text-white whitespace-nowrap'>
          <font-awesome-icon icon='fa fa-plus'></font-awesome-icon>
          <span>Add Menu</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodMenuItem',
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>

</style>

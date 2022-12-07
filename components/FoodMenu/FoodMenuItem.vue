<template>
  <div v-if='info' class='border-b'>
    <div class='md:flex md:flex-row flex-wrap lg:flex-nowrap block py-5'>
      <div class='sm:float-none float-left sm:mr-0 mr-4 mb-3 sm:mb-0'>
        <nuxt-link to='/'>
          <img
            :src='info.img'
            class='rounded-2xl bg-gray-200 product-img'
            alt='user' />
        </nuxt-link>
      </div>
      <div class='lg:w-8/12 flex-1 mb-3 pl-4'>
        <h6 class='text-base font-semibold'>{{ info.name }}</h6>
        <p class='text-darkDust'>{{ info.description }}</p>
        <div v-if='info.author' class='flex items-center flex-wrap xl:gap-5 gap-3 mt-4'>
          <div class='flex items-center mr-auto'>
            <img
              :src='info.author.avatar'
              class='rounded-full bg-gray-200 w-7 h-7'
              alt='user' />
            <span class='text-sm ml-3'>{{ info.author.name }}</span>
          </div>
          <div class='flex flex-wrap gap-x-4 gap-y-1'>
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
      <div class='lg:ml-auto w-full lg:w-auto ml-0 2xl:ml-14 xl:ml-7'>
        <button
          class='bg-primary-100 rounded-2xl flex items-center xl:py-4 px-5 p-2 text-sm hover:bg-primary hover:text-white whitespace-nowrap'
          @click='addModal=true'>
          <font-awesome-icon icon='fa fa-plus' class='text-xl font-extrabold'></font-awesome-icon>
          <span class='text-sm ml-3'>Add Menu</span>
        </button>
      </div>
    </div>
    <Modal :show='addModal' @close='addModal=false'>
      <div class='flex justify-between border-b py-4 px-7'>
        <span class='font-semibold'>Diet Menus</span>
        <font-awesome-icon icon='fa fa-close' class='cursor-pointer' @click='addModal=false' />
      </div>
      <div class='p-6'>
        <tw-input label='Running' placeholder='Km' rounded class='mb-5'>
        </tw-input>
        <tw-input label='Running' placeholder='Km' rounded class='mb-5'>
        </tw-input>
        <tw-input label='Running' placeholder='Km' rounded class='mb-5'>
        </tw-input>
        <button class='bg-primary py-2 px-4 sm:py-4 sm:px-5 rounded-2xl font-semibold text-white'>
          Submit
        </button>
      </div>
    </Modal>
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
  },
  data() {
    return {
      addModal: false
    }
  }
}
</script>

<style scoped lang='scss'>
.product-img {
  width: 120px;
  @media (max-width: 425px) {
    width: 80px !important;
  }
}
</style>

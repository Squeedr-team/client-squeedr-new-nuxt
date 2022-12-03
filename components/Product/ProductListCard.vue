<template>
  <div v-if='info' class='p-5 rounded-2xl bg-white shadow-sm product-card 2xl:p-8 2xl:flex 2xl:items-start 2xl:gap-7'>
    <div class='img-box mb-5 2xl:mb-0 2xl:w-5/12'>
      <img :src="require('~/assets/images/product1.jpg')" class='w-full' alt='' />
    </div>
    <div class='2xl:w-7/12'>
      <NuxtLink to='/product/2'>
        <h6 class='text-lg mb-2 font-semibold'>{{ info.name }}</h6>
      </NuxtLink>
      <Rating :rating='info.review' />
      <div class='flex justify-between'>
        <p class='text-secondary-600'>({{ info.reviews_count }} reviews) / <u>
          <nuxt-link to='/' class='text-secondary-400'>Write a review?</nuxt-link>
        </u></p>
        <h5 class='text-primary text-2xl font-bold'>${{ info.price.toFixed(2) }}</h5>
      </div>

      <p class='text-sm text-secondary-600 py-1'>Availability:
        <span
          class='text-xs text-secondary-400'>
          In stock
          <font-awesome-icon icon='fa fa-circle-check' class='text-primary'>{{ info.in_stock }}</font-awesome-icon>
        </span>
      </p>
      <p class='text-sm text-secondary-600 py-1'>Product code: <span class='text-xs text-secondary-400'>{{ info.code
        }}</span></p>
      <p class='text-sm text-secondary-600 py-1'>Brand: <span class='text-xs text-secondary-400'>{{ info.brand }}</span>
      </p>
      <p class='text-sm text-secondary-600 pt-2'>{{ info.description }}</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ProductListCard',
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped lang='scss'>
.product-card {
  .img-box {
    overflow: hidden;

    img {
      transition: 0.3s ease-in-out;
      transition-property: transform, filter;
    }

    &:hover {
      img {
        transform: scale(1.1);
        filter: grayscale(0.5);
      }
    }
  }
}
</style>

<template>
  <div v-if='info' class='p-5 rounded-2xl bg-white shadow-md product-card'>
    <div class='img-box mb-5'>
      <nuxt-img provider='cloudinary' :src='info.img' class='w-full'/>
    </div>
    <NuxtLink to='/product/2'>
    <h6 class='text-lg mb-2 font-semibold'>{{ info.name }}</h6>
    </NuxtLink>
    <Rating :rating='info.review'/>
    <div class='flex justify-between'>
      <p class='text-darkDust'>({{ info.reviews_count }} reviews) / <u><nuxt-link to='/'>Write a review?</nuxt-link></u></p>
      <h5 class='text-primary text-2xl font-bold'>${{info.price}}</h5>
    </div>

    <p class='text-sm text-darkDust py-1'>Availability: In stock {{ info.in_stock }}</p>
    <p class='text-sm text-darkDust py-1'>Product code: {{ info.code }}</p>
    <p class='text-sm text-darkDust py-1'>Brand: {{ info.brand }}</p>
    <p class='text-sm text-darkDust pt-2'>{{ info.description }}</p>
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

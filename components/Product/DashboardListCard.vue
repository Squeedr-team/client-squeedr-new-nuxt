<template>
  <div
    v-if="info"
    class="rounded-xl overflow-hidden bg-white shadow-sm product-card sm:flex 2xl:flex-row xl:flex-col 2xl:flex 2xl:items-start 2xl:gap-7 sm:gap-7 xl:gap-0"
  >
    <div class="img-box w-full h-[200px] overflow-hidden">
      <img
        :src="require('~/assets/images/product1.jpg')"
        class="w-full h-full object-cover"
        alt=""
      />
    </div>
    <NuxtLink to="/product/2">
      <div class="p-6">
        <h6 class="text-base mb-2 font-semibold">{{ info.name }}</h6>
        <p class="text-sm text-secondary-600 py-1">
          Availability:
          <span class="text-xs text-secondary-400">
            In stock
            <font-awesome-icon icon="fa fa-circle-check" class="text-primary">{{
              info.in_stock
            }}</font-awesome-icon>
          </span>
        </p>
        <p class="text-sm text-secondary-600 py-1">
          Product code:
          <span class="text-xs text-secondary-400">{{ info.code }}</span>
        </p>
        <p class="text-sm text-secondary-600 py-1">
          Brand:
          <span class="text-xs text-secondary-400">{{ info.brand }}</span>
        </p>
        <!-- <p class="text-sm text-secondary-600 pt-2">{{ info.description }}</p> -->
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'DashboardProductListCard',
  props: {
    info: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style scoped lang="scss">
.product-card {
  .img-box {
    overflow: hidden;

    img {
      transition: 0.3s ease-in-out;
      transition-property: transform, filter;
    }

    &:hover {
      img {
        transform: scale(1.4);
        filter: grayscale(0.5);
      }
    }
  }
}
</style>

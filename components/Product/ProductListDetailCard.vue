<template>
  <div v-if='info' class='p-5 xl:p-8 rounded-2xl bg-white shadow-md product-card'>
    <div class='grid md:grid-cols-12 grid-cols-1 md:gap-7'>
      <div class='2xl:col-span-3 col-span-5 mb-5'>
        <div>
          <div class='mb-2 overflow-hidden flex'>

            <template v-for='(img,idx) in info.images'>
              <transition :key='idx' name='fade'>
                <img
                  v-if='images===idx'
                  :src='img.url'
                  class='w-full'
                  @click='images=img.url' />
              </transition>
            </template>

          </div>
          <div class='w-full pt-2'>
            <Carousel :settings='settings'>
              <div v-for='(img,idx) in info.thumbs' :key='idx'>
                <img
                  :src='img.url'
                  class='cursor-pointer'
                  @click='images=idx' />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <div class='2xl:col-span-9 col-span-7'>
        <h6 class='text-lg mb-2 font-semibold'>{{ info.name }}</h6>
        <Rating :rating='info.review' />
        <p class='text-secondary-500'>({{ info.reviews_count }} reviews) / <u>
          <nuxt-link to='/' class='text-secondary-400'>Write a review?</nuxt-link>
        </u>
        </p>
        <h5 class='text-primary text-2xl font-bold mt-3'>${{ info.price.toFixed(2) }}</h5>

        <p class='text-sm text-secondary-500 py-1'>Availability:
          <span class='text-secondary-400'>In stock {{ info.in_stock }}</span>
        </p>
        <p class='text-sm text-secondary-500 py-1'>Product code: <span class='text-secondary-400'>{{ info.code }}</span>
        </p>
        <p class='text-sm text-secondary-500 py-1'>Brand: <span class='text-secondary-400'>{{ info.brand }}</span></p>
        <p class='text-sm text-secondary-500 py-1'>
          Product tags:
          <button
            v-for='(tag,idx) in info.tags' :key='idx'
            class='bg-success-100 text-success mr-1 rounded-full px-3 py-1 font-semibold'>
            {{ tag }}
          </button>
        </p>
        <p class='text-sm text-secondary-500 pt-3'>{{ info.description }}</p>
        <div class='text-secondary text-sm font-semibold mt-3'>Select Size</div>
        <div class='my-2'>
          <button-group v-model='size' mandatory>
            <button
              v-for='(siz,idx) in info.sizes'
              :key='idx'
              type='button'
              :value='siz'
              class='py-2 px-4 border border-primary hover:bg-primary text-sm hover:text-white'
              :class="{'bg-primary':size === siz}"
            >
              {{ siz }}
            </button>
          </button-group>
        </div>
        <div class='my-4'>
          <input
            v-model='count'
            type='number'
            class='border border-secondary-100 focus:outline-none focus:border-primary p-2 md:p-4 rounded-2xl w-20 xl:w-32 text-sm text-secondary'>
        </div>
        <button class='bg-primary hover:bg-primary-700 py-3 text-lg rounded-2xl px-5 font-bold text-white'>
          <font-awesome-icon icon='fa fa-shopping-basket ' />
          Add to cart
        </button>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'ProductListDetailCard',
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      size: '',
      count: 1,
      images: 0,
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: false,
              dots: false
            }
          }
        ]
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

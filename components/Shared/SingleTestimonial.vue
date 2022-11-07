<template>
  <div class="single-testimonial">
    <div class="by flex gap-4 items-center">
      <img
        :src="singleTestimonial.avatar"
        :alt="singleTestimonial.name + 'profile image'"
        class="w-24 h-24 rounded-full"
      />
      <div>
        <h6 class="text-xl capitalize">{{ singleTestimonial.name }}</h6>
        <p class="text-sm capitalize">{{ singleTestimonial.jobTitle }}</p>
      </div>
    </div>
    <div class="w-[90%] mx-auto my-8" id="single-testimonial__text">
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 101.91 77.19"
      >
        <g id="image">
          <g>
            <path
              class="cls-1"
              d="M44.7,27.82c-.14-5.69-.65-7.15-.65-7.15C42.92,9.49,33.6,0,22.13,0,9.91,0,0,9.91,0,22.13s9.91,22.13,22.13,22.13c2.47,0,4.83-.41,7.05-1.15-1.26,21.39-18.48,33.04-18.48,33.04l2.22,1.04c26.96-14.78,32.11-36.06,31.78-49.37Z"
            />
            <path
              class="cls-1"
              d="M101.9,27.82c-.14-5.69-.65-7.15-.65-7.15-1.13-11.17-10.45-20.66-21.92-20.66-12.22,0-22.13,9.91-22.13,22.13s9.91,22.13,22.13,22.13c2.47,0,4.83-.41,7.05-1.15-1.26,21.39-18.48,33.04-18.48,33.04l2.22,1.04c26.96-14.78,32.11-36.06,31.78-49.37Z"
            />
          </g>
        </g>
      </svg>
      <p class="text-xl">{{ singleTestimonial.text }}</p>
      <svg
        id="Layer_2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 101.91 77.19"
      >
        <g id="image">
          <g>
            <path
              class="cls-1"
              d="M44.7,27.82c-.14-5.69-.65-7.15-.65-7.15C42.92,9.49,33.6,0,22.13,0,9.91,0,0,9.91,0,22.13s9.91,22.13,22.13,22.13c2.47,0,4.83-.41,7.05-1.15-1.26,21.39-18.48,33.04-18.48,33.04l2.22,1.04c26.96-14.78,32.11-36.06,31.78-49.37Z"
            />
            <path
              class="cls-1"
              d="M101.9,27.82c-.14-5.69-.65-7.15-.65-7.15-1.13-11.17-10.45-20.66-21.92-20.66-12.22,0-22.13,9.91-22.13,22.13s9.91,22.13,22.13,22.13c2.47,0,4.83-.41,7.05-1.15-1.26,21.39-18.48,33.04-18.48,33.04l2.22,1.04c26.96-14.78,32.11-36.06,31.78-49.37Z"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    singleTestimonial: {
      type: Object,
      require: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style>
</style>
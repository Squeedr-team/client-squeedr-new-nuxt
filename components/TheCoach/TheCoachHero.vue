<template>
  <div class="coach-hero">
    <div class="container">
      <div
        class="
          coach-hero__wraper
          flex flex-col
          lg:flex-row
          py-16
          lg:items-center lg:justify-between
          gap-8
          lg:min-h-[80%]
        "
      >
        <div class="coach-hero__wraper-left lg:w-[50%]">
          <h1 class="coach-name capitalize font-bold text-2xl mb-4">
            {{ heroData.firstName }} {{ heroData.lastName }}
          </h1>
          <p class="text-xs leading-5 mb-6">{{ heroData.bio }}</p>

          <ul class="flex flex-wrap items-center gap-2 mb-6">
            <li
              v-for="(f, i) of heroData.figuers"
              :key="i"
              class="
                border
                border-profile_light_1
                text-center
                rounded
                p-2
                text-xs
                min-w-[48%]
                md:min-w-[24%]
                lg:min-w-[100px]
                bg-profile_dark_1
              "
            >
              <p class="mb-1 font-bold">{{ f.figuer }}</p>
              <p>{{ f.text }}</p>
            </li>
          </ul>
          <div class="contact-coach">
            <button
              class="bg-profile_light_1 text-xs p-3 px-6 font-bold rounded"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div class="coach-hero__wraper-right lg:w-[40%]">
          <video :src="heroData.heroVideo" class="rounded"></video>
          <div class="coach-hero-video-overlay">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    heroData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style>
</style>
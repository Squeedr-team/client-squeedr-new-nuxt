<template>
  <div class="coach-gallery bg-profile_dark_2 py-16">
    <div class="container">
      <h1 class="capitalize font-bold text-2xl mb-4">Gallery</h1>
      <div class="lg:flex lg:gap-2 my-8">
        <div
          class="
            coach-gallery__feature
            lg:w-1/3
            bg-red-500
            rounded-md
            overflow-hidden
          "
        >
          <img
            v-if="(featured.type = 'image')"
            :src="featured.file"
            alt=""
            class="h-full w-full object-cover object-left"
          />
        </div>
        <ul class="gallery__not_feature lg:w-2/3 flex flex-wrap gap-2 mt-4 lg:mt-0">
          <li
            v-for="(g, i) in gallery"
            :key="i"
            class="w-[48%] rounded-md overflow-hidden"
          >
            <div v-if="g.type == 'image'">
              <img :src="g.file" alt="" />
            </div>
            <div v-if="g.type == 'video'" class="relative">
              <video :src="g.file"></video>
              <div class="video-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    galleryData: {
      type: Array,
      require: true,
      default() {
        return []
      },
    },
  },
  computed: {
    featured() {
      return this.galleryData.filter((x) => x.featured === true)[0]
    },
    gallery() {
      return this.galleryData.filter((x) => x.featured !== true).slice(0, 4)
    },
  },
  mounted() {
    console.log(this.gallery)
  },
}
</script>

<style>
</style>
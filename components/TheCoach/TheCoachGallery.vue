<template>
  <div class="coach-gallery bg-profile_dark_2 py-16">
    <div class="container relative">
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
        <ul
          class="
            gallery__not_feature
            lg:w-2/3
            flex flex-wrap
            gap-2
            mt-4
            lg:mt-0
          "
        >
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
      <button
        id="coach_gallery__showmore"
        @click="showMultiple(0)"
        class="
          gallery-btn
          absolute
          bottom-4
          right-16
          border-2
          border-profile_light_1
          px-6
          py-2
          rounded
          text-lg
          text-profile_light_1
          bg-white
          font-bold
        "
      >
        Show more
      </button>
    </div>
    <client-only>
      <vue-easy-lightbox
        escDisabled
        moveDisabled
        :visible="visible"
        :imgs="lightbox"
        :index="index"
        @hide="handleHide"
      ></vue-easy-lightbox>
    </client-only>
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: {
    VueEasyLightbox,
  },
  props: {
    galleryData: {
      type: Array,
      require: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      visible: false,
      index: 0, // default: 0
    }
  },
  computed: {
    featured() {
      return this.galleryData.filter((x) => x.featured === true)[0]
    },
    gallery() {
      return this.galleryData.filter((x) => x.featured !== true).slice(0, 4)
    },
    lightbox() {
      return this.galleryData
        .filter((x) => x.type === 'image')
        .map((x) => x.file)
    },
  },
  mounted() {
    console.log('lightbox', this.lightbox)
  },
  methods: {
    showMultiple(indx) {
      this.index = indx // index of imgList
      this.show()
    },
    show() {
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
}
</script>

<style>
</style>
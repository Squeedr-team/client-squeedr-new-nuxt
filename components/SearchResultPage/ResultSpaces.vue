<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <div>
    <p class="text-md text-gray-600 mb-2 mt-2">
      228 yoga studio spaces near Paris, France
    </p>
    <div class="space-card grid grid-cols-2 gap-3">
      <div v-for="space in results" :key="space.id" class="mb-5">
        <space-card :spaceData="space" />
      </div>
    </div>
    <nav class="flex py-5" aria-label="Page navigation example">
      <ul class="inline-flex mx-auto -space-x-px">
        <li>
          <a
            href="#"
            class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-3xl border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            &#60; &#60;
          </a>
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >1</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >2</a
          >
        </li>
        <li>
          <a
            href="#"
            aria-current="page"
            class="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >3</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >4</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >5</a
          >
        </li>
        <li>
          <a
            href="#"
            class="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-3xl border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            &#62; &#62;
          </a>
        </li>
      </ul>
    </nav>
    <div class="py-5">
      <p class="text-[#52a2b1]">
        <a href="" class="text-[#52a2b1] hover:text-[#39737e]">
          See all event spaces in Paris</a
        >
      </p>
      <p>
        Peerspace is also live in
        <span class="text-[#52a2b1]"
          >San Francisco, Silicon Valley, Los Angeles</span
        >, and
      </p>
      <span class="text-[#52a2b1] font-bold">40 more cities</span>
    </div>
    <div class="pb-16">
      <p>
        <a href="" class="text-[#52a2b1] hover:text-[#39737e]">
          Join our email list
        </a>
      </p>
      <p>and be the first to know when we add new spaces.</p>
    </div>
  </div>
</template>

<script>
import SpaceCard from '../Shared/SpaceCard.vue'

export default {
  components: { SpaceCard },
  props: {
    results: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      bookmarked: false,
      membersIcons: require('@/assets/icons/people-icon.svg'),
      heartIcon: require('@/assets/icons/heart.svg'),
      heartFilledIcon: require('@/assets/icons/heart-filled.svg'),
      settings: {
        adaptiveHeight: true,
        dots: true,
        dotsClass: 'slick-dots space-custom-dots',
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  },
}
</script>

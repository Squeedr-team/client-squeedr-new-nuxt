<template>
  <div>
    <button
      type="button"
      class="flex items-center justify-between w-full py-5 font-medium text-left border-b border-gray-200"
      :aria-expanded="expand"
      @click="expand = !expand"
    >
      <p class="flex items-center">
        <img class="mr-4" :src="panelData.icon" />
        <span class="text-lg font-semibold text-gray-600">
          {{ panelData.title }}
        </span>
      </p>
      <svg
        class="w-6 h-6 shrink-0"
        :class="expand ? 'rotate-180 shrink-0' : ''"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      class="transition-all duration-300"
      :class="expand ? 'opacity-100 h-full' : 'opacity-0 h-0 hidden'"
    >
      <div class="py-5 border-gray-200">
        <p class="mb-2">Enhanced cleaning measures:</p>
        <ul class="pl-5 text-gray-500 list-disc">
          <li>
            The space is cleaned and disinfected in accordance with guidelines
            from local health authorities
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    panelData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      icon: require('@/assets/icons/cleaning.svg'),
      expand: false,
    }
  },
}
</script>

<style></style>

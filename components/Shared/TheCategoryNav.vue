<template>
  <nav
    id="appCategoryNav"
    class="bg-paraGreyColor bg-opacity-50 py-4 absolute w-full bottom-0"
  >
    <div class="container">
      <div class="flex items-center gap-2 lg:gap-4">
        <button
          v-for="nav in navs"
          :key="nav.id"
          class="
            text-sm
            md:text-md
            px-2
            py-2
            lg:px-6 lg:py-2
            rounded-full
            text-white
            capitalize
          "
          :class="{
            'bg-appLight': nav.active,
            'bg-darkPrimaryColor': !nav.active,
          }"
        >
          {{ nav.name }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          id: 1,
          name: 'spaces',
          active: true,
        },
        {
          id: 2,
          name: 'classes & appointments',
          active: false,
        },
        {
          id: 3,
          name: 'fitness coaches',
          active: false,
        },
      ],
    }
  },
}
</script>

<style>
</style>
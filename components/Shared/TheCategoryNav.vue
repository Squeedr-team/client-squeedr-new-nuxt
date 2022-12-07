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
            md:text-base
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
          @click="setActive(nav.id)"
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
          name: 'All',
          active: true,
        },
        {
          id: 10,
          name: 'spaces',
          active: false,
        },
        {
          id: 2,
          name: 'classes',
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
  methods: {
    setActive(id) {
      this.navs = this.navs.map((x) => {
        if (x.id === id) {
          this.$router.push({ name: 'index', query: { cate: x.name } })
          return {
            ...x,
            active: true,
          }
        } else {
          return { ...x, active: false }
        }
      })
    },
  },
}
</script>

<style>
</style>

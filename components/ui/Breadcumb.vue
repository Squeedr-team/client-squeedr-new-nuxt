<template>
  <div>
    <nav class='flex' aria-label='Breadcrumb'>
      <ol class='inline-flex items-center space-x-2 sm:space-x-3'>
        <template v-for='(route,idx) in routes'
        >
          <span v-if='idx!==0' :key="'s'+idx" class='text-3xl'>/</span>
          <li
            :key='idx'
            class='inline-flex items-center breadcrumb-item'>
            <nuxt-link
              :to='route.path'
              class='text-lg font-light text-primary hover:text-primary-700 cursor-pointer'>
              {{ route.name }}
            </nuxt-link>
          </li>

        </template>

      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcumb',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.breadcrumb-item .nuxt-link-exact-active {
  font-weight: 700;
  color: theme('colors.primary.700')
}
</style>

<template>
  <div>
    <nav class='flex' aria-label='Breadcrumb'>
      <ol class='inline-flex items-center space-x-1 md:space-x-3'>
        <li class='inline-flex items-center breadcrumb-item'>
          <nuxt-link
            to='/'
            class='text-lg font-light text-primary hover:text-primary-700 cursor-pointer'>
            Home
          </nuxt-link>
        </li>
        <span class='text-3xl'>/</span>
        <li class='inline-flex items-center breadcrumb-item'>

          <nuxt-link
            to='/product'
            class='text-lg font-light text-primary hover:text-primary-700 cursor-pointer'>
            Products
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Breadcumb'
}
</script>

<style>
.breadcrumb-item .nuxt-link-exact-active {
  font-weight: 700;
  color: theme('colors.primary.700')
}
</style>

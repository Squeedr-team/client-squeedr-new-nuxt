<template>
  <div>
    <Breadcumb
      class="sm:p-5 p-2"
      :routes="[
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Products', path: '/dashboard/products' },
        { name: 'Create Product', path: '/dashboard/products/create-product' },
      ]"
    />
    <div class="px-6">this is the create product page</div>
  </div>
</template>

<script>
export default {
  name: 'CreateProduct',
  layout: 'dashboardLayout',
}
</script>

<style lang="scss" scoped></style>

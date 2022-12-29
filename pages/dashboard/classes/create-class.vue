<template>
  <div>
    <Breadcumb
      class="sm:p-5 p-2"
      :routes="[
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Classes', path: '/dashboard/classes' },
        { name: 'Create Classes', path: '/dashboard/classes/create-class' },
      ]"
    />
  </div>
</template>

<script>
export default {
  name: 'DashboardCreateClasses',
  layout: 'dashboardLayout',
}
</script>

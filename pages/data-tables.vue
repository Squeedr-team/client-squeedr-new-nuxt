<template>
  <div>
    <div class='lg:p-3 p-0'>
      <Breadcumb
        class='sm:p-5 p-2'
        :routes='[
                 {name:"Table",path:"#"},
                 {name:"Datatable",path:"/data-tables"},
               ]'
      />
      <basic-data-table/>
      <basic-overflow-data-table class='mt-7'/>
      <profile-data-table class='mt-7'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTables',
  layout:'dashboardLayout'
}
</script>

<style scoped>

</style>

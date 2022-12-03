<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"Email",path:"#"},
                 {name:"Inbox",path:"/email/inbox"},
               ]'
    />
    <div class='bg-white rounded-2xl sm:m-5 m-3 p-3 sm:p-5'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Inbox'
}
</script>

<style scoped>

</style>

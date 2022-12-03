<template>
  <div>
    <Breadcumb
      class='sm:p-5 p-2'
      :routes='[
                 {name:"Email",path:"#"},
                 {name:"Inbox",path:"/email/inbox"},
               ]'
    />
  </div>
</template>

<script>
export default {
  name: 'Inbox'
}
</script>

<style scoped>

</style>

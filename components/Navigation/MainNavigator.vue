<template>
  <div class="bg-body_bg">
    <sidebar/>
    <div id="main">
      <slot/>
    </div>
  </div>
</template>

<script>
    import Sidebar from "./Sidebar";

    export default {
        name: "MainNavigator",
        components: {Sidebar}
    }
</script>

<style scoped>
  #main{
   margin-left: 345px;
    min-height: 100vh;
  }
</style>

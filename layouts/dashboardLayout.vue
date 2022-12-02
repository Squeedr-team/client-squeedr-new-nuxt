<template>
  <div>
    <main-navigator>
    <!--    <the-app-header />-->

      <Nuxt />
    </main-navigator>
    <!--    <the-app-footer />-->
  </div>
</template>


<script>
    import MainNavigator from "../components/Navigation/MainNavigator";

    export default {
        name: 'DashboardLayout',
        components: {MainNavigator},
    }
</script>


<template>
  <div>
    <main-navigator>
    <!--    <the-app-header />-->

      <Nuxt />
      <Chat/>
    </main-navigator>
    <!--    <the-app-footer />-->
  </div>
</template>


<script>
    import MainNavigator from "../components/Navigation/MainNavigator";
    import Chat from "../components/Utils/Chat";

    export default {
        name: 'DashboardLayout',
        components: {Chat, MainNavigator},
    }
</script>


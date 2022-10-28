<template>
  <div class="coach-upcoming-calsses">
    <the-classes-carousel :classesData="upcomingClasses" />
  </div>
</template>

<script>
export default {
  props: {
    upcomingClasses: {
      type: Array,
      require: true,
    },
  },
}
</script>

<style>
</style>
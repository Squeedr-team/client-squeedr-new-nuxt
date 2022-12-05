<template>
  <div class="py-5">
    <perfect-scrollbar>
      <div style="max-height: 500px" class='px-5 md:px-8'>
        <div v-for="(item,idx) in foodItems" :key="idx">
          <food-menu-item :info="item"/>
        </div>
      </div>
    </perfect-scrollbar>

  </div>
</template>

<script>
    import FoodMenuItem from "./FoodMenuItem";

    export default {
        name: 'MenuList',
        components: {FoodMenuItem},
        props: {
            foodItems: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>

</style>

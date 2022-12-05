<template>
<div class='bg-white rounded-2xl  shadow-sm'>
  <food-menu-filter :section-data='sectionData' class='p-5 md:p-8'/>
  <food-menu-list :food-items='foodItems'/>
</div>
</template>

<script>
export default {
  name: 'FoodPanel',
  props:{
    sectionData:{
      type:Object,
      default:()=>{}
    },
    foodItems:{
      type:Array,
      default:()=>[]
    }
  }
}
</script>

<style scoped>

</style>

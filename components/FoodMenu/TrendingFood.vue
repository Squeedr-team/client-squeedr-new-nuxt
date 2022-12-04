<template>
  <div class="block">
    <div v-if="sectionData" class="bg-white p-5 rounded-2xl shadow-sm">
      <div class='flex items-center justify-between flex-wrap gap-5 mb-8'>
        <div>
          <h6 class='text-lg mb-2 font-semibold'>{{ sectionData.title }}</h6>
          <p class='text-sm text-darkDust'>{{ sectionData.description }}</p>
        </div>
      </div>
      <div v-if="sectionData.items">
        <div v-for="(item,idx) in sectionData.items" :key="idx" class="flex justify-between border-b py-2">
          <div class="flex">
            <img
              :src='item.img'
              class='rounded-xl bg-gray-200 w-12 h-12'
              alt='user'/>
            <div class="ml-3">
              <h6 class='text-md mb-1 font-semibold'>{{item.name }}</h6>
              <p class='text-xs text-darkDust'>{{ item.description }}</p>
            </div>
          </div>

          <div class="ml-2">
            <font-awesome-icon icon="fa fa-caret-up" class="text-2xl text-primary"/>
            <h6 class='text-md mb-2 font-semibold -mt-2'>#{{item.rank }}</h6>
          </div>
        </div>
        <button class="w-full text-center text-primary mb-2 mt-4">View More</button>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "TrendingFood",
        props: {
            sectionData: {
                type: Object,
                default: () => {
                }
            }
        }
    }
</script>


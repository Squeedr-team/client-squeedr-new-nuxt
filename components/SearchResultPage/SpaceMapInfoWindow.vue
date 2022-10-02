<template>
  <div>
    <div class="max-w-sm relative">
      <div class="flex items-center w-full h-full">
        <img
          width="100%"
          height="100%"
          src="https://picsum.photos/80/80"
          class="rounded bg-gray-200"
        />
      </div>

      <img
        class="absolute top-2 right-2 cursor-pointer"
        width="30px"
        height="30px"
        :src="bookmarked ? heartFilledIcon : heartIcon"
        alt="love"
        @click="bookmarked = !bookmarked"
      />
      <span
        class="absolute bottom-2 right-2 cursor-pointer bg-gray-900 p-1 text-xs text-white rounded leading-tight"
      >
        from <span class="text-lg">€130</span> /hr
      </span>
    </div>
    <p class="text-[#343840] text-lg line-clamp-1">
      {{ spaceData.title }}
    </p>
    <div class="my-2">
      <span class="flex items-center text-sm text-[#6a707a]">
        <img width="16px" :src="membersIcons" alt="icon" />{{
          spaceData.members
        }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    spaceData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      bookmarked: false,
      membersIcons: require('@/assets/icons/people-icon.svg'),
      heartIcon: require('@/assets/icons/heart.svg'),
      heartFilledIcon: require('@/assets/icons/heart-filled.svg'),
    }
  },
  mounted() {
    console.log('this spacesdatae', this.spaceData)
  },
}
</script>

<style></style>

<template>
  <div class="coach-calss-card rounded overflow-hidden m-2">
    <img :src="cardData.cover_image" alt="" class="coach-calss-card__image" />
    <div class="coach-calss-card__footer bg-profile_dark_1 px-4 py-2">
      <h3 class="mb-2">{{ cardData.class_name }}</h3>
      <div
        class="coach-calss-card__footer-info flex text-[10px] gap-1 items-center"
      >
        <div class="flex mr-1">
          <div>{{ cardData.date }} {{ cardData.time }}</div>
        </div>
        <div class="mr-1">{{ cardData.duration }}</div>
        <div>{{ cardData.location }}</div>
        <div class="flex-1 text-right">
          {{ cardData.price }}{{ cardData.currency }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      require: true,
      default() {
        return {}
      },
    },
  },
}
</script>

<style>
</style>
<template>
  <section class="container py-8">
    <h4 class="font-bold text-xl md:text-2xl my-4 text-mainLight">
      Book a unique space for your activity
    </h4>
    <ul class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
      <li v-for="list in listings" :key="list.id">
        <the-listing-card :card-data="list" />
      </li>
    </ul>
    <nuxt-link
      to="#"
      class="block my-4 text-xl text-lightPrimaryColor font-medium"
      >View all</nuxt-link
    >
  </section>
</template>

<script>
export default {
  data() {
    return {
      listings: [
        {
          id: 1,
          image: '/v1663308694/Video_shoot_tile_v2.jpg',
          title: 'Video shoot',
          href: '#',
        },
        {
          id: 2,
          image: '/v1663308737/Photo_shoot_tile.jpg',
          title: 'Photo shoot',
          href: '#',
        },
        {
          id: 3,
          image: '/v1663308759/Meeting_tile.jpg',
          title: 'Meeting',
          href: '#',
        },
        {
          id: 4,
          image: '/v1663308775/Party_tile.jpg',
          title: 'party',
          href: '#',
        },
        {
          id: 5,
          image: '/v1663308789/workshop.jpg',
          title: 'Workshop',
          href: '#',
        },
        {
          id: 6,
          image: '/v1663308801/Baby_shower_tile.jpg',
          title: 'baby shower',
          href: '#',
        },
        {
          id: 7,
          image: '/v1663308817/Popup_tile.jpg',
          title: 'pop-up',
          href: '#',
        },
        {
          id: 8,
          image: '/v1663308831/Performance_tile.jpg',
          title: 'Performance',
          href: '#',
        },
      ],
    }
  },
}
</script>

<style>
</style>
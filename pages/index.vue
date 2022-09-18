<template>
  <div>
    <template v-for="section in pageData">
      <component
        :is="section.component_name"
        v-if="section.component"
        :key="section.id"
        :section-data="section.content"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      pageData: [
        {
          id: 1,
          component: true,
          component_name: 'the-hero',
          content: {
            h1: 'Hello World',
          },
        },
        
        {
          id: 2,
          component: true,
          component_name: 'the-listings',
          content: {
            h1: 'Hello World 2',
          },
        },

        {
          id: 3,
          component: true,
          component_name: 'why-us',
          content: {
            h1: 'Hello World 2',
          },
        },
        {
          id: 4,
          component: true,
          component_name: 'the-app-carousel',
          content: {
            ref: 'allkinds',
            settings: {
              dots: false,
              dotsClass: 'slick-dots custom-dot-class',
              edgeFriction: 0.35,
              infinite: false,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                  },
                },
              ],
            },
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
            title: 'Spaces of all kinds',
          },
        },
        {
          id: 5,
          component: true,
          component_name: 'the-app-carousel',
          content: {
            ref: 'unforgettable',
            settings: {
              dots: false,
              dotsClass: 'slick-dots custom-dot-class',
              edgeFriction: 0.35,
              infinite: false,
              speed: 500,
              slidesToShow: 3,
              slidesToScroll: 1,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                  },
                },
              ],
            },
            listings: [
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
            ],
            title: 'Throw an unforgettable party',
            cta: {
              text: 'Browse all party venues',
              href: '#',
            },
          },
        },
        {
          id: 20,
          component: true,
          component_name: 'the-app-update',
          content: {
            center_text: true,
            image: '/v1663407390/host-banner.jpg',
            title: 'Share your space and start earning',
            text: 'List for free, set your price, and rest assured with our $1M liability insurance',
            cta: {
              text: 'Become a host',
              href: '#',
            },
          },
        },
      ],
    }
  },
}
</script>

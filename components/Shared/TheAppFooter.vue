<template>
  <footer class="app-footer bg-darkPrimaryColor py-12 text-white">
    <div class="container">
      <nav class="footer-nav flex flex-col lg:flex lg:flex-row lg:gap-4">
        <div class="brand mt-8 lg:mt-0 flex lg:block order-last lg:order-first text-xs">
          <nuxt-link to="/" class="brand-logo inline-block mr-8">
            <nuxt-img
              provider="cloudinary"
              :src="footerData.brand.logo"
              class="lg:mb-4 w-32"
            />
          </nuxt-link>
          <div class="flex brand-links">
            <p class="mr-1">{{ footerData.brand.text }}</p>
            <nuxt-link
              v-for="link in footerData.brand.links"
              :key="link.id"
              :to="link.href"
              class="mr-2 capitalize text-appLight"
              >{{ link.name }}
            </nuxt-link>
          </div>
        </div>
        <ul class="footer-link flex-1 flex flex-wrap lg:gap-8">
          <li v-for="nav in footerData.navs" :key="nav.id" class="px-4" >
            <p class="uppercase font-bold mb-4">{{ nav.label }}</p>
            <template v-for="(link, linkIndex) in nav.links">
              <nuxt-link
                :key="linkIndex"
                v-if="!link.external"
                :to="link.href"
                class="block mb-2 capitalize hover:text-appLight text-xs"
                >{{ link.name }}</nuxt-link
              >
              <a
                v-if="link.external"
                :key="linkIndex"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="block mb-2 capitalize hover:text-appLight text-xs"
                >{{ link.name }}</a
              >
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerData: {
        brand: {
          logo: '/v1663401801/logo.a2d798f4.svg',
          text: '© Squeedr 2022,',
          links: [
            {
              name: 'terms',
              href: '/terms',
              external: false,
            },
            {
              name: 'privacy',
              href: '/privacy',
              external: false,
            },
          ],
        },
        navs: [
          {
            label: 'company',
            id: '101',
            links: [
              {
                name: 'about',
                href: '/about',
                external: false,
              },
              {
                name: 'press',
                href: '/press',
                external: false,
              },
              {
                name: 'blog',
                href: '/blog',
                external: false,
              },
            ],
          },
          {
            label: 'social',
            id: '102',
            links: [
              {
                name: 'facebook',
                href: 'https://www.facebook.com/peerspace/',
                external: true,
              },
              {
                name: 'instagram',
                href: 'https://www.instagram.com/peerspace/',
                external: true,
              },
              {
                name: 'Twitter',
                href: 'https://twitter.com/Peerspace',
                external: true,
              },
              {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/company/peerspace',
                external: true,
              },
              {
                name: 'Pinterest',
                href: 'http://www.pinterest.com/peerspace/',
                external: true,
              },
            ],
          },
          {
            label: 'explore',
            id: '103',
            links: [
              {
                name: 'activities',
                href: '/activities',
                external: false,
              },
              {
                name: 'locations',
                href: '/venues/locations',
                external: false,
              },
            ],
          },
          {
            label: 'support',
            id: '104',
            links: [
              {
                name: 'help center',
                href: '/contact-us',
                external: false,
              },
              {
                name: 'COVID-19 Measures',
                href: '/cobid-19',
                external: false,
              },
              {
                name: 'Trust and Safety',
                href: '/trust-safety',
                external: false,
              },
              {
                name: 'Cookie Preferences',
                href: '/cookies-preferences',
                external: false,
              },
              {
                name: 'Report Vulnerability',
                href: '/disclosure',
                external: false,
              },
            ],
          },
        ],
      },
    }
  },
}
</script>

<style>
</style>
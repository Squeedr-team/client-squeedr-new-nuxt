<template>
  <header class="filter drop-shadow-sm w-full z-10 py-4 bg-white">
    <nav class="container flex justify-between items-center">
      <nuxt-link to="/">
        <img class="w-[30px]" src="/squeedr.0d46a4f6.svg" alt="" />
      </nuxt-link>
      <ul class="flex items-center space-x-4">
        <li v-for="navlink in nav" :key="navlink.id">
          <nuxt-link
            v-if="!navlink.blank"
            :to="navlink.href"
            class="capitalize"
            :class="navlink.css_classes"
            >{{ navlink.name }}</nuxt-link
          >
          <a
            v-else
            :href="navlink.href"
            target="_blank"
            class="capitalize"
            rel="noopener noreferrer"
            :class="navlink.css_classes"
            >{{ navlink.name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          id: '1',
          name: 'spaces',
          href: '/spaces',
          blank: false,
        },
        {
          name: 'List your space',
          href: 'https://provider.squdeer.com',
          blank: true,
        },
        {
          id: '2',
          name: 'Log In',
          href: 'login',
          blank: false,
          css_classes: 'text-appLight ',
        },
        {
          id: '3',
          name: 'sign Up',
          href: 'register',
          blank: false,
          css_classes: 'bg-appLight text-white p-2 px-4 rounded',
        },
      ],
    }
  },
}
</script>

<style></style>

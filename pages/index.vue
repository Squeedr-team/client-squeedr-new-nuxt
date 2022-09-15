<template>
  <div>
    <div class="container">
      <template v-for="section in pageData">
        <component
          :is="section.component_name"
          v-if="section.component"
          :key="section.id"
          :section-data="section.content"
        />
      </template>
    </div>
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
          component_name: 'TheAppFooter',
          content: {
            h1: 'Hello World 2',
          },
        },
      ],
    }
  },
}
</script>

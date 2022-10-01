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
  layout: 'empty',
  data() {
    return {
      pageData: [
        {
          id: 1,
          component: true,
          component_name: 'filters-container',
          content: {},
        },
        {
          id: 1,
          component: true,
          component_name: 'search-results-container',
          content: {},
        },
      ],
    }
  },
  head: {
    title: 'Squeedr Results',
  },
}
</script>

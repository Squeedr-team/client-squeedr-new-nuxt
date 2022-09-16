<template>
  <div class="hero-search">
    <h1 class="font-bold text-3xl lg:text-6xl text-white">
      Your Next <span> Baby shower</span> <br />
      starts here
    </h1>
    <form class="flex flex-col lg:flex-row my-6">
      <input
        v-model="search.what"
        type="text"
        placeholder="what are you planing?"
        class="mb-4 lg:mb-0 p-4 rounded lg:mr-2 text-xl"
      />
      <input
        v-model="search.where"
        type="text"
        placeholder="where?"
        class="mb-4 lg:mb-0 p-4 rounded lg:mr-2 text-xl"
      />
      <input
        v-model="search.when"
        type="text"
        placeholder="when?"
        class="mb-4 lg:mb-0 p-4 rounded lg:mr-2 text-xl"
      />
      <button
        type="submit"
        class="bg-mainLight text-white p-4 rounded text-2xl font-medium lg:flex-1"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        what: null,
        where: null,
        when: null,
      },
    }
  },
}
</script>

<style>
</style>
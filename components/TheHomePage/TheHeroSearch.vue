<template>
  <div class="hero-search">
    <h1 class="font-black text-2xl md:text-3xl lg:text-5xl text-white mb-8">
      Your Next <span> Baby shower</span> starts here
    </h1>
    <form>
      <input
        v-model="search.what"
        type="text"
        placeholder="what are you planing?"
        class="form-item"
      />
      <input
        v-model="search.where"
        type="text"
        placeholder="where?"
        class="form-item"
      />
      <date-picker
        v-model="search.when"
        valueType="format"
        placeholder="When?"
        class="form-item"
      ></date-picker>

      <button type="button" @click="showResults">Search</button>
    </form>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
export default {
  components: { DatePicker },

  data() {
    return {
      search: {
        what: null,
        where: null,
        when: null,
      },
    }
  },
  methods: {
    showResults() {
      this.$router.push('/search')
    },
  },
}
</script>

<style></style>

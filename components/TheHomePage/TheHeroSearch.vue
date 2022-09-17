<template>
  <div class="hero-search">
    <h1 class="font-black text-3xl md:text-4xl lg:text-6xl text-white">
      Your Next <span> Baby shower</span> <br />
      starts here
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

      <button type="submit">Search</button>
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
}
</script>

<style>
</style>
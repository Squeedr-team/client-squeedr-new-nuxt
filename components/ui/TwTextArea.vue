<template>
  <div >
    <label
      v-if='label'
      class='text-secondary-600 block mb-1'
      :for='id'
    >{{ label }}
    </label>
    <div class='flex'>
      <textarea
        :id='id'
        ref='input'
        v-bind='$attrs'
        class='px-3 py-2 leading-normal block w-full text-gray-800 bg-white text-left appearance-none outline-none'
        :class="[
                    {
                        'border-red-400': errors.length,
                    },
                    classes
                ]"
        :value='value'
        @input="$emit('input', $event.target.value)"
        @keydown="$emit('keydown', $event)"
        @blur="$emit('blur', $event)"
        @keyup="$emit('keyup', $event)"
      />
    </div>

    <div v-if='!errors.length && hint' class='text-secondary-400 mt-1 text-sm'>
      {{ hint }}
    </div>
    <div v-if='errors.length' class='text-red-600 mt-1 text-sm'>
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwTextArea',

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default() {
        return `text-area-${this._uid}`
      }
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    hint: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    errors: {
      type: Array,
      default: () => []
    },
    bordered: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes() {
      return {
        'border focus:border-primary focus:outline-none':
          this.bordered === true,
        'border bg-gray-200 focus:bg-white': this.bordered === false,
        'rounded-xl': this.rounded,
        'rounded-lg': this.rounded === false,
      }
    }
  },

  methods: {
    focus() {
      this.$refs.input.focus()
    },
    select() {
      this.$refs.input.select()
    },
  }
}
</script>


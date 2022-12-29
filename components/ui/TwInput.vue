<template>
  <div >
    <label
      v-if='label'
      class='text-secondary-600 block mb-1'
      :for='id'
    >{{ label }}
    </label>
    <div class='flex'>
      <div
        v-if='withIcon'
        class='w-12 h-12 lg:h-14'
      >
        <slot name='icon'></slot>
      </div>
      <input
        :id='id'
        ref='input'
        v-bind='$attrs'
        class='px-3 py-2 h-12 lg:h-14 leading-normal block w-full text-gray-800 bg-white text-left appearance-none outline-none'
        :class="[
                    {
                        'border-red-400': errors.length,
                    },
                    classes
                ]"
        :type='type'
        :value='value'
        @input="$emit('input', $event.target.value)"
        @keydown="$emit('keydown', $event)"
        @blur="$emit('blur', $event)"
        @keyup="$emit('keyup', $event)"
      />
      <div
        v-if='append'
        class='h-12 lg:h-14'
      >
        <slot name='append'></slot>
      </div>
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
  name: 'TwInput',

  inheritAttrs: false,

  props: {
    id: {
      type: String,
      default() {
        return `text-input-${this._uid}`
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
    withIcon: {
      type: Boolean,
      default: false
    },
    append: {
      type: Boolean,
      default: false
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
        'rounded-xl': this.rounded && !this.withIcon && !this.append,
        'rounded-lg': this.rounded === false,
        'rounded-tl-0 rounded-bl-0 rounded-tr-2xl rounded-br-2xl':  this.rounded && this.withIcon,
        'rounded-tr-0 rounded-br-0 rounded-tl-2xl rounded-bl-2xl':  this.rounded && this.append,
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


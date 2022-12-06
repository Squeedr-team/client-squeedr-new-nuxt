<template>
  <div class='custom-select' :tabindex='tabindex' @blur='open = false'>
    <label
      v-if='label'
      class='text-secondary-600 block mb-1'
    >{{ label }}
    </label>
    <div
      class='flex px-3 py-2 h-12 lg:h-14 leading-normal block w-full text-gray-800 bg-white text-left appearance-none outline-none relative cursor-pointer'
      :class="[
                    {
                        'border-red-400': errors.length,
                    },
                    classes,roundClasses
                ]"
      @click='open = !open'>
      <span v-if='selected' class='my-auto text-secondary-600'>
        {{ itemText ? selected[itemText] : selected }}
      </span>
      <span v-else class='my-auto text-secondary-400'>
        Choose...
      </span>
      <font-awesome-icon icon='fa fa-chevron-down' class='absolute right-3 top-5 text-xs' />
    </div>
    <div v-if='errors.length' class='text-red-600 mt-1 text-sm'>
      {{ errors[0] }}
    </div>
    <div class='items bg-white shadow-md' :class='[{ selectHide: !open},roundClasses ]'>
      <div
        :class="selected===null && 'text-primary-900 font-semibold'"
        @click="
          selected = null;
          open = false;
          $emit('input', null);
        ">
        Choose...
      </div>
      <div
        v-for='(option, i) of options'
        :key='i'
        :class="itemValue && selected?selected[itemValue]===option[itemValue] && 'text-primary-900 font-semibold':selected===option && 'text-primary-900 font-semibold'"
        @click="
          selected = option;
          open = false;
          $emit('input', itemValue?option[itemValue]:option);
        "
      >
        {{ itemText ? option[itemText] : option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    id: {
      type: String,
      default() {
        return `text-select-${this._uid}`
      }
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    },
    type: {
      type: String,
      default: 'text'
    },
    itemText: {
      type: String,
      default: 'text'
    },
    itemValue: {
      type: String,
      default: 'text'
    },
    value: {
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
    bordered: {
      type: Boolean,
      default: true
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: this.value
        ? this.value
        : null,
      open: false
    }
  },
  computed: {
    classes() {
      return {
        'border focus:border-primary focus:outline-none':
          this.bordered === true,
        'border bg-gray-200 focus:bg-white': this.bordered === false
      }
    },
    roundClasses() {
      return {
        'rounded-2xl': this.rounded && !this.withIcon,
        'rounded-lg': this.rounded === false
      }
    }
  },

  methods: {}
}
</script>

<style scoped>
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
}


.custom-select .items {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  padding: 8px 1em;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: theme('colors.secondary.100');
  color: theme('colors.primary.DEFAULT');
}

.selectHide {
  display: none;
}
</style>

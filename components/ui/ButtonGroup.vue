<template>
  <div class='inline-flex btn-group' ref='btnGroup'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  props: {
    value: {
      type: [String, Array],
      default: undefined
    },
    mandatory: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  mounted() {
    if (this.$refs.btnGroup) {
      const childs = this.$refs.btnGroup.childNodes
      childs.forEach(el => {
        const vm = this
        el.addEventListener('click', function() {
          const val = el.value

          if (typeof vm.value === 'object') {
            if (!vm.inputVal.includes(val)) {
              vm.inputVal.push(val)
            } else if (vm.inputVal.length === 1) {
              if (!vm.mandatory) {
                const index = vm.inputVal.indexOf(val)
                if (index > -1) {
                  vm.inputVal.splice(index, 1)
                }
                vm.inputVal = vm.inputVal.filter(v => v !== val)
              }
            } else {
              const index = vm.inputVal.indexOf(val)
              if (index > -1) {
                vm.inputVal.splice(index, 1)
              }

            }
          } else if (typeof vm.value === 'string') {
            if (vm.mandatory) {
              if (vm.inputVal !== val) {
                vm.inputVal = val
              }
            } else if (vm.inputVal === val) {
              vm.inputVal = ''
            } else {
              vm.inputVal = val
            }
          }
        })
      })

    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>
.btn-group{
  button{
    &:first-child{
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }
    &:last-child{
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
    &:not(:first-child){
      border-left: 0!important;
    }
  }
}
</style>

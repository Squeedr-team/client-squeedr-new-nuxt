

<template>
  <Transition name='modal'>
    <div v-if='show' class='modal-mask'>
      <div class='modal-wrapper' @click="$emit('close')">
        <div class='modal-container rounded-2xl' :style='{maxWidth:width+"px"}' @click.stop=''>
          <slot />
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    show: Boolean,
    width: {
      type: [Number],
      default: 500
    }
  },
  watch: {
    // show (newVal, oldVal) {
    //   if (newVal) document.body.style.overflow = "hidden"
    //   else document.body.style.overflow = "auto"
    // }
  }
}
</script>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: calc(100% - 16px);
  margin: 0px auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

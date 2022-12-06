<template>
  <div class="tw-tabs">
    <div ref="titles" class="flex relative border-b border-gray-200">
      <div
        v-for="(item, index) in tabs"
        :key="index"
        class="mr-6 text-secondary-600 font-semibold text-base inline-block cursor-pointer py-2 px-4 rounded-t-lg border-b-2 hover:border-primary hover:text-primary"
        :class="index === tabIndex?'active border-primary text-primary':'border-transparent'"
        @click="select(index)"
      >{{item.label}}</div>
    </div>

    <div
      class="tabs-content"
      @touchstart="handleTouchstart"
      @touchmove="handleTouchmove"
      @touchend="handleTouchend"
    >
      <div
        class="wrapper"
        :style="{
				transform: `translate3d(${translateX - tabIndex * width}px, 0, 0)`,
				transition: touching ? '' : 'transform .3s'
			}"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwTabs",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tabIndex: 0,
      touching: false,
      dx: 0,
      translateX: 0,
      width: 0
    }
  },
  watch: {
    tabIndex(newVal) {
      this.$emit('change', newVal);
    }
  },
  mounted() {
    this.resizeWidth();
    window.addEventListener('resize', this.resizeWidth);
  },
  methods: {
    getAngle(dx, dy) {
      return 360 * Math.atan(dy / dx) / (2 * Math.PI);
    },
    select(index) {
      this.tabIndex = index;
    },
    handleTouchstart(e) {
      this.touching = true;
      this.dx = 0;
      this.startX = e.touches[0].pageX;
      this.startY = e.touches[0].pageY;
      this.endX = e.touches[0].pageX;
      this.endY = e.touches[0].pageY;
    },
    handleTouchmove(e) {
      const endX = e.touches[0].pageX;
      const endY = e.touches[0].pageY;
      const dx = this.dx = endX - this.startX;
      if (this.canSlider()) {
        return;
      }
      if (Math.abs(dx) > 6 && Math.abs(this.getAngle(dx, endY - this.startY)) < 30) {
        this.translateX = dx;
      }
    },
    handleTouchend() {
      this.touching = false;
      this.translateX = 0;
      const percent = this.dx / this.width;
      if (this.canSlider()) {
        return;
      }
      if (percent < -0.3) {
        this.tabIndex++;
      }
      if (percent > 0.3) {
        this.tabIndex--;
      }
    },
    canSlider() {
      return (this.dx < 0 && this.tabIndex >= this.tabs.length - 1) || (this.dx > 0 && this.tabIndex === 0);
    },
    resizeWidth() {
      this.width = this.$el.clientWidth;
    }
  }
}
</script>

<style lang="scss" scoped>
.tw-tabs {
  .tabs-content {
    overflow: hidden;
    .wrapper {
      display: flex;
    }
  }
  .tabs-content .wrapper > div{
    display: inline-block;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
  }
}
</style>

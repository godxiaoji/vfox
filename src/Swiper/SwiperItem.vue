<template>
  <div class="fx-swiper-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'fx-swiper-item',
  inject: {
    appSwiper: {
      default: null
    }
  },
  mounted() {
    this.update()
  },
  destroyed() {
    this.update()
  },
  updated() {
    if (this.$el.offsetWidth === 0 || this.$el.offsetHeight === 0) {
      // 解决默认 hidden 的问题
      this.update()
    }
  },
  methods: {
    update() {
      if (this.appSwiper) {
        this.appSwiper.update()
      }
    }
  }
}
</script>

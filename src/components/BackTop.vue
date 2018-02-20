<template>
  <span v-if="top > 0" @click.prevent="backTop">
    <v-btn icon fab class="mt-5 grey darken-4 scroll" medium floating>
      <v-icon class="white--text">keyboard_arrow_up</v-icon>
    </v-btn>
    <slot></slot>
  </span>
</template>

<script>
  export default {
    name: 'backTop',
    props: {
      speed: {
        type: Number,
        default: 0.1
      }
    },
    data: () => ({
      top: 0
    }),
    created() {
      let timer = setInterval(() => {
        this.top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop
      }, 20)
    },
    methods: {
      backTop() {
        let top = this.top;
        let timer = setInterval(() => {
          top -= Math.abs(top * this.speed)
          if (top <= 1) {
            top = 0
            clearInterval(timer)
          }
          // Internet Explorer
          document.documentElement.scrollTop = top
          // Other browsers
          document.body.scrollTop = top
        }, 20)
        return false
      }
    }
  };

</script>
<style scoped>
  .scroll {
    position: fixed;
    bottom: 50px;
    right: 50px;
  }
</style>

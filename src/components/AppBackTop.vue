<template>
  <span v-if="top > 0" @click.prevent="backTop">
    <v-btn icon fab id="scroll" class="mt-5 green darken-2" medium floating>
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
    data() {
      return {
        top: 0
      };
    },
    created: function () {
      var that = this;
      var timer = setInterval(function () {
        that.top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      }, 20);
    },
    methods: {
      backTop: function () {
        var that = this;
        var top = that.top;
        var timer = setInterval(function () {
          top -= Math.abs(top * that.speed);
          if (top <= 1) {
            top = 0;
            clearInterval(timer);
          }
          // Internet Explorer
          document.documentElement.scrollTop = top;
          // Other browsers
          document.body.scrollTop = top;
        }, 20);
        return false;
      }
    }
  };

</script>
<style lang="css" scoped>
  #scroll {
    position: fixed;
    bottom: 50px;
    right: 50px;
  }

</style>

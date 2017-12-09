<template>
  <div id="banner" class="text-xs-center" :style="{ 'background-image': 'url(' + image + ')' }">
    <div>
        <v-btn href="#filters" large outline icon fab id="scroll" class="mt-5 green darken-4" medium floating>
          <v-icon x-large class="green--text text--darken-4">keyboard_arrow_down</v-icon>
        </v-btn>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'mainBanner',
    data() {
      return {
        image: "src/assets/img/banner.jpeg",
      };
    }
  };

</script>
<style scoped>
  #banner {
    margin-top: -64px;
    width: 100vw;
    height: 100vh;
    display: flex;
    background: no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  #banner>div {
    margin-top: 15vh;
    margin-left: auto;
    margin-right: auto;
  }

  #banner>div>img {
    height: auto;
    width: 300px;
  }

</style>

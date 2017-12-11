<template>
  <div id="banner" class="text-xs-center" :style="{ 'background-image': 'url(' + image + ')' }">
    <div class="white--text">
      <div class="logo">
        LOGO
      </div>
      <div class="description">Miejska
        <strong>Wypożyczalnia</strong> Samochodów Elektrycznych</div>
      <v-btn v-scroll-to="'#filters'" large outline icon fab id="scroll" class="mt-5 white--text" medium floating>
        <v-icon x-large>keyboard_arrow_down</v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import VueScrollTo from 'vue-scrollto'

  Vue.use(VueScrollTo)

  export default {
    name: 'mainBanner',
    data() {
      return {
        image: require("../assets/img/banner.jpeg")
      };
    },
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
    margin-top: 0;
    margin-left: 70vw;
    margin-right: auto;
    text-align: center;
    width: 100%;
    padding-top: 30vh;
    padding-left: 20px;
    padding-right: 20px;
    background-color: rgba(76, 175, 80, 0.8);
  }

  #banner .logo {
    font-size: 48px;
  }

  #banner .description {
    font-size: 30px;
  }

  @media (max-width: 1024px){
    #banner>div {
      margin-left: 40vw;
    }
  }
  @media (max-width: 480px){
    #banner>div {
      margin-left: 0;
      background-color: rgba(76, 175, 80, 0.6);
    }
  }

</style>

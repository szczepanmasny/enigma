<template>
  <gmap-map id="google-map" :center="{lat:52, lng:19.5}" :zoom="6" map-type-id="terrain"></gmap-map>
</template>

<script>  
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
   
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAENJO63laOnyoIOu6qXBhPrk0Asz7dkqo'
    }
  });

  export default {
    name: 'map',
    data() {
      return {};
    },
  };

</script>

<style scoped>
  #google-map {
    width: 100%;
    flex-grow: 1;
  }
</style>

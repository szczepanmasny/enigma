<template>

  <v-app light>
    <app-toolbar></app-toolbar>
    <main>
      <v-content>
        <app-banner></app-banner>
        <div id="map-component">
          <filters></filters>
          <google-map></google-map>
        </div>
        <app-footer></app-footer>
      </v-content>
    </main>
    <app-back-top></app-back-top>

  </v-app>
</template>

<script>
  import AppToolbar from '@/components/AppToolbar'
  import AppBanner from '@/components/AppBanner'
  import Filters from './components/Filters.vue'
  import GoogleMap from '@/components/GoogleMap'
  import AppFooter from '@/components/AppFooter'
  import AppBackTop from '@/components/AppBackTop'

  export default {
    name: 'app',
    data() {
      return {};
    },
    components: {
      AppToolbar,
      AppBanner,
      Filters,
      GoogleMap,
      AppFooter,
      AppBackTop
    }
  };

</script>

<style lang="stylus">
  @import './stylus/main';

</style>

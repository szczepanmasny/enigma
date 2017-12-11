<template>

  <v-app light>
    <app-toolbar></app-toolbar>
    <main>
      <v-content>
        <app-banner></app-banner>
        <div id="map-component">
          <app-filters></app-filters>
          <app-google-map></app-google-map>
          <app-footer></app-footer>
        </div>
      </v-content>
    </main>
    <app-back-top></app-back-top>

  </v-app>
</template>

<script>
  import AppToolbar from '@/components/Toolbar'
  import AppBanner from '@/components/Banner'
  import AppFilters from '@/components/Filters.vue'
  import AppGoogleMap from '@/components/GoogleMap'
  import AppFooter from '@/components/Footer'
  import AppBackTop from '@/components/BackTop'

  export default {
    name: 'app',
    data() {
      return {};
    },
    components: {
      AppToolbar,
      AppBanner,
      AppFilters,
      AppGoogleMap,
      AppFooter,
      AppBackTop
    }
  };

</script>

<style lang="stylus">
  @import './stylus/main';

</style>

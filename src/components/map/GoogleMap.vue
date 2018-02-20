<template>
  <gmap-map class="google-map" :center="center" :zoom="zoom" map-type-id="terrain">
    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <parking v-if="infoObjectType == 'parking'" :content="infoContent"></parking>
      <poi v-else-if="infoObjectType == 'poi'" :content="infoContent"></poi>
      <vehicle v-else-if="infoObjectType == 'vehicle'" :content="infoContent"></vehicle>
    </gmap-info-window>
    <template v-for="(objectType) in objectTypes" v-if="objectType.selected">
      <gmap-cluster v-if="objectType.name == 'vehicles'">
        <gmap-marker
          v-for="(m, i) in objectType.data"
          :key="i"
          v-if="showVehicle(m)"
          :icon="{url: objectType.image[m.status]}"
          :position="position(m)"
          :clickable="true"
          :draggable="true"
          @click="toggleInfoWindow(m,i)"
        >
        </gmap-marker>
      </gmap-cluster>
      <gmap-marker
        v-else
        v-for="(m, i) in objectType.data"
        :key="i"
        :icon="{url: objectType.image}"
        :position="position(m)"
        :clickable="true"
        :draggable="true"
        @click="toggleInfoWindow(m,i)"
      >
      </gmap-marker>
    </template>
  </gmap-map>
</template>

<script>
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import Parking from './info-windows/Parking'
  import Poi from './info-windows/Poi'
  import Vehicle from './info-windows/Vehicle'
  import {
    mapState,
    mapActions
  } from 'vuex'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAENJO63laOnyoIOu6qXBhPrk0Asz7dkqo'
    }
  });

  export default {
    name: 'map',
    components: {
      Parking,
      Poi,
      Vehicle,
    },
    data: () => ({
      center: {
        lat: 51.12,
        lng: 17.04
      },
      zoom: 13,
      infoContent: {},
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      infoObjectType: null,
      currentMidx: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    }),
    computed: {
      ...mapState([
        'objectTypes',
        'batteryLevel'
      ]),
    },
    created() {
      this.getData()
    },
    methods: {
      ...mapActions([
        'getData'
      ]),
      toggleInfoWindow (marker, idx) {
        this.infoWindowPos = {
          lat: marker.location.latitude,
          lng: marker.location.longitude
        };
        this.infoContent = marker
        this.infoObjectType = marker.discriminator
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen
        } else {
          this.infoWinOpen = true
          this.currentMidx = idx
        }
      },
      showVehicle (m) {
        return m.batteryLevelPct >= this.batteryLevel && this.inSelectedStatuses(m.status)
      },
      position(m) {
        return {
          lat: m.location.latitude,
          lng: m.location.longitude
        }
      },
      inSelectedStatuses (status) {
        let inSelected = false
        for (let selStatus of this.$store.state.selectedStatuses) {
          if (selStatus.name == status) {
            inSelected = true
            break
          }
        }
        return inSelected
      }
    }
  };

</script>

<style scoped>
  .google-map {
    width: 100%;
    flex-grow: 1;
  }
</style>

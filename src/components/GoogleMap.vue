<template>
  <gmap-map id="google-map" :center="center" :zoom="zoom" map-type-id="terrain">

    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
      <parking v-if="infoObjectType == 'parking'" :content="infoContent"></parking>
      <poi v-else-if="infoObjectType == 'poi'" :content="infoContent"></poi>
      <vehicle v-else-if="infoObjectType == 'vehicle'" :content="infoContent"></vehicle>
    </gmap-info-window>

    <template v-for="(objectType) in markers" v-if="$store.state.objectTypes[objectType.name].selected">
      <gmap-cluster v-if="objectType.name == 'vehicles'">
        <gmap-marker v-if="m.batteryLevelPct >= $store.state.batteryLevel && inSelectedStatuses(m.status)" :key="i" v-for="(m, i) in objectType.data"
          :icon="{url: getVehicleIcon(m.status)}" :position="{lat: m.location.latitude,lng: m.location.longitude}" :clickable="true"
          :draggable="true" @click="toggleInfoWindow(m,i)">
        </gmap-marker>
      </gmap-cluster>
      <gmap-marker v-else :key="i" v-for="(m, i) in objectType.data" :icon="{url: objectType.icon}" :position="{lat: m.location.latitude,lng: m.location.longitude}"
        :clickable="true" :draggable="true" @click="toggleInfoWindow(m,i)">
      </gmap-marker>

    </template>

  </gmap-map>
</template>

<script>
  import axios from 'axios'
  import * as VueGoogleMaps from 'vue2-google-maps';
  import Vue from 'vue';
  import Parking from '@/components/Parking'
  import Poi from '@/components/Poi'
  import Vehicle from '@/components/Vehicle'

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
    data() {
      return {
        center: {
          lat: 51.11,
          lng: 17.04
        },
        zoom: 14,
        markers: [{
            name: 'parkings',
            objectType: 'PARKING',
            icon: require("../assets/img/parking.png"),
            data: []
          },
          {
            name: 'poi',
            objectType: 'POI',
            icon: require("../assets/img/flag.png"),
            data: []
          },
          {
            name: 'vehicles',
            objectType: 'VEHICLE',
            data: []
          },
        ],
        vehicleAvailableIcon: require("../assets/img/car_green.png"),
        vehicleUnavailableIcon: require("../assets/img/car_red.png"),
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
      };
    },
    created() {
      for (let obj of this.markers) {
        axios.get('https://test.vozilla.pl/api-client-portal/map?objectType=' + obj.objectType)
          .then(response => {
            Vue.set(obj, 'data', response.data.objects)
          })
      }
    },
    methods: {
      toggleInfoWindow: function (marker, idx) {
        this.infoWindowPos = {
          lat: marker.location.latitude,
          lng: marker.location.longitude
        };
        this.infoContent = marker;
        this.infoObjectType = marker.discriminator;
        if (this.currentMidx == idx) {
          this.infoWinOpen = !this.infoWinOpen;
        } else {
          this.infoWinOpen = true;
          this.currentMidx = idx;

        }
      },
      getVehicleIcon: function (status) {
        return status == 'AVAILABLE' ? this.vehicleAvailableIcon : this.vehicleUnavailableIcon
      },
      inSelectedStatuses: function (status) {
        var inSelected = false
        for (let selStatus of this.$store.state.selectedStatuses) {
          if (selStatus.name == status) {
            inSelected = true
            break
          }
        }
        return inSelected
        return true
      }
    }
  };

</script>

<style scoped>
  #google-map {
    width: 100%;
    flex-grow: 1;
  }

</style>

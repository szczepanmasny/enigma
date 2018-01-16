<template>
  <v-layout id="filters" class="grey darken-4 grey--text text--lighten-2" row wrap>
    <v-flex xs12 md4 lg6>
      <h4>Typy obiektów</h4>
      <v-layout row wrap>
        <v-flex v-for="(objectType, index) in objectTypes" :key="index" style="display:inline">
          <v-layout row wrap>
            <v-flex>
              <v-chip :class="objectType.color" text-color="white">
                <v-icon dark>{{ objectType.icon }}</v-icon>
              </v-chip>
              <span>{{ objectType.text }}</span>
            </v-flex>
            <v-flex>
              <v-checkbox color="green" dark v-model="objectType.selected"></v-checkbox>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 md4 lg3>
      <h4>Status pojazdu</h4>
      <v-select color="green" dark class="input-group--focused" placeholder="Wybierz status" v-bind:items="statuses" v-model="$store.state.selectedStatuses"
        multiple chips item-text="text" item-value="name" return-object></v-select>
    </v-flex>
    <v-flex xs12 md4 lg3>
      <h4>Poziom naładowania baterii</h4>
      <v-layout row wrap>
        <v-flex xs10>
          <v-slider v-bind:max="100" v-model="$store.state.batteryLevel" dark :color="sliderColor" :thumb-color="sliderColor"></v-slider>
        </v-flex>
        <v-flex xs2>
          <v-text-field v-bind:max="100" v-bind:min="0" v-model="$store.state.batteryLevel" type="number" dark color="success"></v-text-field>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'filters',
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        'color',
        'objectTypes',
        'statuses',
      ]),
      sliderColor: function() {
        return this.color(this.$store.state.batteryLevel)
      }
    },
  };

</script>

<style scoped>
  #filters {
    flex-grow: unset;
  }

  #filters>.flex {
    padding: 20px;
  }

</style>

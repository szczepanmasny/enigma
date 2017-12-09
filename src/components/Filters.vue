<template>
  <v-layout id="filters" class="grey darken-4 grey--text" row wrap>
    <v-flex xs12 lg4>
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
            <v-checkbox color="green" v-model="objectType.selected"></v-checkbox>
          </v-flex>
        </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12 lg4>
      <h4>Status pojazdu</h4>
      <v-select color="green" class="input-group--focused" label="Wybierz status" v-bind:items="states" v-model="e7" multiple chips></v-select>
    </v-flex>
    <v-flex xs12 lg4>
      <h4>Poziom naładowania baterii</h4>
      <v-slider v-model="batteryLevel" color="green" track-color="green lighten-4" thumb-color="green"></v-slider>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'filters',
    data() {
      return {
        batteryLevel: 0,
        objectTypes: {
          parking: {
            text: "Parkingi",
            color: "blue",
            icon: "local_parking",
            selected: true,
          },
          poi: {
            text: "POI",
            color: "purple",
            icon: "place",
            selected: true,
          },
          vehicle: {
            text: "Pojazdy",
            color: "green",
            icon: "directions_car",
            selected: true,
          },
        },
        e7: [],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      };
    },
  };

</script>

<style scoped>
  #filters {
    flex-grow: unset;
  }
  #filters > .flex {
    padding: 20px;
  }
</style>

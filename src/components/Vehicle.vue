<template>
  <div>
    <h2>{{content.name}}</h2>
    <div>{{status}}</div>
    <v-layout>
      <v-flex>
        <img :src="'https://test.vozilla.pl/api-client-portal//attachments/' + content.picture.id" />
      </v-flex>
      <v-flex>
        <v-progress-circular :size="100" :width="15" :rotate="360" :value="content.batteryLevelPct" :color="color(content.batteryLevelPct)">
          {{ content.rangeKm + 'km' }}
        </v-progress-circular>
      </v-flex>
    </v-layout>
    <p>Kolor:
      <strong>{{content.color}}</strong>
    </p>
    <p>Numer rejestracyjny:
      <strong>{{content.platesNumber}}</strong>
    </p>
    <p>Numer boczny:
      <strong>{{content.sideNumber}}</strong>
    </p>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'vehicle',
    props: [
      'content',
    ],
    data() {
      return {};
    },
    computed: {
      ...mapGetters([
        'color',
        'statuses'
      ]),
      status: function() {
        return this.statuses.find(obj => obj.name == this.content.status).text
      }
    }
  };

</script>

<style scoped>


</style>

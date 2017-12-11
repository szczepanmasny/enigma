<template>
  <div>
    <h2>{{content.name}}</h2>
    <div>{{statuses[content.status]}}</div>
    <v-layout>
      <v-flex>
        <img :src="'https://test.vozilla.pl/api-client-portal//attachments/' + content.picture.id" />
      </v-flex>
      <v-flex>
        <v-progress-circular :size="100" :width="15" :rotate="360" :value="content.batteryLevelPct" :color="circleColor">
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
  export default {
    name: 'vehicle',
    props: [
      'content'
    ],
    data() {
      return {
        circleColors: [{
            level: 25,
            color: 'red'
          },
          {
            level: 50,
            color: 'orange'
          },
          {
            level: 75,
            color: 'yellow'
          },
          {
            level: 100,
            color: 'green'
          },
        ],
        statuses: {
          "AVAILABLE": "Dostępny",
          "RETURNED": "Zwrócony",
          "RENTED": "Wypożyczony",
          "UNAVAILABLE": "Niedostępny",
          "RESERVED": "Zarezerwowany"
        },
      };
    },
    computed: {
      circleColor: function () {
        var color
        for (let el of this.circleColors) {
          if (this.content.batteryLevelPct <= el.level) {
            color = el.color
            break
          }
        }
        return color
      }
    }
  };

</script>

<style scoped>


</style>

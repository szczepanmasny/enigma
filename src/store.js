import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    batteryLevel: 0,
    objectTypes: {
      vehicles: {
        text: "Pojazdy",
        color: "green",
        icon: "directions_car",
        selected: true,
      },
      parkings: {
        text: "Parkingi",
        color: "blue",
        icon: "local_parking",
        selected: false,
      },
      poi: {
        text: "POI",
        color: "orange",
        icon: "place",
        selected: false,
      },
    },
    selectedStatuses: [{
      name: "AVAILABLE",
      text: 'Dostępne'
    }, ]
  }
})

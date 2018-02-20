import Vue from 'vue'
import axios from 'axios'

let actions = {
  getData({commit,state}) {
    for (let obj of state.objectTypes) {
      axios.get('https://test.vozilla.pl/api-client-portal/map?objectType=' + obj.objectType)
        .then(response => {
            obj.data = response.data.objects
        })
    }
  },
}

export default actions

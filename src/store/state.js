let state = {
  objectTypes: [{
      text: "Pojazdy",
      color: "green",
      icon: "directions_car",
      selected: true,
      name: 'vehicles',
      objectType: 'VEHICLE',
      image: {
        'AVAILABLE': require("../assets/img/car_green.png"),
        'UNAVAILABLE': require("../assets/img/car_red.png"),
      },
      data: []
    },
    {
      text: "Parkingi",
      color: "blue",
      icon: "local_parking",
      selected: false,
      name: 'parkings',
      objectType: 'PARKING',
      image: require("../assets/img/parking.png"),
      data: []
    },
    {
      text: "POI",
      color: "orange",
      icon: "flag",
      selected: false,
      name: 'poi',
      objectType: 'POI',
      image: require("../assets/img/flag.png"),
      data: []
    },
  ],
  statuses: [{
      name: "AVAILABLE",
      text: 'Dostępny'
    },
    {
      name: "RETURNED",
      text: 'Zwrócony'
    },
    {
      name: "RENTED",
      text: 'Wypożyczony'
    },
    {
      name: "UNAVAILABLE",
      text: 'Niedostępny'
    },
    {
      name: "RESERVED",
      text: 'Zarezerwowany'
    },
  ],
  selectedStatuses: [{
    name: "AVAILABLE",
    text: 'Dostępny'
  }, ],
  batteryLevelColors: [{
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
  batteryLevel: 0,
}

export default state

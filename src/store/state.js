let state = {
  batteryLevel: 40,
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
  selectedStatuses: [
    {
      name: "AVAILABLE",
      text: 'Dostępny'
    }, 
  ],
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
}

export default state

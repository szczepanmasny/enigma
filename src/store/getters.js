let getters = {
  color: state => batteryLevel => {
    let color
    for (let el of state.batteryLevelColors) {
      if (batteryLevel <= el.level) {
        color = el.color
        break
      }
    }
    return color
  },
  objectTypes: state => state.objectTypes,
  statuses: state => state.statuses,
}

export default getters

let mutations = {
  openProfileDialog(state) {
    state.profileDialog = true
  },
  openHelpDialog(state) {
    state.helpDialog = true
  },
  permission(state, data) {
    state.permission = data;
  },
}

export default mutations
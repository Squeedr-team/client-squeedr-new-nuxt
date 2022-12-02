import chat from "@/store/modules/chat";

export const state = () => ({
  snackbar: {
    message: '',
    type: ''
  },
  auth:{
    user:{}
  }
});
export const mutations = {
  SET_ALERT(state, data) {
    state.snackbar.message = data.msg;
    state.snackbar.type = data.type;
  },
  RESET_ALERT(state) {
    state.snackbar.message = '';
    state.snackbar.type = '';
  },
}
export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  },
}
export const actions = {
 set_alert({commit}, payload) {
    commit('RESET_ALERT');
    commit('SET_ALERT', payload);
    if (!payload.dismiss) {
      setTimeout(() => {
        commit('RESET_ALERT')
      }, 3500)
    }
  },

}
export const modules = {
  chat
}

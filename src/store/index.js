import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      logo: "https://stentcdn.s3.amazonaws.com/resources/Logo-512x512.png",
      firstName: "Nicolas",
      lastName: "Payrouse",
      avatar: "/src/assets/img/avatars/profiles/avatar-1.jpg"
    }
  },
  getters: {
    fullName: state => {
      const { firstName, lastName } = state.currentUser;
      return `${firstName} ${lastName}`;
    },
    url: state => {
      // const url = require(state.currentUser.avatar);
      return state.currentUser.avatar;
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

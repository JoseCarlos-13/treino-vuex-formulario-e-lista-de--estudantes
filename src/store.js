import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    people: []
  },

  getters: {
    valuePeople(state) {
      return state.people;
    }
  },

  mutations: {
    addPerson(state, person) {
      return state.people.push(person);
    },

    removePerson(state) {
      return state.people.pop();
    },

    clearPeople(state) {
      return (state.people = []);
    }
  },

  actions: {
    addPerson({ commit }, person) {
      setTimeout(() => {
        commit("addPerson", person);
      }, 1000);
    },

    removePerson({ commit }) {
      setTimeout(() => {
        commit("removePerson");
      }, 1000);
    }
  }
});

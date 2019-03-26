import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//import Factory from '@/Factory';
import themes from './assets/themes.json'
import mil from './assets/mil.json'

export const store = new Vuex.Store({
  state: {
    themes: "",
    mil: ""
  },
  mutations: {

    init: (state, {}) => {
      state.themes = themes.themes;
      state.mil = mil.mil;
    },

  },
  getters: {

    myGetter: state => () => {
      return true;
    },

  },
});

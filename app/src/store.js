import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//import Factory from '@/Factory';
import themes from './assets/themes.json'
import jams from './assets/jams.json'
import mil from './assets/mil.json'

export const store = new Vuex.Store({
  state: {
    themes: "",
    jams: "",
    mil: ""
  },
  mutations: {

    init: (state, {}) => {
      state.themes = themes.themes;
      state.jams = jams.jams;
      state.mil = mil.mil;
    },

  },
  getters: {

    myGetter: state => () => {
      return true;
    },

  },
});

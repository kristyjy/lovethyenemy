import Vue from 'vue';
import Vuex from 'vuex';

import villains from './villains'
import heroes from './heroes'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    villains,
    heroes
  }
});
import Vue from 'vue';
import Vuex from 'vuex';

import heroes from './heroes'
import player from './player'
import game from './game'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    heroes,
    player,
    game
  }
});
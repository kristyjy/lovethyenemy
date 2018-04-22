import _ from 'lodash'
import * as playerType from '../constants/players'

const state = {
  player: {
    name: '',
    stats: {
      fantasy: 1,
      scifi: 1,
      realism: 1,
      goth: 1
    },
    deck: [],
    hand: [],
    seduced: []
  },
  ai: {
    name: '',
    stats: {
      fantasy: 1,
      scifi: 1,
      realism: 1,
      goth: 1
    },
    deck: [],
    hand: [],
    seduced: []
  }
}

const getters = {
  getPlayerName(state) {
    return state[playerType.PLAYER].name;
  },
  getPlayerDeck(state) {
    return state[playerType.PLAYER].deck;
  },
  getPlayerHand(state) {
    return state[playerType.PLAYER].hand;
  },
  getPlayerStats(state) {
    return state[playerType.PLAYER].stats;
  },
  getAIName(state) {
    return state[playerType.AI].name;
  },
  getAIDeck(state) {
    return state[playerType.AI].deck;
  },
  getAIHand(state) {
    return state[playerType.AI].hand;
  },
  getAIStats(state) {
    return state[playerType.AI].stats;
  }
}

const actions = {
  setHero({commit}, hero) {
    commit('setHero', hero)
  },
  shuffleDeck({commit}, player) {
    commit('shuffleDeck', player);
  }
}

const mutations = {
  setHero(state, {hero, player}) {
    state[player].name = hero.name;
    if (hero.fantasy) {
      state[player].stats.fantasy = hero.fantasy;
    }
    if (hero.scifi) {
      state[player].stats.scifi = hero.scifi;
    }
    if (hero.realism) {
      state[player].stats.realism = hero.realism;
    }
    if (hero.goth) {
      state[player].stats.goth = hero.goth;
    }
  },
  shuffleDeck(state, player) {
    state[player].deck = _.shuffle(state[player].deck);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
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
    discard: [],
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
  getPlayerDiscard(state) {
    return state[playerType.PLAYER].discard;
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
  getAIDiscard(state) {
    return state[playerType.AI].discard;
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
  },
  shuffleDiscard({commit}, player) {
    commit('shuffleDiscard', player);
  },
  discardHand({commit}, player) {
    commit('discardHand', player);
  },
  discardCardFromHand({commit}, payload) {
    commit('discardCardFromHand', payload);
  },
  draw({commit, dispatch}, payload) {
    if (payload.number > state[payload.player].deck.length) {
      dispatch('shuffleDiscard', payload.player);
    }
    commit('draw', payload);
  }
}

const mutations = {
  setHero(state, {hero, player}) {
    state[player].name = hero.name;
    state[player].deck = hero.deck;
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
  },
  shuffleDiscard(state, player) {
    state[player].deck = _.concat(state[player].deck, _.shuffle(state[player].discard));
    state[player].discard = [];
  },
  discardHand(state, player) {
    state[player].discard = _.concat(state[player].discard, state[player].hand);
    state[player].hand = [];
  },
  discardCardFromHand(state, {player, card}) {
    state[player].discard = [...state[player].discard, card];
    state[player].hand = state[player].hand.filter((c) => {
      if (c.id !== card.id) {
        return card;
      }
    });
  },
  draw(state, {player, number}) {
    state[player].hand = _.concat(state[player].hand, _.take(state[player].deck, number));
    state[player].deck = _.slice(state[player].deck, number, state[player].deck.length)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
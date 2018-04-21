const state = {
  name: '',
  stats: {
    fantasy: 1,
    scifi: 1,
    realism: 1,
    goth: 1
  },
  deck: [],
  hand: [],
  seduced: [],
  score: 0
}

const getters = {
  getPlayerName(state) {
    return state.name;
  },
  getPlayerDeck(state) {
    return state.deck;
  },
  getPlayerHand(state) {
    return state.hand;
  },
  getPlayerStats(state) {
    return state.stats;
  },
  getPlayerScore(state) {
    return state.score;
  }
}

const actions = {
  setPlayerStats({commit}, hero) {
    commit('setPlayerStats', hero);
  },
  setScore({commit}, score) {
    commit('setScore', score);
  }
}

const mutations = {
  setPlayerStats(state, hero) {
    state.name = hero.name;
    if (hero.fantasy) {
      state.stats.fantasy = hero.fantasy;
    }
    if (hero.scifi) {
      state.stats.scifi = hero.scifi;
    }
    if (hero.realism) {
      state.stats.realism = hero.realism;
    }
    if (hero.goth) {
      state.stats.goth = hero.goth;
    }
  },
  setScore(state, score) {
    state.score = score;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
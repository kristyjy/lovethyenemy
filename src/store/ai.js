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
  seduced: []
}

const getters = {
  getAIName(state) {
    return state.name;
  },
  getAIDeck(state) {
    return state.deck;
  },
  getAIHand(state) {
    return state.hand;
  },
  getAIStats(state) {
    return state.stats;
  }
}

const actions = {
  setAIHero({commit}, hero) {
    commit('setAIHero', hero);
  }
}

const mutations = {
  setAIHero(state, hero) {
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
import _ from 'lodash'

const state = {
  villains: [
    {
      name: 'Vampire',
      goth: 6,
      fantasy: 2
    },
    {
      name: 'Minotaur',
      fantasy: 8
    },
    {
      name: 'Kid Next Door',
      realism: 5
    },
    {
      name: "Devil",
      fantasy: 4,
      goth: 4
    },
    {
      name: "Evil Starship Captain",
      scifi: 6
    },
    {
      name: "The Opposing Basketball Team",
      realism: 7
    },
    {
      name: "Evil CEO",
      realism: 4,
      scifi: 4
    },
    {
      name: "Serial Killer",
      realism: 9
    },
    {
      name: "Super Villain",
      fantasy: 3,
      scifi: 3,
      realism: 3
    },
    {
      name: "Witch",
      fantasy: 6
    }
  ]
}

const getters = {
  getVillains(state) {
    return state.villains;
  },
  getNextVillain(state) {
    return _.head(state.villains);
  }
}

const actions = {
  shuffleVillains({commit}) {
    commit('shuffleVillains');
  },
  drawVillain({commit}) {
    commit('drawVillain');
  }
}

const mutations = {
  shuffleVillains() {
    state.villains = _.shuffle(state.villains);
  },
  drawVillain() {
    state.villains = _.tail(state.villains);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
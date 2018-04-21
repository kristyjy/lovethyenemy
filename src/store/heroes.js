import _ from 'lodash'

const state = {
  heroes: [
    {
      name: "Adventurer",
      fantasy: 6
    },
    {
      name: "School Kid",
      realism: 6
    },
    {
      name: "Angel",
      fantasy: 3,
      goth: 3
    },
    {
      name: "Heroic Starship Captain",
      scifi: 6
    },
    {
      name: "Cyberpunk Rebel",
      realism: 3,
      scifi: 3
    },
    {
      name: "Super Hero",
      fantasy: 2,
      scifi: 2,
      realism: 2
    },
    {
      name: "Vampire Hunter",
      goth: 6
    }
  ]
}

const getters = {
  getHeroes(state) {
    return state.heroes;
  },
  getRandomHero(state) {
    return _.sample(state.heroes);
  } 
}

const actions = {
  removeHeroFromOptions({commit}, hero) {
    commit('removeHero', hero);
  }
}

const mutations = {
  removeHero(state, hero) {
    state.heroes = state.hero.filter((item) => {
      if (item.name !== hero.name)
        return item;
    });
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
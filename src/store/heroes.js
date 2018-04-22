import _ from 'lodash';
import * as genres from '../constants/genres';
import * as types from '../constants/cards';

const state = {
  heroes: [
    /*{
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
    },*/
    {
      name: "Super Hero",
      fantasy: 2,
      scifi: 2,
      realism: 2,
      deck: [
        {
          title: '+1 Fantasy',
          type: types.GENRE,
          fantasy: 1
        },
        {
          title: '+1 Sci-fi',
          type: types.GENRE,
          scifi: 1
        },
        {
          title: '+1 Realism',
          type: types.GENRE,
          realism: 1
        },
        {
          title: '+1 Gothic',
          type: types.GENRE,
          goth: 1
        },
        {
          title: '+1 Fantasy, +1 Sci-fi, +1 Realism',
          type: types.GENRE,
          fantasy: 1,
          scifi: 1,
          realism: 1
        },
        {
          title: '+1 Fantasy, +1 Sci-fi, +1 Realism',
          type: types.GENRE,
          fantasy: 1,
          scifi: 1,
          realism: 1
        },
        {
          title: 'Aquire Random Card',
          type: types.ACTION,
          action: 'random'
        },
        {
          title: '-1 Gothic from opponent',
          type: types.ACTION,
          opponent: {
            goth: -1
          }
        }
      ]
    },
    {
      name: "Vampire Hunter",
      goth: 6,
      deck: [
        {
          title: '+1 Fantasy',
          type: types.GENRE,
          fantasy: 1
        },
        {
          title: '+1 Sci-fi',
          type: types.GENRE,
          scifi: 1
        },
        {
          title: '+1 Realism',
          type: types.GENRE,
          realism: 1
        },
        {
          title: '+1 Gothic',
          type: types.GENRE,
          goth: 1
        },
        {
          title: '+3 Goth',
          type: types.GENRE,
          goth: 3
        },
        {
          title: '+1 Fantasy, +1 Sci-fi, +1 Realism',
          type: types.GENRE,
          goth: 3
        },
        {
          title: 'Aquire Random Card',
          type: types.ACTION,
          action: 'random'
        },
        {
          title: '-1 Fantasy, -1 Sci-fi, -1 Realism from opponent',
          type: types.ACTION,
          opponent: {
            fantasy: -1,
            scifi: -1,
            realism: -1
          }
        }
      ]
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
    state.heroes = state.heroes.filter((item) => {
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
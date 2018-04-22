const state = {
  step: 1,
  playerScore: 0,
  aiScore: 0,
  goal: 69,
  turn: 'player',
  round: 1,
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
  ],
  currentVillains: []
}

const getters = {
  getPlayerScore(state) {
    return state.playerScore;
  },
  getAIScore(state) {
    return state.aiScore;
  },
  getCurrentStep(state) {
    return state.step;
  },
  getCurrentRound(state) {
    return state.round;
  },
  getCurrentTurn(state) {
    return state.turn;
  },
  getWinningPlayer(state) {
    if (state.playerScore === state.aiScore) {
      return 'Tie';
    }
    else if (state.playerScore > state.aiScore) {
      return 'Player';
    }
    else {
      return 'AI';
    }
  },
  hasPlayerWon(state) {
    return state.playerScore >= state.goal;
  },
  hasAIWon(state) {
    return state.aiScore >= state.goal;
  },
  getCurrentVillains(state) {
    return state.currentVillains;
  }
}

const actions = {
  setNextTurn({commit}) {
    commit('setNextTurn');
  },
  nextStep({commit}) {
    commit('nextStep');
  },
  shuffleVillains({commit}) {
    commit('shuffleVillains');
  },
  drawVillains({commit}) {
    commit('drawVillains');
  }
}

const mutations = {
  setNextTurn(state) {
    if (state.turn === 'seduce') {
      state.turn = 'player';
      state.round = state.round + 1;
    }
    else if (state.turn === 'player') {
      state.turn = 'ai';
    }
    else {
      state.turn = 'seduce';
    }
  },
  nextStep(state) {
    state.step = state.step + 1;
  },
  shuffleVillains() {
    state.villains = _.shuffle(state.villains);
  },
  drawVillains(state) {
    let number = 3 - state.currentVillains.length;
    if (number) {
      state.currentVillains = _.concat(state.currentVillains, _.take(state.villains, number));
      state.villains = _.slice(state.villains, number, state.villains.length)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
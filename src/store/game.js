const state = {
  step: 1,
  playerScore: 0,
  aiScore: 0,
  goal: 69,
  turn: 'player',
  round: 1
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
  }
}

const actions = {
  setNextTurn({commit}) {
    commit('setNextTurn');
  },
  nextStep({commit}) {
    commit('nextStep');
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
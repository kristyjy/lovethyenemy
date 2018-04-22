<template>
  <div class="game">
    <div v-if="getCurrentTurn === 'player'">
      It is your turn
      <button @click="playerTurnComplete">Done</button>
    </div>
    <div v-else>
      It is the seduction time!
      <button @click="seductionComplete">Done</button>
    </div>
    <div>Round: {{ getCurrentRound }}</div>
    <div>{{ getAIName }}: {{ getAIScore }} points</div>
    <div>{{ getPlayerName }} (you): {{ getPlayerScore }} points</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GameBoard',
  computed: {
    ...mapGetters([
      'getCurrentTurn',
      'getCurrentRound',
      'getPlayerScore',
      'getAIScore',
      'hasPlayerWon',
      'hasAIWon',
      'getWinningPlayer',
      'getPlayerName',
      'getAIName'
    ])
  },
  methods: {
    ...mapActions([
      'setNextTurn'
    ]),
    playerTurnComplete() {
      this.setNextTurn();
      // TODO: AI Turn logic goes here
      this.setNextTurn();
    },
    seductionComplete() {
      this.setNextTurn();
    }
  }
}
</script>

<style scoped>
</style>
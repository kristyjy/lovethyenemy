<template>
  <div class="game">
    <div v-if="getCurrentTurn === 'player'">
      <h1>It is your turn</h1>
      <hr />
      <h3>Villains to Seduce</h3>
      <div v-for="villain in getCurrentVillains" :key="villain.name">
        {{ villain.name }}
      </div>
      <hr />
      <h3>Your Hand</h3>
      <div v-for="card in getPlayerHand" :key="card.id">
        {{ card.title }}
      </div>
      <hr />
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
import * as playerType from '../../constants/players';

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
      'getAIName',
      'getPlayerDeck',
      'getAIDeck',
      'getPlayerHand',
      'getPlayerDiscard',
      'getCurrentVillains'
    ])
  },
  methods: {
    ...mapActions([
      'setNextTurn',
      'draw',
      'discardHand',
      'drawVillains'
    ]),
    beginPlayerTurn() {
      // Player turn steps
      // Discard hand
      this.discardHand(playerType.PLAYER);
      // Draw 5 cards from deck to hand
      this.draw({player: playerType.PLAYER, number: 5});
      // Add villains up to 3
      this.drawVillains();
      // Add up to 6 buyable cards
    },
    beginAITurn() {
      // AI turn steps
      // Discard hand
      this.discardHand(playerType.AI);
      // Draw 5 cards from deck to hand
      this.draw({player: playerType.AI, number: 5});
      // TODO: Run logic to complete AI turn
      this.setNextTurn();
    },
    beginSeductionRound() {
      // Seduction round steps
      // Draw up to 5 for Player and AI
      // Add up totals from Player and AI
      // Divi up Villain cards
      // Add points to scores
      // Check if a player has won
      // if no winner yet call this.seductionComplete();
    },
    playerTurnComplete() {
      this.setNextTurn();
      this.beginAITurn();
    },
    seductionComplete() {
      this.setNextTurn();
      this.beginPlayerTurn();
    }
  },
  mounted() {
    this.beginPlayerTurn();
  }
}
</script>

<style scoped>
</style>
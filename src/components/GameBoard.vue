<template>
  <div class="board">
    <div v-if="getCurrentStep === 1" class="select-hero">
      <SelectHero />
    </div>
    <div v-else-if="getCurrentStep === 2" class="play-game">
      <Game />
    </div>
    <div v-else class="win-game">Game Over</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SelectHero from './steps/SelectHero.vue';
import Game from './steps/Game.vue';

export default {
  name: 'GameBoard',
  components: {
    SelectHero,
    Game
  },
  computed: {
    ...mapGetters([
      'getCurrentStep'
    ])
  },
  methods: {
    ...mapActions([
      'shuffleVillains',
      'drawVillain'
    ])
  }
}
</script>

<style scoped>
.board {
  width: 100%;
}
</style>
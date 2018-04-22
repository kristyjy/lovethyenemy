<template>
  <div class="select-hero">
    <h1>Select your character</h1>
    <div v-for="hero in getHeroes" :key="hero.name" class="hero">
      <button @click="selectHero(hero)">{{ hero.name }}</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as playerType from '../../constants/players';

export default {
  name: 'GameBoard',
  computed: {
    ...mapGetters([
      'getHeroes',
      'getRandomHero'
    ])
  },
  methods: {
    ...mapActions([
      'setHero',
      'removeHeroFromOptions',
      'nextStep'
    ]),
    selectHero(hero) {
      this.setHero({hero, player: playerType.PLAYER});
      this.removeHeroFromOptions(hero);
      this.setHero({hero: this.getRandomHero , player: playerType.AI});
      this.nextStep();
    }
  }
}
</script>

<style scoped>
</style>
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
      'setPlayerHero',
      'removeHeroFromOptions',
      'setAIHero',
      'nextStep'
    ]),
    selectHero(hero) {
      this.setPlayerHero(hero);
      this.removeHeroFromOptions(hero);
      this.setAIHero(this.getRandomHero);
      this.nextStep();
    }
  }
}
</script>

<style scoped>
</style>
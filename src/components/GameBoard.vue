<template>
  <div class="board">
    test
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'GameBoard',
  computed: {
    ...mapGetters([
      'getVillains',
      'getNextVillain'
    ])
  },
  methods: {
    ...mapActions([
      'shuffleVillains',
      'drawVillain'
    ])
  },
  mounted() {
    this.shuffleVillains();
    console.log(this.getVillains);
    console.log(this.getNextVillain);
    this.drawVillain();
    console.log(this.getVillains);
  }
}
</script>

<style scoped>
</style>
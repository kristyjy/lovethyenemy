<template>
  <div id="app">
    <GameBoard />
  </div>
</template>

<script>
import GameBoard from './components/GameBoard.vue'
import store from './store';

export default {
  name: 'app',
  store,
  components: {
    GameBoard
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  min-height: 100%;
}
</style>

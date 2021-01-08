<template>
  <div id="score">
    <h4>{{ " WINS: " + wins }}</h4>
    <h4>{{ " LOSSES: " + losses }}</h4>
    <h4>{{ " TIES: " + draws }}</h4>
  </div>
</template>

<script>
export default {
  name: "scoreboard-component",
  computed: {
    wins() {
      return this.$store.state.wins;
    },
    losses() {
      return this.$store.state.losses;
    },
    draws() {
      return this.$store.state.draws;
    }
  }
};
</script>

<style scoped>
#score {
  display: grid;
  align-items: left;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  width: 40%;
  margin-left: 30%;
  margin-top: 3vh;
  margin-bottom: 3vh;
  color: black;
  border: 1px solid black;
  border-radius: 5%;
  font-family: "Press Start 2P", cursive;
  letter-spacing: 3px;
}
</style>
<template>
  <div id="computer-container" v-if="selection.name != undefined">
    <h1>Computer:</h1>
    <img id="computer-photo" :src="selection.image" alt="computer selection" />
  </div>
</template>

<script>
export default {
  name: "computer-component",
  computed: {
    selection() {
      return this.$store.state.computerSelection;
    }
  }
};
</script>

<style scoped>
#computer-container {
  border: 1px solid black;
}
h1 {
  color: rgb(114, 27, 27);
  font-size: 46px;
}
#computer-photo {
  width: 60%;
  margin: 10px;
}
</style>
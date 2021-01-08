<template>
  <div id="user-container" v-if="selection.name != undefined">
    <h1>You:</h1>
    <img id="user-photo" :src="selection.image" alt="user selection" />
  </div>
</template>

<script>
export default {
  name: "player-component",
  computed: {
    selection() {
      return this.$store.state.userSelection;
    }
  }
};
</script>

<style scoped>
#user-container {
  border: 1px solid black;
}
h1 {
  color: rgb(114, 27, 27);
  font-size: 46px;
}
#user-photo {
  width: 60%;
  margin: 10px;
}
</style>
<template>
    <button type="button" class="button is-info" @click="logout">Sign Out</button>
</template>

<script>
export default {
    name: "LogoutButton",
    methods: {
        logout() {
            this.$store.commit("logout");
            this.$router.push({name: "login"});
        }
    }
}
</script>

<style scoped>
.button {
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 10%;
}
</style>
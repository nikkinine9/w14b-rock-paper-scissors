<template>
    <div id="login">
        <nav class="panel is-danger">
            <p class="panel-heading">
                Login
            </p>
            <div class="panel-block">
                <form @submit.prevent="login">
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input type="email" placeholder="use: eve.holt@reqres.in" class="input" v-model="email">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                            <input type="password" placeholder="any password will do..." class="input" v-model="password">
                        </div>
                    </div>
                    <div class="field">
                        <button type="submit" class="button is-primary">Sign-In</button>
                    </div>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
            axios.request({
                method: "post",
                url: "https://reqres.in/api/login",
                data: {
                    email: this.email,
                    password: this.password,
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    this.$store.commit("setToken", response.data.token);
                    this.$router.push({name: "game"})
                }
            });
        }
    }
};
</script>

<style lang="scss">
#login {
    .panel {
        text-align: center;
        max-width: 400px;
        margin: 5rem auto 0;

        form {
            width: 100%;
        }
    }
}
</style>
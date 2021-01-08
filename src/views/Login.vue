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
                    <div class="field" >
                        <label class="label">Password</label>
                        <div class="control">
                            <input type="password" placeholder="any password will do..." class="input" v-model="password">
                        </div>
                    </div>
                    <div class="field" v-if="errorText">
                        <p class="notification is-warning">{{ errorText }}</p>
                    </div>
                    <div class="field">
                        <button type="submit" class="button is-primary">
                            Sign-In
                            <i :class="[
                            'fas', 
                            [ loading ? 'fa-spinner fa-spin' : 'fa-sign-in-alt' ]
                            ]"></i>
                        </button>
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
            errorText: "",
            loading: false,
            password: "",
        }
    },
    created() {
      if(this.token) {
        this.$router.push({name: "game"});
      }
    },
    methods: {
        login() {
            this.loading = true,
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
                this.loading = false;
            })
            .catch((error) => {
                this.errorText = "Invalid username or password";
                console.log(error);
                this.loading = false;
            })
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
};

.button i {
    padding: 0.5rem;
}
</style>
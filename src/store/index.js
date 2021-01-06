import Vue from 'vue'
import Vuex from 'vuex'
import cookies from "vue-cookies"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: cookies.get("token")
    },
    mutations: {
        setToken(state, token) {
            cookies.set("token", token);
            state.token = token;
        }
    },
    actions: {},
    modules: {}
})
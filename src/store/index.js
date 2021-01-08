import Vue from 'vue'
import Vuex from 'vuex'
import cookies from "vue-cookies"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: cookies.get("token"),
        userSelection: {},
        computerSelection: {},
        wins: 0,
        draws: 0,
        losses: 0
    },
    mutations: {
        updateUser: function(state, userSelect) {
            state.userSelection = userSelect;
        },
        updateComputer: function(state, computerSelect) {
            state.computerSelection = computerSelect;
        },
        updateResults: function(state, results) {
            if (results == 1) {
                state.wins++;
            } else if (results == 0) {
                state.draws++;
            } else if (results == -1) {
                state.losses++;
            }
        },
        logout(state) {
            cookies.remove("token");
            state.token = null;
        },
        setToken(state, token) {
            cookies.set("token", token);
            state.token = token;
        }
    },
    actions: {},
    modules: {}
})
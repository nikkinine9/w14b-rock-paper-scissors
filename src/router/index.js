import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/views/Game.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "game",
        component: Game
    },
    {
        path: "/login",
        name: "login",
        component: Login
    }
];

const router = new VueRouter({
    routes
});

export default router
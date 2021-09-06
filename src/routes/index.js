import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Characters from "../components/characters/Characters";
import Episodes from "../components/episodes/Episodes";
import Quotes from "../components/quotes/Quotes";
import Deaths from "../components/deaths/Deaths";
import Character from "../components/characters/character/Character";

Vue.use(VueRouter)

const routes = [
    {
        path: `/`,
        name: `home`,
        component: Home,
    },
    {
        path: `/characters`,
        name: `characters`,
        component: Characters,
    },
    {
        path: `/characters/character/:id`,
        props: true,
        name: `character`,
        component: Character,
    },
    {
        path: `/episodes`,
        name: `episodes`,
        component: Episodes,
    },
    {
        path: `/quotes`,
        name: `quotes`,
        component: Quotes,
    },
    {
        path: `/deaths`,
        name: `deaths`,
        component: Deaths,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
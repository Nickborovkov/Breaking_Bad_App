import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/routedPages/homePage/Home";
import Characters from "../components/routedPages/characters/Characters";
import Episodes from "../components/routedPages/episodes/Episodes";
import Quotes from "../components/routedPages/quotes/Quotes";
import Deaths from "../components/routedPages/deaths/Deaths";
import Character from "../components/routedPages/characters/character/Character";

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
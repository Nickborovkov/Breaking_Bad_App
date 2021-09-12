import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/routedPages/homePage/Home";
import Characters from "../components/routedPages/characters/Characters";
import Episodes from "../components/routedPages/episodes/Episodes";
import Quotes from "../components/routedPages/quotes/Quotes";
import Deaths from "../components/routedPages/deaths/Deaths";
import Page404 from "../common/page404/Page404";
import CharacterById from "../components/routedPages/characters/characterById/CharacterById";

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
        component: CharacterById,
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
    {
        path: `*`,
        name: `404`,
        component: Page404,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
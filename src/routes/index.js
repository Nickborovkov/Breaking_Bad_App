import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/homePage/Home";

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
        component: () => import(/*webpackChunkName: "Characters"*/`../components/characters/Characters`),
    },
    {
        path: `/characters/character/:id`,
        props: true,
        name: `character`,
        component: () => import(/*webpackChunkName: "CharactersById"*/`../components/characters/characterById/CharacterById`),
    },
    {
        path: `/episodes`,
        props: true,
        name: `episodes`,
        component: () => import(/*webpackChunkName: "Episodes"*/`../components/episodes/Episodes`),
    },
    {
        path: `/quotes`,
        name: `quotes`,
        component: () => import(/*webpackChunkName: "Quotes"*/`../components/quotes/Quotes`),
    },
    {
        path: `/deaths`,
        name: `deaths`,
        component: () => import(/*webpackChunkName: "Deaths"*/`../components/deaths/Deaths`),
    },
    {
        path: `*`,
        name: `404`,
        component: () => import(/*webpackChunkName: "ErrorPage"*/`../components/common/page404/Page404`),
    },
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router

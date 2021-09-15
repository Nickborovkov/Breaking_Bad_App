import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/routedPages/homePage/Home";

// lazy loading

const Characters = resolve => {
    require.ensure([`../components/routedPages/characters/Characters`], () => {
        resolve(
            require(`../components/routedPages/characters/Characters`)
        )
    })
}
const Episodes = resolve => {
    require.ensure([`../components/routedPages/episodes/Episodes`], () => {
        resolve(
            require(`../components/routedPages/episodes/Episodes`)
        )
    })
}
const Quotes = resolve => {
    require.ensure([`../components/routedPages/quotes/Quotes`], () => {
        resolve(
            require(`../components/routedPages/quotes/Quotes`)
        )
    })
}
const Deaths = resolve => {
    require.ensure([`../components/routedPages/deaths/Deaths`], () => {
        resolve(
            require(`../components/routedPages/deaths/Deaths`)
        )
    })
}
const Page404 = resolve => {
    require.ensure([`../common/page404/Page404`], () => {
        resolve(
            require(`../common/page404/Page404`)
        )
    })
}
const CharacterById = resolve => {
    require.ensure([`../components/routedPages/characters/characterById/CharacterById`], () => {
        resolve(
            require(`../components/routedPages/characters/characterById/CharacterById`)
        )
    })
}

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
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
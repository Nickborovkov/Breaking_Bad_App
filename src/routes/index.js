import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/homePage/Home";

// lazy loading

const Characters = resolve => {
    require.ensure([`../components/characters/Characters`], () => {
        resolve(
            require(`../components/characters/Characters`)
        )
    })
}
const Episodes = resolve => {
    require.ensure([`../components/episodes/Episodes`], () => {
        resolve(
            require(`../components/episodes/Episodes`)
        )
    })
}
const Quotes = resolve => {
    require.ensure([`../components/quotes/Quotes`], () => {
        resolve(
            require(`../components/quotes/Quotes`)
        )
    })
}
const Deaths = resolve => {
    require.ensure([`../components/deaths/Deaths`], () => {
        resolve(
            require(`../components/deaths/Deaths`)
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
    require.ensure([`../components/characters/characterById/CharacterById`], () => {
        resolve(
            require(`../components/characters/characterById/CharacterById`)
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
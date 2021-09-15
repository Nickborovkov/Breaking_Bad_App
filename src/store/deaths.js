import {deathsAPI} from "../serverRequests/serverRequests";

export default {
    state: {
        deaths: []
    },
    mutations: {
        setDeaths (state, deaths) {
            state.deaths = deaths
        }
    },
    actions: {
        async getDeaths ({commit}) {
            commit(`setLoading`, true)
            const response = await deathsAPI.requestAllDeaths()
            commit(`setLoading`, false)
            commit(`setDeaths`, response.data)
        },
        async getDeathsByName ({commit}, name) {
            commit(`setLoading`, true)
            const response = await deathsAPI.requestDeathByName(name)
            commit(`setLoading`, false)
            commit(`setDeaths`, response.data)
        },
        async getCharacterDeathsCount ({commit}, name) {
            commit(`setLoading`, true)
            const response = await deathsAPI.requestDeathCount(name)
            commit(`setLoading`, false)
            commit(`setDeaths`, response.data)
        },
        async getRandomDeath ({commit}) {
            commit(`setLoading`, true)
            const response = await deathsAPI.requestRandomDeath()
            commit(`setLoading`, false)
            commit(`setDeaths`, response.data)
        }
    },
    getters: {
        getDeaths (state) {
            return state.deaths
        }
    },
}
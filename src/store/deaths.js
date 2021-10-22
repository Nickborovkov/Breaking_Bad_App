import {deathsAPI} from "../API/serverRequests";

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
            try {
                commit(`setLoading`, true)
                const response = await deathsAPI.requestAllDeaths()
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setDeaths`, response.data)
                }else {
                    commit(`setError`, `No result`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        },
        async getDeathsByName ({commit}, name) {
            try {
                commit(`setLoading`, true)
                const response = await deathsAPI.requestDeathByName(name)
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setDeaths`, response.data)
                }else {
                    commit(`setError`, `No result`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        },
        async getCharacterDeathsCount ({commit}, name) {
            try {
                commit(`setLoading`, true)
                const response = await deathsAPI.requestDeathCount(name)
                commit(`setLoading`, false)
                if(response.data[0].deathCount > 0) {
                    commit(`setError`, null)
                    commit(`setDeaths`, response.data)
                }else {
                    commit(`setError`, `No result`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        },
        async getRandomDeath ({commit}) {
            try {
                commit(`setLoading`, true)
                const response = await deathsAPI.requestRandomDeath()
                commit(`setLoading`, false)
                commit(`setError`, null)
                commit(`setDeaths`, response.data)
                commit(`setError`, `No result`)
            }catch (error) {
                commit(`setError`, error.message)
            }
        }
    },
    getters: {
        getDeaths (state) {
            return state.deaths
        }
    },
}

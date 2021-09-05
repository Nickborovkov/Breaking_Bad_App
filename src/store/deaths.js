import {breakingBadApi} from "../serverRequests/serverRequests";

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
            const response = await breakingBadApi.requestDeaths()
            commit(`setDeaths`, response.data)
        }
    },
    getters: {
        getDeaths (state) {
            return state.deaths
        }
    },
}
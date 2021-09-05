import {breakingBadApi} from "../serverRequests/serverRequests";

export default {
    state: {
        episodes: []
    },
    mutations: {
        setEpisodes (state, episodes) {
            state.episodes = episodes
        }
    },
    actions: {
        async getEpisodes ({commit}) {
            const response = await breakingBadApi.requestEpisodes()
            commit(`setEpisodes`, response.data)
        }
    },
    getters: {
        getEpisodes (state) {
            return state.episodes
        }
    },
}
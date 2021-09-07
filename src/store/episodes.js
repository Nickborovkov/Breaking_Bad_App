import {episodesAPI} from "../serverRequests/serverRequests";

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
            const response = await episodesAPI.requestAllEpisodes()
            commit(`setEpisodes`, response.data)
        }
    },
    getters: {
        getEpisodes (state) {
            return state.episodes
        }
    },
}
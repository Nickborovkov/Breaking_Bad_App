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
        async getEpisodesBySeries ({commit}, series) {
            commit(`setLoading`, true)
            const response = await episodesAPI.requestEpisodesBySeries(series)
            commit(`setLoading`, false)
            commit(`setEpisodes`, response.data)
        },
        async getAllEpisodes ({commit}) {
            commit(`setLoading`, true)
            const response = await episodesAPI.requestAllEpisodes()
            commit(`setLoading`, false)
            commit(`setEpisodes`, response.data)
        },
    },
    getters: {
        getEpisodes (state) {
            return state.episodes
        }
    },
}
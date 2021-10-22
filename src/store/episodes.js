import {episodesAPI} from "../API/serverRequests";

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
        async getEpisodesBySeason({commit}, payload) {
            commit(`setLoading`, true)
            const response = await episodesAPI.requestEpisodesBySeries(payload.series)
            commit(`setLoading`, false)
            commit(`setEpisodes`, response.data.filter(item => item.season == payload.season))
        },
    },
    getters: {
        getEpisodes (state) {
            return state.episodes
        }
    },
}

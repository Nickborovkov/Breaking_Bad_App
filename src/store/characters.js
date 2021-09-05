import {breakingBadApi} from "../serverRequests/serverRequests";

export default {
    state: {
        characters: []
    },
    mutations: {
        setCharacters (state, characters) {
            state.characters = characters
        }
    },
    actions: {
        async getCharacters ({commit}) {
            const response = await breakingBadApi.requestCharacters()
            commit(`setCharacters`, response.data)
        }
    },
    getters: {
        getCharacters (state) {
            return state.characters
        }
    },
}
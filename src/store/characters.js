import {charactersAPI} from "../API/serverRequests";

export default {
    state: {
        characters: [],
        specificCharacter: null,
    },
    mutations: {
        setCharacters (state, characters) {
            state.characters = characters
        },
        setSpecificCharacter (state, character) {
            state.specificCharacter = character
        },
    },
    actions: {
        async getRandomCharacters ({commit}, count) {
            try {
                commit(`setLoading`, true)
                const response = await charactersAPI.requestRandomCharacters(count)
                commit(`setLoading`, false)
                if(response.data.length > 0){
                    commit(`setError`, null)
                    commit(`setCharacters`, response.data)
                }else{
                    commit(`setError`, `No results`)
                }

            }catch (error) {
                commit(`setError`, error.message)
            }

        },
        async getCharactersByName ({commit}, characters) {
            try {
                commit(`setLoading`, true)
                const response = await charactersAPI.requestCharactersByName(characters)
                commit(`setLoading`, false)
                if(response.data.length > 0){
                    commit(`setError`, null)
                    commit(`setCharacters`, response.data)
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }

        },
        async getCharactersById ({commit}, id) {
            try {
                commit(`setLoading`, true)
                const response = await charactersAPI.requestCharactersByid(id)
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setSpecificCharacter`, response.data[0])
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }

        },
        async getAllCharacters ({commit}) {
            try {
                commit(`setLoading`, true)
                const response = await charactersAPI.requestAllCharacters()
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setCharacters`, response.data)
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }

        },
    },
    getters: {
        getCharacters (state) {
            return state.characters
        },
        getSpecificCharacter (state) {
            return state.specificCharacter
        },
    },
}

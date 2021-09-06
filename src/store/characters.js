import {charactersAPI} from "../serverRequests/serverRequests";

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
        }
    },
    actions: {
        async getRandomCharacters ({commit}, count) {
            const response = await charactersAPI.requestRandomCharacters(count)
            commit(`setCharacters`, response.data)
        },
        async getCharactersByName ({commit}, characters) {
            const response = await charactersAPI.requestCharactersByName(characters)
            commit(`setCharacters`, response.data)
        },
        async getCharactersById ({commit}, id) {
            const response = await charactersAPI.requestCharactersByid(id)
            commit(`setSpecificCharacter`, response.data[0])
        }
    },
    getters: {
        getCharacters (state) {
            return state.characters
        },
        getSpecificCharacter (state) {
            return state.specificCharacter
        }
    },
}
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
        },
    },
    actions: {
        async getRandomCharacters ({commit}, count) {
            commit(`setLoading`, true)
            const response = await charactersAPI.requestRandomCharacters(count)
            commit(`setLoading`, false)
            commit(`setCharacters`, response.data)
        },
        async getCharactersByName ({commit}, characters) {
            commit(`setLoading`, true)
            const response = await charactersAPI.requestCharactersByName(characters)
            commit(`setLoading`, false)
            commit(`setCharacters`, response.data)
        },
        async getCharactersById ({commit}, id) {
            commit(`setLoading`, true)
            const response = await charactersAPI.requestCharactersByid(id)
            commit(`setLoading`, false)
            commit(`setSpecificCharacter`, response.data[0])
        },
        async getAllCharacters ({commit}) {
            commit(`setLoading`, true)
            const response = await charactersAPI.requestAllCharacters()
            commit(`setLoading`, false)
            commit(`setCharacters`, response.data)
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
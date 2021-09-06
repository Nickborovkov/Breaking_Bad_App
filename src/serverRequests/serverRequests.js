import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/'
})


export const charactersAPI = {
    requestCharactersByName (name) {
        return axiosConfig.get(`characters?name=${name}`)
    },
    requestCharactersByid (id) {
        return axiosConfig.get(`characters/${id}`)
    },
    requestRandomCharacters (count) {
        return axiosConfig.get(`character/random?limit=${count}`)
    },
}


export const breakingBadApi = {

    requestEpisodes () {
        return axiosConfig.get('episodes')
    },
    requestQuotes () {
        return axiosConfig.get('quotes')
    },
    requestDeaths () {
        return axiosConfig.get('deaths')
    },
}
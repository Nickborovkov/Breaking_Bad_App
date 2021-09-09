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
    requestAllCharacters () {
        return axiosConfig.get(`characters`)
    },
}

export const episodesAPI = {
    requestEpisodesBySeries (series) {
        return axiosConfig.get(`episodes?series=${series}`)
    },
    requestAllEpisodes () {
        return axiosConfig.get(`episodes`)
    },
}
export const quotesAPI = {
    requestQuotesByAuthor (author) {
        return axiosConfig.get(`quote?author=${author}`)
    },
    requestQuotesBySeries (series) {
        return axiosConfig.get(`quotes?series=${series}`)
    },
    requestAllQuotes () {
        return axiosConfig.get(`quotes`)
    },
}
export const deathsAPI = {
    requestDeathByName (name) {
        return axiosConfig.get(`death?name=${name}`)
    },
    requestDeathCount (name) {
        return axiosConfig.get(`death-count?name=${name}`)
    },
    requestAllDeaths () {
        return axiosConfig.get(`deaths`)
    },
}
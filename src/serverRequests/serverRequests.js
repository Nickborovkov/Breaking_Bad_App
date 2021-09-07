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
    requestAllEpisodes () {
        return axiosConfig.get('episodes')
    },
}
export const quotesAPI = {
    requestAllQuotes () {
        return axiosConfig.get('quotes')
    },
}
export const deathsAPI = {
    requestAllDeaths () {
        return axiosConfig.get('deaths')
    },
}
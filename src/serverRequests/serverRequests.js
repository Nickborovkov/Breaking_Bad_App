import axios from "axios";

const axiosConfig = axios.create({
    baseURL: 'https://www.breakingbadapi.com/api/'
})

export const breakingBadApi = {
    requestCharacters () {
        return axiosConfig.get('characters')
    },
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
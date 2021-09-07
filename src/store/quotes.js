import {quotesAPI} from "../serverRequests/serverRequests";

export default {
    state: {
        quotes: [],
    },
    mutations: {
        setQuotes (state, quotes) {
            state.quotes = quotes
        }
    },
    actions: {
        async getQuotes ({commit}) {
            const response = await quotesAPI.requestAllQuotes()
            commit(`setQuotes`, response.data)
        }
    },
    getters: {
        getQuotes (state) {
            return state.quotes
        }
    },
}
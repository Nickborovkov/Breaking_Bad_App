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
        async getQuotesByAuthor ({commit}, author) {
            commit(`setLoading`, true)
            const response = await quotesAPI.requestQuotesByAuthor(author)
            commit(`setLoading`, false)
            commit(`setQuotes`, response.data)
        },
        async getQuotesBySeries ({commit}, series) {
            commit(`setLoading`, true)
            const response = await quotesAPI.requestQuotesBySeries(series)
            commit(`setLoading`, false)
            commit(`setQuotes`, response.data)
        },
        async getAllQuotes ({commit}) {
            commit(`setLoading`, true)
            const response = await quotesAPI.requestAllQuotes()
            commit(`setLoading`, false)
            commit(`setQuotes`, response.data)
        },
        async getRandomQuote ({commit}) {
            commit(`setLoading`, true)
            const response = await quotesAPI.requestRandomQuote()
            commit(`setLoading`, false)
            commit(`setQuotes`, response.data[0])
        }
    },
    getters: {
        getQuotes (state) {
            return state.quotes
        }
    },
}
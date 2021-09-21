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
            try {
                commit(`setLoading`, true)
                const response = await quotesAPI.requestQuotesByAuthor(author)
                commit(`setLoading`, false)
                if(response.data.length > 0){
                    commit(`setError`, null)
                    commit(`setQuotes`, response.data)
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        },
        async getQuotesBySeries ({commit}, series) {
            try {
                commit(`setLoading`, true)
                const response = await quotesAPI.requestQuotesBySeries(series)
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setQuotes`, response.data)
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        },
        async getAllQuotes ({commit}) {
            try {
                commit(`setLoading`, true)
                const response = await quotesAPI.requestAllQuotes()
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setQuotes`, response.data)
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        },
        async getRandomQuote ({commit}) {
            try {
                commit(`setLoading`, true)
                const response = await quotesAPI.requestRandomQuote()
                commit(`setLoading`, false)
                if(response.data.length > 0) {
                    commit(`setError`, null)
                    commit(`setQuotes`, response.data[0])
                }else {
                    commit(`setError`, `No results`)
                }
            }catch (error) {
                commit(`setError`, error.message)
            }
        }
    },
    getters: {
        getQuotes (state) {
            return state.quotes
        }
    },
}
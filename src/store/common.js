export default {
    state: {
        error: null,
        isLoading: false
    },
    mutations: {
        setError (state, error) {
            state.error = error
        },
        setLoading (state, isLoading) {
            state.isLoading = isLoading
        }
    },
    getters: {
        getLoading (state) {
            return state.isLoading
        }
    },
}
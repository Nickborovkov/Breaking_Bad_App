<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">QUOTES</h1>

        <v-layout justify-center class="mb-5">
            <v-flex xs12 md8>

                <appSearchForm formLabel="Enter name to see character's quotes"
                               formHint="Note, that endpoint works only with full names like: 'Walter White or Mike Ehrmantraut'"
                               :getItems="getQuotesByAuthor"
                               parentType="fullName"></appSearchForm>

                <!--More actions button-->
                <v-layout justify-center>
                    <v-btn
                            color="green"
                            @click="more = !more"
                    >
                        <v-icon left v-if="more">mdi-close</v-icon>
                        <v-icon left v-else>mdi-chevron-down</v-icon>
                        {{more ? `Close actions` : `More actions`}}
                    </v-btn>
                </v-layout>

                <!--Additional actions-->
                <v-layout class="ma-2" justify-center wrap v-if="more">

                    <v-btn
                            class="ma-2"
                            color="green"
                            small
                            @click="getAllQuotes"
                    >
                        <v-icon left>mdi-view-list</v-icon>
                        Show all quotes
                    </v-btn>

                    <v-btn
                            class="ma-2"
                            small
                            color="green"
                            @click="getBreakingBadQuotes"
                    >
                        <v-icon left>mdi-flask</v-icon>
                        Show all Breaking Bad quotes
                    </v-btn>

                    <v-btn
                            class="ma-2"
                            color="green"
                            small
                            @click="getBetterCallSaulQuotes"
                    >
                        <v-icon left>mdi-pistol</v-icon>
                        Show all Better Call Saul quotes
                    </v-btn>
                </v-layout>

            </v-flex>
        </v-layout>

        <!--Preloader component-->
        <appPreloader v-if="isLoading"></appPreloader>

        <!--Error case-->
        <v-card
                v-if="error"
                color="error"
                class="ma-10 pt-6 pb-6"
        >
            <h2 class="text-center">No results found</h2>
        </v-card>

        <!--Rendering quotes items-->
        <v-layout v-else wrap justify-center>
            <v-flex xs12 sm4
                    :key="quote.quote_id"
                    v-for="quote in quotesList"
            >
                <appQuoteItem :quote="quote"></appQuoteItem>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    import SearchForm from "../../common/searchForm/SearchForm";
    import Preloader from "../../common/preloader/Preloader";
    import QuoteItem from "./quoteItem/QuoteItem";

    export default {
        data () {
            return {
                more: false,
            }
        },
        components: {
            appSearchForm: SearchForm,
            appPreloader: Preloader,
            appQuoteItem: QuoteItem,
        },
        created() {
            this.$store.commit(`setError`, null)
            this.$store.dispatch(`getQuotesBySeries`, `Breaking+Bad`)
        },
        computed: {
            quotesList () {
                return this.$store.getters.getQuotes
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
            error() {
                return this.$store.getters.getError
            },
        },
        methods: {
            getAllQuotes () {
                this.$store.dispatch(`getAllQuotes`)
                this.more = false
            },
            getBreakingBadQuotes () {
                this.$store.dispatch(`getQuotesBySeries`, `Breaking+Bad`)
                this.more = false
            },
            getBetterCallSaulQuotes () {
                this.$store.dispatch(`getQuotesBySeries`, `Better+Call+Saul`)
                this.more = false
            },
            getQuotesByAuthor (author) {
                this.$store.dispatch(`getQuotesByAuthor`, author)
            }
        },

    }

</script>
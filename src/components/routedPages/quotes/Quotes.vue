<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">QUOTES</h1>

        <appSearchForm formLabel="Enter Character name to see his quotes"
                       :getItems="getQuotesByAuthor"></appSearchForm>

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

        <v-layout class="ma-2" justify-center wrap v-if="more">
                <v-btn
                        class="ma-2"
                        color="green"
                        small
                        @click="getAllQuotes"
                >
                    Show all quotes
                </v-btn>
                <v-btn
                        class="ma-2"
                        small
                        color="green"
                        @click="getBreakingBadQuotes"
                >
                    Show all Breaking Bad quotes
                </v-btn>
                <v-btn
                        class="ma-2"
                        color="green"
                        small
                        @click="getBetterCallSaulQuotes"
                >
                    Show all Better Call Saul quotes
                </v-btn>
        </v-layout>

        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout v-else wrap justify-center>
            <v-flex xs12 sm4
                    :key="quote.quote_id"
                    v-for="quote in quotesList">
                <v-card class="ma-3" height="350">
                    <v-card-title>
                        Quote:
                    </v-card-title>

                    <v-card-subtitle>
                        {{quote.quote}}
                    </v-card-subtitle>

                    <v-card-title>
                        Author:
                    </v-card-title>

                    <v-card-subtitle>
                        {{quote.author}}
                    </v-card-subtitle>

                    <v-card-title>
                        Series:
                    </v-card-title>

                    <v-card-subtitle>
                        {{quote.series}}
                    </v-card-subtitle>

                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    import SearchForm from "../../../common/searchForm/SearchForm";
    import Preloader from "../../../common/preloader/Preloader";

    export default {
        data () {
            return {
                more: false
            }
        },
        computed: {
            quotesList () {
                return this.$store.getters.getQuotes
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
        },
        created() {
            this.$store.dispatch(`getQuotesBySeries`, `Breaking+Bad`)
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
        components: {
            appSearchForm: SearchForm,
            appPreloader: Preloader,
        }
    }

</script>
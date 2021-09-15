<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">QUOTES</h1>

        <v-layout justify-center class="mb-5">
            <v-flex xs12 md8>

                <appSearchForm formLabel="Enter name to see character's quotes"
                               formHint="Note, that endpoint works only with full names like: 'Walter White or Mike Ehrmantraut'"
                               :getItems="getQuotesByAuthor"
                               parentType="fullName"></appSearchForm>

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

        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout v-else wrap justify-center>
            <v-flex xs12 sm4
                    :key="quote.quote_id"
                    v-for="quote in quotesList">

                <v-lazy height="400"
                        :options="{threshold: .2}"
                        transition="fade-transition">
                    <v-card elevation="12" class="ma-3" height="350">
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
                </v-lazy>


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
                more: false,
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
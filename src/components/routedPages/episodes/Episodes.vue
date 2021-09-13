<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">EPISODES</h1>

        <v-layout wrap justify-center class="mb-5">
            <v-btn xs12 md6
                    color="green"
                    @click="brBadShow"
                    class="ma-2"
            >
                <v-icon left v-if="!breakingBadSeasons">mdi-flask</v-icon>
                <v-icon left v-if="breakingBadSeasons">mdi-close</v-icon>
                Breaking Bad Episodes
            </v-btn>

            <v-btn xs12 md6
                    color="green"
                    @click="betSaulShow"
                    class="ma-2"
            >
                <v-icon left v-if="!betterCallSaulSeasons">mdi-pistol</v-icon>
                <v-icon left v-if="betterCallSaulSeasons">mdi-close</v-icon>
                Better Call Saul episodes
            </v-btn>
        </v-layout>


        <v-layout wrap justify-center v-if="breakingBadSeasons">
            <v-btn color="green"
                   class="ma-1"
                   small
                   @click="getBreakingBadEpisodes">All
            </v-btn>
            <v-btn :key="btn"
                   class="ma-1"
                   small
                   v-for="btn in 5"
                   @click="getEpisodesBySeason(`Breaking+Bad`, btn)"
                   color="green">Season {{btn}}
            </v-btn>

        </v-layout>

        <v-layout wrap justify-center v-if="betterCallSaulSeasons">
                <v-btn color="green"
                       class="ma-1"
                       small
                       @click="getBetterCallSaulEpisodes">All</v-btn>
                <v-btn :key="btn"
                       class="ma-1"
                       v-for="btn in 4"
                       small
                       @click="getEpisodesBySeason(`Better+Call+Saul`, btn)"
                       color="green">Season {{btn}}</v-btn>
        </v-layout>


        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout
                v-else
                wrap
                justify-center
        >
            <v-flex xs12 sm4
                    :key="episode.episode_id"
                    v-for="episode in episodesList">
                <v-card class="ma-3 pa-3" elevation="8">
                    <v-card-title>
                        Episode name:
                    </v-card-title>
                    <v-card-subtitle>
                        {{episode.title}}
                    </v-card-subtitle>

                    <v-card-title>
                        Series:
                    </v-card-title>
                    <v-card-subtitle>
                        {{episode.series}}
                    </v-card-subtitle>

                    <v-card-title>
                        Season:
                    </v-card-title>

                    <v-card-subtitle>
                        {{episode.season}}
                    </v-card-subtitle>

                    <v-card-title>
                        Episode number:
                    </v-card-title>
                    <v-card-subtitle>
                        {{episode.episode}}
                    </v-card-subtitle>

                    <v-dialog width="800">
                        <template v-slot:activator="{ on, attrs }">
                            <v-layout justify-center>
                                <v-btn
                                        color="green"
                                        v-bind="attrs"
                                        v-on="on"
                                >
                                    More info
                                </v-btn>
                            </v-layout>

                        </template>

                        <v-card>

                            <v-card-title>
                                Episode name:
                            </v-card-title>
                            <v-card-subtitle>
                                {{episode.title}}
                            </v-card-subtitle>

                            <v-card-title>
                                Series:
                            </v-card-title>
                            <v-card-subtitle>
                                {{episode.series}}
                            </v-card-subtitle>

                            <v-card-title>
                                Episode number:
                            </v-card-title>
                            <v-card-subtitle>
                                {{episode.episode}}
                            </v-card-subtitle>

                            <v-card-title>
                                Season:
                            </v-card-title>

                            <v-card-subtitle>
                                {{episode.season}}
                            </v-card-subtitle>

                            <v-card-title>
                                Episode date:
                            </v-card-title>

                            <v-card-subtitle>
                                {{episode.air_date}}
                            </v-card-subtitle>

                            <v-card-title>
                                Episode series:
                            </v-card-title>

                            <v-card-subtitle>
                                {{episode.series}}
                            </v-card-subtitle>

                            <v-card-title>
                                Episode Characters:
                            </v-card-title>

                            <v-card-subtitle>
                                <p :key="character" v-for="character in episode.characters">{{character}}</p>
                            </v-card-subtitle>
                        </v-card>

                    </v-dialog>

                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    import Preloader from "../../../common/preloader/Preloader";

    export default {
        data () {
            return {
                breakingBadSeasons: false,
                betterCallSaulSeasons: false,
            }
        },
        computed: {
            episodesList() {
                return this.$store.getters.getEpisodes
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
        },
        created() {
            this.$store.dispatch(`getEpisodesBySeason`, {series:`Breaking+Bad`, season:1})
        },
        methods: {
            getBreakingBadEpisodes() {
                this.$store.dispatch(`getEpisodesBySeries`, `Breaking+Bad`)
                this.breakingBadSeasons = false
            },
            getBetterCallSaulEpisodes() {
                this.$store.dispatch(`getEpisodesBySeries`, `Better+Call+Saul`)
                this.betterCallSaulSeasons = false
            },
            brBadShow () {
                this.breakingBadSeasons = !this.breakingBadSeasons
                this.betterCallSaulSeasons = false
            },
            betSaulShow () {
                this.betterCallSaulSeasons = !this.betterCallSaulSeasons
                this.breakingBadSeasons = false
            },
            getEpisodesBySeason (series, season) {
                this.$store.dispatch(`getEpisodesBySeason`, {series, season})
                this.breakingBadSeasons = false
                this.betterCallSaulSeasons = false
            }
        },
        components: {
            appPreloader: Preloader,
        }
    }

</script>
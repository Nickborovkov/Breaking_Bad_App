<template>
    <v-container>
        <h1>EPISODES</h1>

        <v-btn
                color="green"
                @click="getBreakingBadEpisodes"
        >Breaking Bad Episodes
        </v-btn>
        <v-btn
                color="green"
                @click="getBetterCallSaulEpisodes"
        >Better Call Saul episodes
        </v-btn>

        <v-container>
            <v-row>
                <v-btn :key="btn" v-for="btn in 5" color="green">Season {{btn}}</v-btn>
            </v-row>
        </v-container>

        <v-container>
            <v-row>
                <v-btn :key="btn" v-for="btn in 4" color="green">Season {{btn}}</v-btn>
            </v-row>
        </v-container>


        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout
                v-else
                wrap
        >
            <v-flex xs12 sm4
                    :key="episode.episode_id"
                    v-for="episode in episodesList">
                <v-card class="ma-3">
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

                    <v-dialog width="800">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                    color="green"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                More info
                            </v-btn>
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
        computed: {
            episodesList() {
                return this.$store.getters.getEpisodes
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
        },
        created() {
            this.$store.dispatch(`getAllEpisodes`)
        },
        methods: {
            getBreakingBadEpisodes() {
                this.$store.dispatch(`getEpisodesBySeries`, `Breaking+Bad`)
            },
            getBetterCallSaulEpisodes() {
                this.$store.dispatch(`getEpisodesBySeries`, `Better+Call+Saul`)
            },
        },
        components: {
            appPreloader: Preloader,
        }
    }

</script>

<style scoped>

</style>
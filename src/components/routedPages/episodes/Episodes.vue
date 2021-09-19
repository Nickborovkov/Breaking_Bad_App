<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">EPISODES</h1>

        <!--Choose series buttons-->
        <v-layout wrap justify-center class="mt-5 mb-5">
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

        <!--Choose season buttons-->
        <!--Choose Breaking Bad season-->
        <v-layout wrap justify-center v-if="breakingBadSeasons" class="mb-5">
            <v-btn color="green"
                   class="ma-1"
                   small
                   @click="getBreakingBadEpisodes">
                All
                <v-icon right>mdi-format-list-text</v-icon>
            </v-btn>
            <v-btn :key="btn"
                   class="ma-1"
                   small
                   v-for="btn in 5"
                   @click="getEpisodesBySeason(`Breaking+Bad`, btn)"
                   color="green">Season
                <v-icon right>mdi-numeric-{{btn}}-box-outline</v-icon>
            </v-btn>
        </v-layout>

        <!--Choose Better Call Saul season-->
        <v-layout wrap justify-center v-if="betterCallSaulSeasons" class="mb-5">
                <v-btn color="green"
                       class="ma-1"
                       small
                       @click="getBetterCallSaulEpisodes">
                    All
                    <v-icon right>mdi-format-list-text</v-icon>
                </v-btn>
                <v-btn :key="btn"
                       class="ma-1"
                       v-for="btn in 4"
                       small
                       @click="getEpisodesBySeason(`Better+Call+Saul`, btn)"
                       color="green">
                    Season
                    <v-icon right>mdi-numeric-{{btn}}-box-outline</v-icon>
                </v-btn>
        </v-layout>

        <!--Preloader component-->
        <appPreloader v-if="isLoading"></appPreloader>

        <!--Items rendering-->
        <v-layout
                v-else
                wrap
                justify-center
        >
            <v-flex
                    xs12 sm4
                    :key="episode.episode_id"
                    v-for="episode in episodesList"
            >
                <appEpisodeItem :episode="episode"></appEpisodeItem>
            </v-flex>

        </v-layout>

    </v-container>
</template>

<script>

    import Preloader from "../../../common/preloader/Preloader";
    import EpisodeItem from "./episodeItem/EpisodeItem";

    export default {
        data () {
            return {
                breakingBadSeasons: false,
                betterCallSaulSeasons: false,
            }
        },
        components: {
            appPreloader: Preloader,
            appEpisodeItem: EpisodeItem
        },
        created() {
            this.$store.dispatch(`getEpisodesBySeason`, {series:`Breaking+Bad`, season:1})
        },
        computed: {
            episodesList() {
                return this.$store.getters.getEpisodes
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
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
        }
    }

</script>
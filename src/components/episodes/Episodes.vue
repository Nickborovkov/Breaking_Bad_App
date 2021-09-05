<template>
    <v-container>
        <h1>EPISODES</h1>

        <v-layout wrap>
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
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    export default {
        computed: {
            episodesList () {
                return this.$store.getters.getEpisodes
            },
        },
        created() {
            this.$store.dispatch(`getEpisodes`)
        }
    }

</script>

<style scoped>

</style>
<template>
    <v-container>
            <v-lazy
                    height="450"
                    :options="{threshold: .2}"
                    transition="fade-transition"
            >
                <v-card elevation="12" class="ma-3 pa-3">
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

                    <v-dialog width="700">
                        <template v-slot:activator="{ on, attrs }">
                            <v-layout justify-center>
                                <v-btn
                                        color="green"
                                        v-bind="attrs"
                                        v-on="on"
                                >
                                    <v-icon left>mdi-chevron-down</v-icon>
                                    More info
                                </v-btn>
                            </v-layout>

                        </template>

                        <v-card>
                            <v-container :key="item.title" v-for="item in episodeParams">
                                <v-card-title>{{item.title}}</v-card-title>
                                <v-card-subtitle>{{item.inner}}</v-card-subtitle>
                            </v-container>
                        </v-card>

                    </v-dialog>

                </v-card>
            </v-lazy>
    </v-container>
</template>

<script>
    export default {
        props: {
            episode: Object
        },
        computed: {
            episodeParams () {
                return [
                    {title: `Episode name:`, inner: this.episode.title},
                    {title: `Series:`, inner: this.episode.series},
                    {title: `Episode number:`, inner: this.episode.episode},
                    {title: `Season:`, inner: this.episode.season},
                    {title: `Episode date:`, inner: this.episode.air_date},
                    {title: `Episode series:`, inner: this.episode.series},
                    {title: `Episode Characters:`, inner: this.episode.characters},
                ]
            }
        }
    }
</script>
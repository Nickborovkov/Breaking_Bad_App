<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">DEATHS</h1>

        <v-layout justify-center class="mb-5">
            <v-flex xs12 md8>

                <appSearch
                        formLabel="Enter name to see character's death info"
                        formHint="Note, that endpoint works only with full names like: 'Walter White or Mike Ehrmantraut'"
                        :getItems="getDeathsByName"
                        parentType="fullName"></appSearch>

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

                <v-container v-if="more">
                    <appSearch
                            formLabel="Enter name to see character's committed deaths"
                            formHint="Note, that endpoint works only with full names like: 'Walter White or Jesse Pinkman'"
                            :getItems="getCharacterDeathsCount"
                            parentType="fullName"></appSearch>

                    <v-layout justify-center>
                        <v-btn
                                color="green"
                                small
                                @click="getAllDeaths"
                        >
                            <v-icon left>mdi-skull-outline</v-icon>
                            Get all deaths
                        </v-btn>
                    </v-layout>

                </v-container>


            </v-flex>
        </v-layout>

        <appPreloader v-if="isLoading && count"></appPreloader>

        <v-layout v-else-if="!isLoading && count" wrap justify-center>
            <v-flex xs12 sm4 :key="death" v-for="death in deathsList">
                <v-card elevation="12">
                    <v-card-title class="text-capitalize">{{death.name}}</v-card-title>
                    <v-card-subtitle>Killed {{death.deathCount}} people</v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>

        <appPreloader v-if="isLoading && !count"></appPreloader>

        <v-layout v-else-if="!isLoading && !count" wrap justify-center>
            <v-flex xs12 sm4
                    :key="death.death_id"
                    v-for="death in deathsList">
                <v-lazy height="650"
                        :options="{threshold: .2}"
                        transition="fade-transition">
                    <v-card elevation="12" class="ma-3">
                        <v-card-title>
                            Death:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.death}}
                        </v-card-subtitle>

                        <v-card-title>
                            Cause:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.cause}}
                        </v-card-subtitle>

                        <v-card-title>
                            Responsible:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.responsible}}
                        </v-card-subtitle>

                        <v-card-title>
                            Last words:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.last_words}}
                        </v-card-subtitle>

                        <v-card-title>
                            Season:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.season}}
                        </v-card-subtitle>

                        <v-card-title>
                            Episode:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.episode}}
                        </v-card-subtitle>

                        <v-card-title>
                            Number of deaths:
                        </v-card-title>

                        <v-card-subtitle>
                            {{death.number_of_deaths}}
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
                more :false,
                count: false,
            }
        },
        computed: {
            deathsList () {
                return this.$store.getters.getDeaths
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
        },
        created() {
            this.$store.dispatch(`getDeaths`)
        },
        components: {
            appSearch: SearchForm,
            appPreloader: Preloader,
        },
        methods: {
            getAllDeaths () {
                this.count = false
                this.$store.dispatch(`getDeaths`)
            },
            getDeathsByName (name) {
                this.$store.dispatch(`getDeathsByName`, name)
                this.count = false
            },
            getCharacterDeathsCount (name) {
                this.$store.dispatch(`getCharacterDeathsCount`, name)
                this.count = true
            },
        }
    }

</script>

<style scoped>

</style>
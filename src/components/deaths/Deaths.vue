<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">DEATHS</h1>

        <v-layout justify-center class="mb-5">
            <v-flex xs12 md8>

                <!--Search field for choosing a Character's death-->
                <appSearch
                        formLabel="Enter name to see character's death info"
                        formHint="Note, that endpoint works only with full names like: 'Walter White or Mike Ehrmantraut'"
                        :getItems="getDeathsByName"
                        parentType="fullName"></appSearch>

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
                <v-container v-if="more">
                    <!--Search field for choosing Character's committed deaths count-->
                    <appSearch
                            formLabel="Enter name to see character's committed deaths"
                            formHint="Note, that endpoint works only with full names like: 'Walter White or Jesse Pinkman'"
                            :getItems="getCharacterDeathsCount"
                            parentType="fullName"></appSearch>

                    <!--Show all deaths button-->
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

        <!--Preloader component-->
        <appPreloader v-if="isLoading && count"></appPreloader>

        <!--Error case-->
        <v-card
                v-if="error && count"
                color="error"
                class="ma-10 pt-6 pb-6"
        >
            <h2 class="text-center">No results found</h2>
        </v-card>

        <!--Rendering Character's committed deaths count-->
        <v-layout v-else-if="!isLoading && count" wrap justify-center>
            <v-flex xs12 sm4 :key="death" v-for="death in deathsList">
                <v-card elevation="12">
                    <v-card-title class="text-capitalize">{{death.name}}</v-card-title>
                    <v-card-subtitle>Killed {{death.deathCount}} people</v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>

        <!--Preloader component-->
        <appPreloader v-if="isLoading && !count"></appPreloader>

        <!--Error case-->
        <v-card
                v-if="error && !count"
                color="error"
                class="ma-10 pt-6 pb-6"
        >
            <h2 class="text-center">No results found</h2>
        </v-card>

        <!--Rendering Character's death info-->
        <v-layout v-else-if="!isLoading && !count" wrap justify-center>
            <v-flex xs12 sm4
                    :key="death.death_id"
                    v-for="death in deathsList"
            >
                <appDeathItem :death="death"></appDeathItem>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    import SearchForm from "../../common/searchForm/SearchForm";
    import Preloader from "../../common/preloader/Preloader";
    import DeathItem from "./deathItem/DeathItem";

    export default {
        data() {
            return {
                more: false,
                count: false,
            }
        },
        components: {
            appSearch: SearchForm,
            appPreloader: Preloader,
            appDeathItem: DeathItem,
        },
        created() {
            this.$store.commit(`setError`, null)
            this.$store.dispatch(`getDeaths`)
        },
        computed: {
            deathsList() {
                return this.$store.getters.getDeaths
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
            error() {
                return this.$store.getters.getError
            },
        },
        methods: {
            getAllDeaths() {
                this.count = false
                this.$store.dispatch(`getDeaths`)
            },
            getDeathsByName(name) {
                this.$store.dispatch(`getDeathsByName`, name)
                this.count = false
            },
            getCharacterDeathsCount(name) {
                this.$store.dispatch(`getCharacterDeathsCount`, name)
                this.count = true
            },
        }
    }

</script>
<template>
    <v-container>
        <h1 class="text-center mt-16 mb-16">CHARACTERS</h1>

        <v-layout justify-center>
            <v-flex xs12 sm6 lg6  class="mt-16 mb-16">

                <appSearch></appSearch>

                <v-container>
                    <v-text-field outlined v-model.number="random" clearable color="green"
                                  label="Or choose amount of random characters"></v-text-field>
                    <v-btn block color="green" @click="getRandom(random)" >
                        Show random character
                    </v-btn>
                </v-container>

                <v-btn block color="green" @click="getAllCharacters">Show all characters</v-btn>

            </v-flex>
        </v-layout>

        <appPreloader v-if="isLoading"></appPreloader>
        <v-layout v-else wrap justify-center>
            <v-flex xs12 sm3 lg4
                    :key="item.char_id"
                    v-for="item in charactersList">
                <v-card class="ma-3" :to="`characters/character/${item.char_id}`">
                    <v-img
                            :src="item.img"
                            height="500"
                    ></v-img>

                    <v-card-title>
                        {{item.name}}
                    </v-card-title>

                </v-card>
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    import CharacterSearch from "./searchForm/CharacterSearch";
    import Preloader from "../../common/Preloader";

    export default {
        data: () => ({
            random: null,
        }),
        computed: {
            charactersList () {
                return this.$store.getters.getCharacters
            },
            isLoading () {
                return this.$store.getters.getLoading
            },
        },
        created() {
            this.$store.dispatch(`getRandomCharacters`, 3)
        },
        methods: {
            getRandom (value) {
                this.$store.dispatch(`getRandomCharacters`, value)
            },
            getAllCharacters () {
                this.$store.dispatch(`getAllCharacters`)
            }
        },
        components: {
            appSearch: CharacterSearch,
            appPreloader: Preloader,
        }
    }

</script>

<style scoped>

</style>
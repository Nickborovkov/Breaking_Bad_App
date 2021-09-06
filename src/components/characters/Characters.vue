<template>
    <v-container>
        <h1 class="text-center mt-16 mb-16">CHARACTERS</h1>

        <v-layout justify-center>
            <v-flex xs12 sm6 lg6  class="mt-16 mb-16">

                <appSearch></appSearch>

                <v-container>
                    <v-text-field outlined v-model.number="random" clearable color="green"
                                  label="Or choose amount of random characters"></v-text-field>
                    <v-btn color="green" @click="getRandom(random)" >
                        Get random
                    </v-btn>
                </v-container>


            </v-flex>
        </v-layout>

        <v-layout wrap justify-center>
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

    export default {
        data: () => ({
            random: null,
        }),
        computed: {
            charactersList () {
                return this.$store.getters.getCharacters
            },
        },
        created() {
            this.$store.dispatch(`getRandomCharacters`, 3)
        },
        methods: {
            getRandom (value) {
                this.$store.dispatch(`getRandomCharacters`, value)
            }
        },
        components: {
            appSearch: CharacterSearch
        }
    }

</script>

<style scoped>

</style>
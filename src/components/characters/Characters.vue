<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">CHARACTERS</h1>

        <v-layout justify-center>
            <v-flex xs12 md8>

                <appSearch
                        formLabel="Start typing name here"
                        formHint=""
                        :getItems="getCharacterByName"
                        parentType="characters"></appSearch>

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
                <v-container v-if="more" class="mt-5 mb-5">
                    <v-layout justify-center class="mt-5 mb-5" wrap>
                        <v-flex xs12 sm12 md12 lg6>
                            <v-slider md12 lg6 v-model="random" color="green"
                                      track-color="grey" max="62" min="0"
                                      thumb-label="always" ticks
                                      hint="Choose amount of random characters"
                            ></v-slider>

                        </v-flex>

                        <v-flex xs12 sm12 md12 lg6>
                            <v-btn block small color="green"
                                   @click="getRandom(random)"
                            >
                                Show {{random}} random
                            </v-btn>
                        </v-flex>
                    </v-layout>

                    <v-btn
                            color="green"
                            block
                            small
                            @click="getAllCharacters"
                    >
                        <v-icon left>mdi-format-list-text</v-icon>
                        Show all characters
                    </v-btn>
                </v-container>
            </v-flex>
        </v-layout>

        <!--Preloader component-->
        <appPreloader v-if="isLoading"></appPreloader>

        <!--Error case-->
        <v-card
                v-else-if="error"
                color="error"
                class="ma-10 pt-6 pb-6"
        >
            <h2 class="text-center">No results found</h2>
        </v-card>

        <!--Rendering characters items-->
        <v-layout
                v-else
                wrap
                justify-center class="mt-5 mb-5">


                <v-flex xs12 sm4 lg3
                        :key="character.char_id"
                        v-for="character in charactersList"
                >
                    <appCharacterItem :character="character"></appCharacterItem>
                </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    import Preloader from "../common/preloader/Preloader";
    import SearchForm from "../common/searchForm/SearchForm";
    import CharacterItem from "./charactersItem/CharacterItem";

    export default {
        data: () => ({
            random: null,
            more: false,
            charactersSlider: 0
        }),
        components: {
            appSearch: SearchForm,
            appPreloader: Preloader,
            appCharacterItem: CharacterItem,
        },
        computed: {
            charactersList() {
                return this.$store.getters.getCharacters
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
            error() {
                return this.$store.getters.getError
            },
        },
        created() {
            this.$store.commit(`setError`, null)
            this.$store.dispatch(`getRandomCharacters`, 8)
        },
        methods: {
            getRandom(value) {
                this.$store.dispatch(`getRandomCharacters`, value)
                this.more = false
                window.scrollTo(0,300,)
            },
            getAllCharacters() {
                this.$store.dispatch(`getAllCharacters`)
                this.more = false
                window.scrollTo(0,300,)
            },
            getCharacterByName(value) {
                this.$store.dispatch(`getCharactersByName`, value)
            }
        },
    }

</script>

<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">CHARACTERS</h1>

        <v-layout justify-center>
            <v-flex xs12 md8>

                <appSearch
                        formLabel="Start typing name here..."
                        :getItems="getCharacterByName"></appSearch>

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

                <v-container v-if="more" class="mt-5 mb-5">
                    <v-layout justify-center  class="mt-5 mb-5" wrap>
                        <v-flex xs12 sm12 md12 lg6>
                            <v-slider md12 lg6
                                      v-model="random"
                                      color="green"
                                      track-color="grey"
                                      max="62"
                                      min="0"
                                      thumb-label="always"
                                      ticks
                                      hint="Choose amount of random characters"
                            ></v-slider>


                        </v-flex>

                        <v-flex xs12 sm12 md12 lg6>
                            <v-btn
                                    block
                                    small
                                    color="green"
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
                    >Show all characters
                    </v-btn>
                </v-container>
            </v-flex>
        </v-layout>

        <appPreloader v-if="isLoading"></appPreloader>
        <v-layout
                v-else
                wrap
                justify-center class="mt-5 mb-5">
            <v-flex xs12 sm4 lg3
                    :key="item.char_id"
                    v-for="item in charactersList">
                <v-card
                        class="ma-3"
                        :to="`characters/character/${item.char_id}`">
                    <v-img
                            :src="item.img"
                            height="500"
                    ></v-img>

                    <v-card-title>
                        <h3 class="text-center">{{item.name}}</h3>
                    </v-card-title>

                </v-card>
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>
    import Preloader from "../../../common/preloader/Preloader";
    import SearchForm from "../../../common/searchForm/SearchForm";

    export default {
        data: () => ({
            random: null,
            more: false,
            charactersSlider: 0
        }),
        computed: {
            charactersList() {
                return this.$store.getters.getCharacters
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
        },
        created() {
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
        components: {
            appSearch: SearchForm,
            appPreloader: Preloader,
        }
    }

</script>
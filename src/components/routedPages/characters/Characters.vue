<template>
    <v-container>
        <h1 class="text-center">CHARACTERS</h1>

        <v-layout justify-center>
            <v-flex xs12 sm6 lg6>

                <appSearch
                        formLabel="Start typing name here..."></appSearch>

                <v-btn color="green" @click="more = !more">More actions</v-btn>

                <v-container v-if="more">
                    <v-row>
                        <v-text-field
                                outlined
                                v-model.number="random"
                                clearable
                                width="300"
                                color="green"
                                label="Choose amount of random characters"
                        ></v-text-field>
                        <v-btn
                                color="green"
                                @click="getRandom(random)"
                        >
                            Show {{random}} random characters
                        </v-btn>

                    </v-row>

                    <v-btn
                            color="green"
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
                justify-center>
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
                        <h2 class="text-center">{{item.name}}</h2>
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
            more: false
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
            this.$store.dispatch(`getRandomCharacters`, 6)
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
            appSearch: SearchForm,
            appPreloader: Preloader,
        }
    }

</script>

<style scoped>

</style>
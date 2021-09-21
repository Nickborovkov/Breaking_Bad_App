<template>
    <v-container>
        <h1 class="text-center mt-5 mb-5">HOME</h1>

        <!--Preloader component-->
        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout v-else justify-center class="mb-16">
            <v-flex xs12 sm6>
                <v-card elevation="12">

                    <h2 class="text-center green">Random Characters</h2>

                    <v-carousel cycle delimiter-icon="mdi-minus" show-arrows-on-hover>
                        <v-carousel-item
                                v-for="item in charactersList"
                                :to="`characters/character/${item.char_id}`"
                                :key="item.char_id"
                                :src="item.img"
                        >
                            <v-row
                                    class="fill-height"
                                    align="center"
                                    justify="center"
                            >
                                <div class="text-h4 text-center" style="color: white">
                                    {{item.name}}
                                </div>
                            </v-row>
                        </v-carousel-item>
                    </v-carousel>
                </v-card>

            </v-flex>
        </v-layout>

        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout v-else justify-center class="mb-16">
            <v-flex xs12 sm4>
                <v-card :to="`/quotes`" elevation="12">

                    <h2 class="text-center green">Random Quote</h2>

                    <v-divider></v-divider>
                    <v-card-title>Author: </v-card-title>
                    <v-card-subtitle>{{randomQuote.author}}</v-card-subtitle>
                    <v-card-title>Series: </v-card-title>
                    <v-card-subtitle>{{randomQuote.series}}</v-card-subtitle>
                    <v-card-title>Quote: </v-card-title>
                    <v-card-subtitle>{{randomQuote.quote}}</v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>

        <appPreloader v-if="isLoading"></appPreloader>

        <v-layout v-else justify-center class="mb-16">
            <v-flex xs12 sm4>
                <v-card :to="`/deaths`" elevation="12">

                    <h2 class="text-center green">Random Death</h2>

                    <v-divider></v-divider>

                    <v-card-title>Death:</v-card-title>
                    <v-card-subtitle>{{randomDeath.death}}</v-card-subtitle>
                    <v-card-title>Cause:</v-card-title>
                    <v-card-subtitle>{{randomDeath.cause}}</v-card-subtitle>
                    <v-card-title>Responsible</v-card-title>
                    <v-card-subtitle>{{randomDeath.responsible}}</v-card-subtitle>
                    <v-card-title>Last words:</v-card-title>
                    <v-card-subtitle>{{randomDeath.last_words}}</v-card-subtitle>
                    <v-card-title>Season</v-card-title>
                    <v-card-subtitle>{{randomDeath.season}}</v-card-subtitle>
                    <v-card-title>Episode</v-card-title>
                    <v-card-subtitle>{{randomDeath.episode}}</v-card-subtitle>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    import Preloader from "../../common/preloader/Preloader";

    export default {
        computed: {
            charactersList () {
                return this.$store.getters.getCharacters
            },
            randomQuote () {
                return this.$store.getters.getQuotes
            },
            randomDeath () {
                return this.$store.getters.getDeaths
            },
            isLoading() {
                return this.$store.getters.getLoading
            },
        },
        components: {
          appPreloader: Preloader,
        },
        created() {
            this.$store.dispatch(`getRandomCharacters`, 5)
            this.$store.dispatch(`getRandomQuote`)
            this.$store.dispatch(`getRandomDeath`)
        }
    }

</script>

<style scoped>

</style>
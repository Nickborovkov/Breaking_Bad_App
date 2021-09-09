<template>
    <v-container>

        <appPreloader v-if="isLoading"></appPreloader>

        <v-container v-else>

            <v-btn color="green" to="/characters">Back to list</v-btn>

            <h1 class="text-center text-sm-h2 mt-16 mb-16">{{specificCharacter.name}}</h1>
            <v-layout wrap justify-center>
                <v-flex xs12 sm6>
                    <v-dialog width="1000">

                        <template v-slot:activator="{ on, attrs }">
                            <v-img class="charImg"
                                    v-on="on"
                                    v-bind="attrs"
                                    width="500"
                                    :src="specificCharacter.img"></v-img>
                        </template>

                        <v-card class="charImg">
                            <v-img :src="specificCharacter.img"></v-img>
                        </v-card>

                    </v-dialog>

                </v-flex>
                <v-flex xs12 sm6>
                    <div :key="item" v-for="item in specificCharacterItems">
                        <h3>{{item.title}}</h3>
                        <p class="ml-5">{{item.inner}}</p>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>

    </v-container>
</template>

<script>
    import Preloader from "../../../../common/preloader/Preloader";

    export default {
        props: [`id`],
        computed: {
            specificCharacter () {
                return this.$store.getters.getSpecificCharacter
            },
            specificCharacterItems () {
                const state =  this.$store.getters.getSpecificCharacter
                const items =  [
                    {title: `Name`, inner: state.name},
                    {title: `Nickname`, inner: state.nickname},
                    {title: `Birthday`, inner: state.birthday},
                    {title: `Occupation`, inner: state.occupation},
                    {title: `Status`, inner: state.status},
                    {title: `Category`, inner: state.category},
                    {title: `Appearance`, inner: state.appearance},
                    {title: `Better Call Saul appearance`, inner: state.better_call_saul_appearance},
                    {title: `Portrayed`, inner: state.portrayed},
                ]
                return items
            },
            isLoading () {
                return this.$store.getters.getLoading
            }
        },
        created() {
            this.$store.dispatch(`getCharactersById`, this.id)
        },
        components: {
            appPreloader: Preloader
        }
    }
</script>

<style scoped>
    .charImg{
        cursor: pointer;
    }
</style>
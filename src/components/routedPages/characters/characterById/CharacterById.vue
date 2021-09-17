<template>
    <v-container>

        <appPreloader v-if="isLoading"></appPreloader>

        <v-container v-else>

            <v-layout justify-center>
                <v-flex xs12 md6 >
                    <v-btn
                            block
                            color="green"
                            @click="$router.back()"
                    >
                        <v-icon left>mdi-arrow-left</v-icon>
                        Back to list
                    </v-btn>
                </v-flex>
            </v-layout>

            <h1 class="text-center text-uppercase mt-5 mb-10">{{specificCharacter.name}}</h1>

            <v-layout wrap justify-center>
                <v-flex xs12 sm12 md6 lg6>
                    <v-dialog width="1000">

                        <template v-slot:activator="{ on, attrs }">

                            <v-layout justify-center class="pl-5 pr-5">
                                    <v-img class="charImg rounded-lg"
                                           v-on="on"
                                           v-bind="attrs"
                                           width="600"
                                           :src="specificCharacter.img"></v-img>
                            </v-layout>

                        </template>

                        <v-img
                                class="charImg"
                                :src="specificCharacter.img"></v-img>


                    </v-dialog>

                </v-flex>
                    <v-flex xs12 sm12 md6 lg6>
                        <div
                                :key="item.char_id"
                                v-for="item in specificCharacterItems"
                                class="mb-5"
                        >
                            <h2>{{item.inner.length > 0
                                ? item.title + `:`
                                : null}}</h2>

                            <div v-if="typeof item.inner === `object`">
                                <ul>

                                    <li :key="subItem" v-for="subItem in item.inner">
                                        {{item.title === `Occupation` ? subItem : `Season ` + subItem}}
                                    </li>

                                </ul>
                            </div>
                            <p v-else>{{item.inner.length>0 ? item.inner: null}}</p>
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
                const state = this.$store.getters.getSpecificCharacter
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
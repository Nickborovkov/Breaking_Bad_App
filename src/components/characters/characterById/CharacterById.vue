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
                        Go back
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
                                :key="index"
                                v-for="(value, name, index) in specificCharacter"
                                class="mb-5"
                        >
                            <div v-if="name !== `char_id` && name !== `img`">

                                <div v-if="name === `appearance` || name === `better_call_saul_appearance`">
                                    <h3 class="text-capitalize">{{replaceItem(name)}}</h3>
                                    <p v-if="value.length === 0">Character didn't act in series</p>
                                    <ul v-else>
                                        <li :key="subItem" v-for="subItem in value">{{subItem}} Season</li>
                                    </ul>
                                </div>

                                <div v-else-if="name === `occupation`">
                                    <h3 class="text-capitalize">{{name}}</h3>
                                    <ul>
                                        <li :key="subItem" v-for="subItem in value">{{subItem}}</li>
                                    </ul>
                                </div>

                                <div v-else>
                                    <h3 class="text-capitalize">{{name}}</h3>
                                    <p>{{value}}</p>
                                </div>

                            </div>
                        </div>

                    </v-flex>
            </v-layout>
        </v-container>

    </v-container>
</template>

<script>
    import Preloader from "../../../common/preloader/Preloader";

    export default {
        props: {
            id: String,
        },
        components: {
            appPreloader: Preloader
        },
        created() {
            this.$store.dispatch(`getCharactersById`, this.id)
        },
        computed: {
            specificCharacter () {
                return this.$store.getters.getSpecificCharacter
            },
            isLoading () {
                return this.$store.getters.getLoading
            }
        },
        methods: {
            replaceItem (item) {
                if(item === `appearance`){item = `Breaking Bad Appearance`}
                let newItem = item.split(`_`).join(` `)
                return newItem
            }
        }
    }
</script>

<style scoped>
    .charImg{
        cursor: pointer;
    }
</style>
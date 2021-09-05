<template>
    <v-container>
        <h1>CHARACTERS</h1>
        <v-layout wrap>
            <v-flex xs12 sm3
                    :key="item.char_id"
                    v-for="item in charactersList">
                <v-card class="ma-3">
                    <v-img
                            :src="item.img"
                            height="500"
                    ></v-img>

                    <v-card-title>
                        {{item.name}}
                    </v-card-title>

                    <v-card-actions>
                        <v-btn
                                color="orange lighten-2"
                                text
                        >
                            Explore
                        </v-btn>

                        <v-spacer></v-spacer>

                        <v-btn
                                icon
                                @click="show = !show"
                        >
                            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                        </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                        <div v-show="show">
                            <v-divider></v-divider>

                            <v-card-text>

                                <v-card-title>
                                    Nickname
                                </v-card-title>

                                <v-card-subtitle>
                                    {{item.nickname}}
                                </v-card-subtitle>

                                <v-card-title>
                                    Status:
                                </v-card-title>

                                <v-card-subtitle>
                                    {{item.status}}
                                </v-card-subtitle>

                                <v-card-title>
                                    Birth date:
                                </v-card-title>

                                <v-card-subtitle>
                                    {{item.birthday}}
                                </v-card-subtitle>

                                <v-card-title>
                                    Occupation:
                                </v-card-title>

                                <v-card-subtitle>
                                    <p :key="occupation" v-for="occupation in item.occupation">{{occupation}}</p>
                                </v-card-subtitle>

                                <v-card-title>
                                    Appearance:
                                </v-card-title>

                                <v-card-subtitle>
                                    <p :key="appearance" v-for="appearance in item.appearance">{{appearance}}</p>
                                </v-card-subtitle>

                                <v-card-title>
                                    Actor:
                                </v-card-title>

                                <v-card-subtitle>
                                    {{item.portrayed}}
                                </v-card-subtitle>

                            </v-card-text>
                        </div>
                    </v-expand-transition>
                </v-card>
            </v-flex>
        </v-layout>


    </v-container>
</template>

<script>

    export default {
        data () {
            return {
                show: false
            }
        },
        computed: {
            charactersList () {
                return this.$store.getters.getCharacters
            }
        },
        created() {
            this.$store.dispatch(`getCharacters`)
        }
    }

</script>

<style scoped>

</style>
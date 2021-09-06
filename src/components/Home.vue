<template>
    <v-container>
        <h1>HOME</h1>

        <v-layout justify-center>
            <v-flex xs12 sm6 lg8>
                <v-carousel cycle>
                    <v-carousel-item
                            v-for="item in charactersList"
                            :key="item.char_id"
                            :src="item.img"
                    >
                        <v-row
                                class="fill-height"
                                align="center"
                                justify="center"
                        >
                            <div class="text-h4" style="text-align: center; color: white">
                                {{item.name}}
                            </div>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>

    export default {
        computed: {
            charactersList () {
                return this.$store.getters.getCharacters
            }
        },
        created() {
            this.$store.dispatch(`getRandomCharacters`, 5)
        }
    }

</script>

<style scoped>

</style>
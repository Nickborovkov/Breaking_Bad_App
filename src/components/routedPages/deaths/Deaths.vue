<template>
    <v-container>
        <h1>DEATHS</h1>
        <v-layout wrap>
            <v-flex xs12 sm4
                    :key="death.death_id"
                    v-for="death in deathsList">
                <v-card class="ma-3">
                    <v-card-title>
                        Death:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.death}}
                    </v-card-subtitle>

                    <v-card-title>
                        Cause:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.cause}}
                    </v-card-subtitle>

                    <v-card-title>
                        Responsible:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.responsible}}
                    </v-card-subtitle>

                    <v-card-title>
                        Last words:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.last_words}}
                    </v-card-subtitle>

                    <v-card-title>
                        Season:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.season}}
                    </v-card-subtitle>

                    <v-card-title>
                        Episode:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.episode}}
                    </v-card-subtitle>

                    <v-card-title>
                        Number of deaths:
                    </v-card-title>

                    <v-card-subtitle>
                        {{death.number_of_deaths}}
                    </v-card-subtitle>

                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    export default {
        computed: {
            deathsList () {
                return this.$store.getters.getDeaths
            }
        },
        created() {
            this.$store.dispatch(`getDeaths`)
        }
    }

</script>

<style scoped>

</style>
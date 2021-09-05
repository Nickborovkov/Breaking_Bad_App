<template>
    <v-container>
        <h1>QUOTES</h1>
        <v-layout wrap>
            <v-flex xs12 sm4
                    :key="quote.quote_id"
                    v-for="quote in quotesList">
                <v-card class="ma-3">
                    <v-card-title>
                        Quote:
                    </v-card-title>

                    <v-card-subtitle>
                        {{quote.quote}}
                    </v-card-subtitle>

                    <v-card-title>
                        Author:
                    </v-card-title>

                    <v-card-subtitle>
                        {{quote.author}}
                    </v-card-subtitle>

                    <v-card-title>
                        Series:
                    </v-card-title>

                    <v-card-subtitle>
                        {{quote.series}}
                    </v-card-subtitle>

                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>

    export default {
        computed: {
            quotesList () {
                return this.$store.getters.getQuotes
            }
        },
        created() {
            this.$store.dispatch(`getQuotes`)
        }
    }

</script>

<style scoped>

</style>
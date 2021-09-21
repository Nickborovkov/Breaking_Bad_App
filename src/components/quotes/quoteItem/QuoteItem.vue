<template>
    <v-container>

        <v-lazy height="400"
                :options="{threshold: .2}"
                transition="fade-transition">

            <v-card elevation="12" class="ma-3" height="350">
                <div :key="index" v-for="(value, name, index) in quote">
                    <div v-if="index !== 0">
                        <v-card-title class="text-capitalize">{{name}}</v-card-title>
                        <v-card-subtitle>{{value}}</v-card-subtitle>
                    </div>
                </div>
            </v-card>

        </v-lazy>

    </v-container>
</template>

<script>
    export default {
        props: {
            quote: Object,
        }
    }
</script>
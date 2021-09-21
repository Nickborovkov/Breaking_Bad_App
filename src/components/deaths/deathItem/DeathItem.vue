<template>
    <v-container>
        <v-lazy height="650"
                :options="{threshold: .2}"
                transition="fade-transition">
            <v-card elevation="12" class="ma-3">
                <div :key="index" v-for="(value, name, index) in death">
                    <div v-if="index !== 0">
                        <v-card-title class="text-capitalize">{{replaceItem(name)}}</v-card-title>
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
            death: Object
        },
        methods: {
            replaceItem (value) {
                let newValue = value.split(`_`).join(` `)
                return newValue
            }
        }
    }
</script>
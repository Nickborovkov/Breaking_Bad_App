<template>
    <v-container>
        <!--Lazy loading-->
        <v-lazy
                height="450"
                :options="{threshold: .2}"
                transition="fade-transition"
        >
            <v-card elevation="12" class="ma-3 pa-3">

                <!--Rendering item for preview-->
                <div
                        :key="index"
                        v-for="(value, name, index) in episode"
                >
                    <div v-if="index == 1 || index == 2 || index == 5 || index == 6">
                        <v-card-title class="text-capitalize">{{name}}</v-card-title>
                        <v-card-subtitle>{{value}}</v-card-subtitle>
                    </div>
                </div>

                <!--Modal window with additional parameters-->
                <v-dialog width="700">
                    <template v-slot:activator="{ on, attrs }">
                        <v-layout justify-center>
                            <v-btn
                                    color="green"
                                    v-bind="attrs"
                                    v-on="on"
                            >
                                <v-icon left>mdi-chevron-down</v-icon>
                                More info
                            </v-btn>
                        </v-layout>

                    </template>

                    <v-card>
                        <div
                                :key="index"
                                v-for="(value, name, index) in episode"
                        >
                            <div v-if="index !== 0">

                                <!--When value is a string-->
                                <div v-if="name !== `characters`">
                                    <v-card-title class="text-capitalize">{{replaceItem(name)}}</v-card-title>
                                    <v-card-subtitle>{{value}}</v-card-subtitle>
                                </div>

                                <!--When value is an array-->
                                <div v-else>
                                    <v-card-title class="text-capitalize">{{replaceItem(name)}}</v-card-title>
                                    <v-card-subtitle>
                                        <ul>
                                            <li :key="subItem" v-for="subItem in value">{{subItem}}</li>
                                        </ul>
                                    </v-card-subtitle>

                                </div>

                            </div>
                        </div>
                    </v-card>

                </v-dialog>

            </v-card>
        </v-lazy>
    </v-container>
</template>

<script>
    export default {
        props: ['episode'],
        methods: {
            replaceItem (item) {
                let newItem = item.split(`_`).join(` `)
                return newItem
            }
        }
    }
</script>

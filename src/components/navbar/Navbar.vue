<template>
        <v-card>
            <v-toolbar
                    fixed
                    dense
                    color="green"
                    class="rounded-0"
            >
                <v-app-bar-nav-icon
                        class="hidden-md-and-up"
                        @click="toggleSidebar"
                ></v-app-bar-nav-icon>

                <v-toolbar-title>


                    <router-link
                            class="homeLink"
                            to="/"
                    >
                        <v-layout justify-center align-center>
                            <v-img class="mr-3" width="40" src="@/assets/images/appLogo.png"></v-img>
                            Breaking Bad App
                        </v-layout>

                    </router-link>

                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn
                            :key="item.title"
                            v-for="item in menuItems"
                            elevation="0"
                            text
                            :to="item.url"
                    >
                        <v-icon
                                left
                                color="black"
                        >{{item.icon}}</v-icon>

                        {{item.title}}
                    </v-btn>

                </v-toolbar-items>
            </v-toolbar>
        </v-card>
</template>

<script>
        export default {
        props: {
            menuItems: Array,
        },
        methods: {
            toggleSidebar () {
                return this.$store.commit(`toggleSidebar`)
            }
        },
    }
</script>

<style scoped>
    .homeLink{
        text-decoration: none;
        color: black;
    }
</style>
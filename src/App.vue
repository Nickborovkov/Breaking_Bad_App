<template>
    <v-app class="wrapper">

        <v-card>
            <v-toolbar
                    dense
                    color="green"
                    class="rounded-0 mainMenu"
            >
                <v-app-bar-nav-icon
                        class="hidden-md-and-up"
                        @click="toggleSidebar"
                ></v-app-bar-nav-icon>

                <v-toolbar-title>


                    <router-link
                            class="homeLink text-decoration-none"
                            to="/"
                    >
                        <v-layout justify-center align-center>
                            <v-img class="mr-3" width="40" src="@/assets/images/appLogo.png"></v-img>
                            <h4 style="color: black">Breaking Bad App</h4>
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
                        >{{item.icon}}
                        </v-icon>

                        {{item.title}}
                    </v-btn>

                </v-toolbar-items>
            </v-toolbar>
        </v-card>

        <v-navigation-drawer
                app
                temporary
                v-model="sideBar"
                color="green"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="text-h6">
                        Menu
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list
                    dense
                    nav
            >
                <v-list-item
                        active-class="white"
                        v-for="item in menuItems"
                        :key="item.title"
                        :to="item.url"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-container>
            <router-view class="pt-16"></router-view>
        </v-container>

        <appFooter></appFooter>

    </v-app>
</template>

<script>

    import Footer from "./components/footer/Footer";

    export default {
        data() {
            return {
                sideBar: false,

                menuItems: [
                    {title: `Characters`, icon: `mdi-account-supervisor-circle`, url: `/characters`},
                    {title: `Episodes`, icon: `mdi-movie-roll`, url: `/episodes`},
                    {title: `Quotes`, icon: `mdi-format-quote-open-outline`, url: `/quotes`},
                    {title: `Deaths`, icon: `mdi-skull-outline`, url: `/deaths`},
                ]
            }
        },
        components: {
            appFooter: Footer,
        },
        methods: {
            toggleSidebar() {
                this.sideBar = !this.sideBar
            }
        }
    }

</script>

<style scoped>
    .mainMenu{
        position: fixed;
        z-index: 1;
        width: 100%;
    }
</style>
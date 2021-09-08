<template>
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
</template>

<script>
    export default {
        props: {
            menuItems: Array,
            sideBar: Boolean,
        }
    }
</script>
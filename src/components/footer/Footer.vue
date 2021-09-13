<template>
    <v-footer color="green">
        <v-layout justify-center wrap>

            <v-layout justify-center xs12 md6>
                <v-btn
                        text
                        target="_blank"
                        :href="`https://www.breakingbadapi.com/documentation`"
                >
                    <v-icon left>mdi-link</v-icon>
                    The Breaking Bad API
                </v-btn>
            </v-layout>

            <v-layout justify-center xs12 md6>
                <v-btn
                        text
                        target="_blank"
                        :href="`https://github.com/Nickborovkov`"
                >
                    <v-icon left>mdi-github</v-icon>
                    Made by Nick Borovkov
                </v-btn>
            </v-layout>

        </v-layout>
    </v-footer>
</template>

<script>
    export default {

    }
</script>
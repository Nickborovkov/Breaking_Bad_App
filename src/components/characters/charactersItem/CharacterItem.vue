<template>
    <v-container>
        <v-lazy :options="{threshold: .2}"
                transition="fade-transition">
            <v-card elevation="12"
                    class="ma-3"
            >
                <v-img
                        :src="character.img"
                        height="500"
                ></v-img>

                <v-card-title>
                    <h3 class="text-center d-block text-truncate">{{character.name}}</h3>
                </v-card-title>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="green"
                            :to="`characters/character/${character.char_id}`"
                    >
                        More info
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-lazy>
    </v-container>
</template>

<script>
    export default {
        props: ['character']
    }
</script>

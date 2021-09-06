<template>
    <v-container>
        <h1 class="text-center text-sm-h2 mt-16 mb-16">{{specificCharacter.name}}</h1>

        <v-layout>
            <v-flex><v-img width="500" :src="specificCharacter.img"></v-img></v-flex>
            <v-flex>
                <h3 :key="title" v-for="title in Object.keys(specificCharacter)">{{title}}</h3>
                <p  :key="subtitle" v-for="subtitle in Object.values(specificCharacter)">{{subtitle}}</p>
            </v-flex>
        </v-layout>



    </v-container>
</template>

<script>
    export default {
        props: [`id`],
        computed: {
            specificCharacter () {
                return this.$store.getters.getSpecificCharacter
            },
        },
        created() {
            this.$store.dispatch(`getCharactersById`, this.id)
        }
    }
</script>
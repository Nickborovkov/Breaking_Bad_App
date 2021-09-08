<template>
    <v-container>

        <v-text-field
                outlined
                v-model="characterInput"
                :error-messages="characterErrors"
                label="Start typing name here..."
                clearable
                color="green"
                @keydown.enter="getCharactersByName(characterInput)"
                @input="getCharactersByName(characterInput)"
        ></v-text-field>
    </v-container>
</template>

<script>

    import { alpha } from 'vuelidate/lib/validators'

    export default {
        validations: {
            characterInput: {alpha}
            },
        data: () => ({
            characterInput: '',
        }),
        computed: {
            characterErrors () {
                const errors = []
                if (!this.$v.characterInput.$dirty) return errors
                !this.$v.characterInput.alpha && errors.push('Only English letters')
                return errors
            },
        },
        methods: {
            getCharactersByName (value) {
                this.$v.characterInput.$touch()
                if(this.$v.characterInput.alpha && this.characterInput !== ``){
                this.$store.dispatch(`getCharactersByName`, value)
                }
            },
        },
    }
</script>
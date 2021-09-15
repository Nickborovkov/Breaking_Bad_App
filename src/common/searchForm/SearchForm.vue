<template>
    <v-container>
            <v-text-field
                    outlined
                    v-model="formInput"
                    :error-messages="formErrors"
                    @input="getItemsByName(formInput)"
                    :label="formLabel"
                    color="green"
                    :hint="formHint"
                    @keydown.enter="getItemsByName(formInput)"

            ></v-text-field>
    </v-container>
</template>

<script>

    import { helpers } from 'vuelidate/lib/validators'

    const alpha = helpers.regex('alpha', /^[a-zA -]*$/)
    const fullName = helpers.regex('fullName', /^[a-zA-]+ [a-zA-]+$/)

    export default {
        data: () => ({
            formInput: '',
        }),
        props: {
            formLabel: String,
            formHint: String,
            getItems: Function,
            parentType: String,
        },
        validations: {
            formInput: {
                alpha,
                fullName,
            }
        },
        computed: {
            formErrors() {
                const errors = []
                if(this.parentType === `characters`){
                    if (!this.$v.formInput.$dirty) return errors
                    !this.$v.formInput.alpha && errors.push('Only English letters')
                }
                if(this.parentType === `fullName`){
                    if (!this.$v.formInput.$dirty) return errors
                    !this.$v.formInput.fullName && errors.push('Please enter full character name in english')
                }
                    return errors

            },
        },
        methods: {
            getItemsByName(value) {
                if(this.parentType === `characters`){
                    this.$v.formInput.$touch()
                    if (this.$v.formInput.alpha && this.formInput !== ``) {
                        this.getItems(value)
                    }
                }
                if(this.parentType === `fullName`){
                    this.$v.formInput.$touch()
                    if (this.$v.formInput.fullName && this.formInput !== ``) {
                        this.getItems(value)
                    }
                }
            },
        },
    }
</script>
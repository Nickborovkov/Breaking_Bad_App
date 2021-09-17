<template>
    <v-container>
        <v-form>
            <v-text-field
                    outlined
                    append-icon="mdi-magnify"
                    color="green"
                    :hint="formHint"
                    :label="formLabel"
                    v-model="formInput"
                    :error-messages="formErrors"
                    @input="getItemsByName(formInput)"
                    @keydown.enter="getItemsByName(formInput)"
                    @click:append="getItemsByName(formInput)"
            >
            </v-text-field>
        </v-form>

    </v-container>
</template>

<script>

    import { helpers } from 'vuelidate/lib/validators'

    const alpha = helpers.regex('alpha', /^[a-zA-Z -]*$/)
    const fullName = helpers.regex('fullName', /^[a-zA-Z -]+ [a-zA-Z -]+$/)

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
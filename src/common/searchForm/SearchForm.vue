<template>
    <v-container>
<!--        :error-messages="formErrors"-->
<!--        @input="getItemsByName(formInput)"-->
        <v-text-field
                outlined
                v-model="formInput"

                :label="formLabel"
                color="green"
                @keydown.enter="getItemsByName(formInput)"

        ></v-text-field>
    </v-container>
</template>

<script>

    import {alpha} from 'vuelidate/lib/validators'

    // const customValidator = (value) =>

    export default {
        data: () => ({
            formInput: '',
        }),
        props: {
            formLabel: String,
            getItems: Function
        },
        validations: {
            formInput: {alpha}
        },
        computed: {
            // formErrors() {
            //     const errors = []
            //     if (!this.$v.formInput.$dirty) return errors
            //     !this.$v.formInput.alpha && errors.push('Only English letters')
            //     return errors
            // },
        },
        methods: {
            getItemsByName(value) {
                // this.$v.formInput.$touch()
                // if (this.$v.formInput.alpha && this.formInput !== ``) {
                    this.getItems(value)
                // }
            },
        },
    }
</script>
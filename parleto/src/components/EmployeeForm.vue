<template>
  <v-card>
  <v-form class="pa-4" ref="form">
    <v-container>
      <v-flex d-flex justify-space-between>
        <v-flex xs12 md5>
          <v-text-field
            v-model="formData.imie"
            :rules="formRules.imie"
            label="Imię pracownika"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md5>
          <v-text-field
            v-model="formData.nazwisko"
            :rules="formRules.nazwisko"
            label="Nazwisko pracownika"
            required
          ></v-text-field>
        </v-flex>
      </v-flex>
      <v-flex d-fle justify-space-between>
        <v-flex xs12 md5>
          <v-text-field
            v-model="formData.dzial"
            :rules="formRules.dzial"
            label="Dział"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md5>
          <v-text-field
            v-model="formData.wynagrodzenieKwota"
            :rules="formRules.wynagrodzenieKwota"
            label="Wynagrodzenie"
            type="number"
            required
          ></v-text-field>
        </v-flex>
      </v-flex>
      <v-flex xs12 justify-end d-flex>
        <v-btn mt2  @click="saveEmployee">Zapisz pracownika</v-btn>
     </v-flex>
    </v-container>
  </v-form>
  </v-card>
</template>
<script>
import {isEmpty, isMoreThanZero} from '../helpers/form-validate';
export default {
  data() {
    return {
      valid: '',
      formData: {
        imie: '',
        nazwisko: '',
        dzial: '',
        wynagrodzenieKwota: 0,
        wynagrodzenieWaluta: 'PLN'
      },
      formRules: {
        imie: [isEmpty],
        nazwisko: [isEmpty],
        dzial: [isEmpty],
        wynagrodzenieKwota: [isMoreThanZero]
      }
    }
  },

  methods: {
    saveEmployee() {
      this.$refs.form.validate() && this.$store.dispatch('create', this.formData)
    }
  }
}
</script>
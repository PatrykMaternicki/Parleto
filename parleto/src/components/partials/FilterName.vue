<template>
  <v-flex xs12 md6>
    <v-text-field
      v-model="name"
      label="Imię pracownika"
    ></v-text-field>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },

  watch: {
    name(val) {
      val.length > 0 ? this.$store.dispatch('filterByName', val) : this.$store.dispatch('clear');
    },
  }
}
</script>

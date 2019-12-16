<template>
  <v-flex xs12 md6>
    <v-select
      v-model="departaments"
      :items="this.$store.getters.departaments"
      :menu-props="{ maxHeight: '400' }"
      label="Działy"
      multiple
      hint="Wybierz dział"
      persistent-hint
    ></v-select>
  </v-flex>
</template>
<script>
export default {
  data() {
    return {
      departaments: []
    }
  },

  watch: {
    departaments(val) {
      val.length > 0 ? this.$store.dispatch('filterByDepartaments', val) : this.$store.dispatch('clear');
    },
  }
}
</script>
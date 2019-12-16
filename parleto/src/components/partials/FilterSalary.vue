<template>
  <v-flex xs12 md6>
    <v-text-field
      v-model="minSalary"
      label="Minimalna kwota"
      type="number"
    ></v-text-field>
    <v-text-field
      v-model="maxSalary"
      label="Maksymalna kwota"
      type="number"
    ></v-text-field>
      <v-flex xs12 justify-end d-flex>
        <v-btn mt2 color="primary" @click="clearData" small>Wyczyść filtry</v-btn>
     </v-flex>
  </v-flex>
</template>
<script>
export default {
  data() {
    return {
      minSalary: null,
      maxSalary: null
    }
  },

  watch: {
    minSalary(newVal) {
      let val = newVal ? Number.parseFloat(newVal) : 0;
      this.minSalary = val;
      let maxSalary = this.maxSalary ? Number.parseFloat(this.maxSalary) : 0;
      if(maxSalary === 0 ) {
        this.$store.dispatch('filterSalary', {value: val, action: 'onlyMin'});
        return;
      }
      if(maxSalary > 0 || val) {
        this.$store.dispatch('filterSalary', {minValue: val, maxValue: maxSalary, action: 'both'});
        return;
      }
       if(maxSalary === 0 && val === 0) {
        this.$store.dispatch('clear');
        return;
      }
    },

    maxSalary(newVal) {
      let val = newVal ? Number.parseFloat(newVal) : 0;
      this.maxSalary = val;
      let minSalary = this.minSalary ? Number.parseFloat(this.minSalary) : 0;
      if(minSalary === 0 && val === 0) {
        this.$store.dispatch('clear');
        return;
      }
      if(minSalary === 0) {
        this.$store.dispatch('filterSalary', {value: val, action: 'onlyMax'});
        return;
      }
      if(minSalary > 0 || val) {
        this.$store.dispatch('filterSalary', {minValue: minSalary, maxValue: val, action: 'both'});
        return;
      }
    }
  },

  methods: {
    clearData() {
      this.maxSalary = null;
      this.minSalary = null;
    }
  }
}
</script>
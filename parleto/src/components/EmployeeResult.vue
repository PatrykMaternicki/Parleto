<template>
  <div>
    <v-flex xs12 class="mt-4">
      <v-card class="pa-4">
      <v-list two-line subheader>
        <v-subheader>Suma wynagrodzeń poszczególnych działów</v-subheader>
        <v-list-item :key="index" v-for="(departament, index) in this.$store.getters.salaryDepartaments">
          <v-list-item-content>
            <v-list-item-title class="xs12">{{departament.name}}</v-list-item-title>
            <v-list-item-subtitle class="xs12">{{departament.salary}} PLN</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <v-flex xs12 class="px-4">
          Suma wszystkich wynagrodzeń: {{ getSummarySalary }} PLN
        </v-flex>
      </v-card>
    </v-flex>
  </div>
</template>
<script>
export default {
  computed: {
    getSummarySalary() {
      return this.$store.getters.summarySalary;
    }
  }
}
</script>
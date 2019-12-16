<template>
  <v-simple-table class="mb-4">
    <template v-slot:default>
      <thead>
        <tr>
          <th :key="header.text" v-for="header in headers">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(item, index) in employee">
          <td>{{ item.imie }}</td>
          <td>{{ item.nazwisko }}</td>
          <td>{{ item.dzial }}</td>
          <td>{{ item.wynagrodzenieKwota }} {{item.wynagrodzenieWaluta}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { EmployeeTableHeaders } from '../dictionary/employee-table-headers';
export default {
  data() {
    return {
      headers: EmployeeTableHeaders
    };
  },

  computed: {
    employee() {
      return this.$store.getters.employee;
    }
  }
}
</script>
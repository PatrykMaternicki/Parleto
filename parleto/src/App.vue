<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-toolbar-title>Parleto</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container d-flex class="justify-center pa-xs-0">
        <v-flex xs12 md10>
          <employee-toolbar
            @setView="setView"
          />
          <component :is="selectComponent" />
          <employee-table/>
          <employee-result/>
        </v-flex>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import EmployeeTable from './components/EmployeeTable';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeToolbar from './components/EmployeeToolbar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeResult from './components/EmployeeResult';

export default {
  name: 'App',

  components: {
    EmployeeTable,
    EmployeeSearch,
    EmployeeToolbar,
    EmployeeForm,
    EmployeeResult
  },

  data() {
    return {
      selectComponent: 'EmployeeSearch'
    }
  },

  methods: {
    setView(val) {
      this.selectComponent = val;
    }
  }
};
</script>

<template>
  <v-card flat>
    <v-form class="pa-4">
      <v-flex d-flex flex-wrap justify-space-between>
        <v-flex xs12 md4>
          <v-select
          v-model="selectFilter"
          :items="filters"
          :menu-props="{ maxHeight: '400' }"
          label="Wybierz Filter"
          hint="Wybierz Filter"
          persistent-hint
          ></v-select>
        </v-flex>
        <component v-if="selectComponent" :is="selectComponent" />
      </v-flex>
    </v-form>
  </v-card>
</template>
<script>
import FilterDepartament from './partials/FilterDepartament';
import FilterName from './partials/FilterName';
import FilterSalary from './partials/FilterSalary';
export default {
  components: {
    FilterDepartament,
    FilterName,
    FilterSalary
  },
  
  data() {
    return{
      selectFilter: [],
      components: {
        'Po imieniu': FilterName,
        'Po dziale': FilterDepartament,
        'Po kwotach': FilterSalary
      },
      filters: ['Po imieniu', 'Po dziale', 'Po kwotach'],
      selectComponent: null
    }
  },

  watch: {
    selectFilter(val) {
      this.$store.dispatch('clear');
      this.selectComponent = this.components[val];
    }
  }
}
</script>
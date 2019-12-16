import Vue from 'vue'
import Vuex from 'vuex'
import EmployeeService from '../services/employee-service';

const employeeService = new EmployeeService();
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employee: [],
    departaments: [],
    summarySalary: 0,
    salaryDepartaments: []
  },
  mutations: {
    SET_DATASET(state, payload) {
      state.employee = payload;
      employeeService.setEmployee(payload);
      state.summarySalary = employeeService.calculateSummarySalary();
      state.departaments = employeeService.setDepartaments();
      state.salaryDepartaments = employeeService.calculateSummaryByDepartament(state.departaments);
    },

    FILTER_BY_NAME(state, payload) {
      state.employee = employeeService.filterByName(payload);
    },

    CLEAR(state) {
      state.employee = employeeService.getEmployee();
    },

    FILTER_BY_DEPARTAMENTS(state, payload) {
      state.employee = employeeService.filterByDepartaments(payload);
    },

    FILTER_SALARY_ONLY_MIN(state, payload) {
      state.employee = employeeService.filterSalaryByMin(payload.value);
    },

    FILTER_SALARY_ONLY_MAX(state, payload) {
      state.employee = employeeService.filterSalaryByMax(payload.value);
    },

    FILTER_SALARY_BOTH(state, payload) {
      state.employee = employeeService.filterSalaryByBoth(payload);
    },
    CREATE(state, payload) {
      state.employee = employeeService.create(payload);
      state.departaments = employeeService.setDepartaments();
      state.salaryDepartaments = employeeService.calculateSummaryByDepartament(state.departaments);
    }
  },

  getters: {
    employee(state) {
      return state.employee;
    },
    departaments(state) {
      return state.departaments;
    },
    summarySalary(state) {
      return state.summarySalary;
    },
    salaryDepartaments(state) {
      return state.salaryDepartaments;
    }
  },

  actions: {
    setDataset(context, payload) {
      context.commit('SET_DATASET', payload);
    },
    filterByName(context, payload) {
      context.commit('FILTER_BY_NAME', payload);
    },
    clear(context) {
      context.commit('CLEAR');
    },
    filterByDepartaments(context, payload) {
      context.commit('FILTER_BY_DEPARTAMENTS', payload);
    },
    filterSalary(context, payload) {
      switch(payload.action) {
        case 'onlyMin': context.commit('FILTER_SALARY_ONLY_MIN', payload); break;
        case 'onlyMax': context.commit('FILTER_SALARY_ONLY_MAX', payload); break;
        case 'both': context.commit('FILTER_SALARY_BOTH', payload); break;
        default: break;
      }
    },
    create(context, payload) {
      context.commit('CREATE', payload);
    }
  },
  modules: {
  }
})

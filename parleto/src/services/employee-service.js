export default class EmployeeService {
  consturctor() {
    this.employee = [];
  }

  getEmployee() {
    return this.employee;
  }

  setEmployee(employee) {
    this.employee = employee;
  }

  
  setDepartaments() {
    let departaments = [];
    this.employee.forEach(item => {
      if(departaments.indexOf(item.dzial) === -1 ) {
        departaments.push(item.dzial);
      }
    });
    return departaments;
  }
  
  create(employee) {
    this.employee.push(employee);
    return this.employee;
  }

  filterByName(wantedString) {
    return this.employee.filter(item => item.imie.toLowerCase() === wantedString.toLowerCase());
  }
  
  filterByDepartaments(departaments) {
    return this.employee.filter(item => departaments.indexOf(item.dzial) > -1);
  }

  filterSalaryByMin(value) {
    return this.employee.filter(item => item.wynagrodzenieKwota >= Number.parseFloat(value));
  }

  filterSalaryByMax(value) {
    return this.employee.filter(item => {
      return item.wynagrodzenieKwota <= Number.parseFloat(value)
    });
  }

  filterSalaryByBoth(data) {
    return this.employee.filter(item => {
      return item.wynagrodzenieKwota <= Number.parseFloat(data.maxValue) &&  item.wynagrodzenieKwota >= Number.parseFloat(data.minValue)
    });
  }

  calculateSummarySalary() {
    let summarySalary = 0;
    this.employee.forEach(item => summarySalary += Number.parseFloat(item.wynagrodzenieKwota));
    return summarySalary.toFixed(2);
  }

  calculateSummaryByDepartament(departaments) {
    let data = [];
    departaments.forEach(item => {
      let employeeWorkInDepartament = this.employee.filter(employee => employee.dzial === item);
      let calculateSummaryByDepartament = 0;
      employeeWorkInDepartament.forEach(employee => calculateSummaryByDepartament += Number.parseFloat(employee.wynagrodzenieKwota));
      data.push({name: item, salary: calculateSummaryByDepartament.toFixed(2)});
    })

    return data;
  }
}
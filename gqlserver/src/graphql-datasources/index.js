const {DepartmentDS} = require('./department');
const {EmployeeDS} = require('./employee');
const {TaskDS} = require('./task');
const Strapi = require('lib/strapi')

module.exports = () => {
  return {
    departments: new DepartmentDS({
      service: new Strapi('departments'),
      cacheKeyBase: "departments"
    }),
    employees: new EmployeeDS({
      service: new Strapi('employees'),
      cacheKeyBase: "employees"
    }),
    tasks: new TaskDS({
      service: new Strapi('tasks'),
      cacheKeyBase: "tasks"
    }),
  }
}

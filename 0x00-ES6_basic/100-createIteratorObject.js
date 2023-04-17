export default function createIteratorObject(report) {
  let departments = Object.values(report.allEmployees);
  let currentEmployeeIndex = 0;
  let currentDepartmentIndex = 0;

  const iterator = {
    next() {
      const department = departments[currentDepartmentIndex];
      const employee = department[currentEmployeeIndex];

      if (!employee) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;

        if (currentDepartmentIndex >= departments.length) {
          return {
            value: undefined,
            done: true
          };
        }

        return this.next();
      }

      currentEmployeeIndex++;

      return {
        value: employee,
        done: false
      };
    }
  };

  return iterator;
}

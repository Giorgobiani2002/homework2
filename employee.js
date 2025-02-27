class Employee {
    constructor(name) {
        this.name = name;
    }

    calculateSalary(hoursWorked, hourlyRate) {
        return hoursWorked * hourlyRate;
    }
}


const employee = new Employee('lasha giorgobiani');
const salary = employee.calculateSalary(40, 20); 
console.log(salary);

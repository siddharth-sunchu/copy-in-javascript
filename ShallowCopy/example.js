const employee = {
    name: 'Siddharth',
    age: 35
};

const copyOfEmployee = employee;
console.log(employee, 'employee');
console.log('------------After Modification-----------');
copyOfEmployee.age = 29;
/*
Here you would expect employee object wouldn't change, but copyOfEmployee 
and employee object both share same memory address
*/
console.log(employee, 'employee');
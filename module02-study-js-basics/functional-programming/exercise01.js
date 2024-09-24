// Programming Paradigm
// 1. imperative programming: oop
// 2. declarative programming: oop, fp
// functional programming: data centric -> array, set, list, map
employees = [
    {
        identity: "1",
        fullname: "jack shephard",
        iban: "tr1",
        salary: 100_000,
        departments: ["IT", "SALES"],
        fullTime: true,
        birthYear: 1982
    },
    {
        identity: "2",
        fullname: "james sawyer",
        iban: "tr2",
        salary: 200_000,
        departments: ["SALES"],
        fullTime: false,
        birthYear: 1986
    },
    {
        identity: "3",
        fullname: "kate austen",
        iban: "tr3",
        salary: 300_000,
        departments: ["IT", "FINANCE"],
        fullTime: true,
        birthYear: 1990
    },
]
// imperative programming
total_salaries_of_employees_of_it = 0;
for (const employee of employees) { // external loop
    if (employee.departments.includes("IT")){
        let salary = employee.salary;
        total_salaries_of_employees_of_it += salary;
    }
}
console.log(`total salaries of it employees: ${total_salaries_of_employees_of_it}`);
// functional programming: HoF (Higher-Order Function)
function if_working_at_department(department) {
    return function(employee){
        if (employee.departments.includes("IT")) return true;
        return false;
    }
}

function map_employee_to_salary(employee){
    return employee.salary;
}
function topla(x, y){
    return x + y;
}
total_salaries_of_employees_of_it =
    employees.filter(if_working_at_department("it"))
             .map( map_employee_to_salary )
             .reduce( topla , 0);
             // .reduce((acc,salary)=>acc + salary, 0);

console.log(`total salaries of it employees: ${total_salaries_of_employees_of_it}`);


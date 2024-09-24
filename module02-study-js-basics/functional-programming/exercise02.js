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
        fullTime: false,
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
        fullTime: false,
        birthYear: 1990
    },
]
let numberOfPartTimeEmployees =
employees.filter( employee => ! employee.fullTime)
         .map( employee => 1 )
         .reduce( (accumulator,one) => accumulator + one , 0);

console.log(`number of part-time employees: ${numberOfPartTimeEmployees}`);


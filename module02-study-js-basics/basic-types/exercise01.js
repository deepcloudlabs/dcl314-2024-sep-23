x = 42; // Number
console.log(typeof(x));
x = 3.1415; // Number
console.log(typeof(x));
x = 2 + 2 === 4; // boolean
console.log(typeof(x));
x = "kate austen"; // string
console.log(typeof(x));
x = [4, 8, 15, 16, 23, 42]; // object: Array
console.log(typeof(x));
x = { // object
    "identity": "11111111110",
    "fullname": {
        "firstName": "jack",
        "lastName": "bauer"
    },
    salary : {
        value: 100_000,
        currency: "USD"
    }
};
console.log(typeof(x));
x = function (u,v,w){
    return u ** v + w ** 3;
}
console.log(typeof(x));
/*
JS Type System:
number
boolean
string
object
function
 */

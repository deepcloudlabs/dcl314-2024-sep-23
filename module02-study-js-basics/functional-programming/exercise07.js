// generative function
function* filter(input,predicate_fun){
    console.log("filter is now working...");
    for (const element of input){
        if (predicate_fun(element)){
            console.log("yielding in filter...");
            yield element;
        }
    }
}

function* map(input,map_fun){
    console.log("map is now working...");
    for (const element of input){
        console.log("yielding in map...");
        yield map_fun(element);
    }
}
function even_number(number) {
    console.log(`[even_number(${number})]`);
    return number % 2 === 0;
}
function to_cube(number) {
    console.log(`[to_cube(${number})]`);
    return number ** 3;
}
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let generator = map(filter(numbers, even_number), to_cube);
console.log("application is just started.");
while(true){
 partial_solution = generator.next();
 if (partial_solution.done) break;
 console.log(partial_solution.value);
}
console.log("application is done now.");

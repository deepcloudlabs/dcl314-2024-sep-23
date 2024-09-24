numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function even_number(number) {
    console.log(`[even_number(${number})]`);
    return number % 2 === 0;
}

function to_cube(number) {
    console.log(`[to_cube(${number})]`);
    return number ** 3;
}
function sum(x,y){
    console.log(`[sum(${x},${y})]`);
    return x+y;
}

const total =
    numbers.filter(even_number)
        .map(to_cube)
        .reduce(sum, 0);
console.log(total);

numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers)
numbers.sort(function(x,y){ return x - y; });
console.log(numbers)
numbers.sort(function(x,y){
    console.log(`x: ${x}, y: ${y}`);
    return y - x; });
console.log(numbers)
// function(x,y){ return x - y; } ------> lambda expression: (x,y) => x - y
numbers.sort((x,y) => x - y );
console.log(numbers)


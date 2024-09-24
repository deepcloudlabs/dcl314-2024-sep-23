function fun(numbers){
    if (numbers.length === 0){
        throw "The numbers must contain at least one number";
    }
    let even_numbers = [];
    for (let number of numbers){
        if (number % 2 == 0){
            even_numbers.push(number);
        }
    }
    return even_numbers;
}
numbers = [1,2,3,4,5,6];
try{
    let evens = fun(numbers)
    console.log(evens);
} catch (message) {
    console.error(message);
}

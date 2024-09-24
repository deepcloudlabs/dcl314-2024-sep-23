function gun(numbers){
    return new Promise((resolve, reject) => {
        if (numbers.length === 0){
            reject("The numbers must contain at least one number");
        }
        let even_numbers = [];
        for (let number of numbers){
            if (number % 2 == 0){
                even_numbers.push(number);
            }
        }
        setTimeout( () => resolve(even_numbers), 5_000);
    });
}
numbers = [];
let result = gun(numbers);
result.then(console.log).catch(console.error);
console.log("Application is still running...");
console.log("Application is about to end...");


async function fun(numbers){
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

async function gun(){
    let result = await fun([1,2,3,4,5,6,7,8,9,10]);
    console.log(`result: ${result}`);
}

gun().then(() => console.log('done'));


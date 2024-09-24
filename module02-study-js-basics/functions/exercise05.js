function fun(x = 100, y = 200, z = 300) {
    for (const argument of arguments)
        console.log(`argument: ${argument}`);
    if (arguments.length !== 3) // validation
        throw "You must provide exactly 3 parameters!";
    return x * y + z;
}

let result1 = fun(10, 20, 30, 40);
console.log(`result1=${result1}`);


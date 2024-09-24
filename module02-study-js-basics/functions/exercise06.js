function fun({x, y, z}) {
    console.log(`x: ${x}, y: ${y}, z:${z}`);
    for (const argument of arguments)
        console.log(`argument: ${JSON.stringify(argument)}`);
    return x * y + z;
}

let x = 10, y = 20, z = 30, u=40;
let result = fun({z, y, x, u});
console.log(`result: ${result}`);

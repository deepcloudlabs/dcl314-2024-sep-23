function fun(x, y, z) {
    x = x || 100;
    y = y || 200;
    z = z || 300;
    return x * y + z;
}

let result1 = fun();
console.log(`result1=${result1}`);
result1 = fun(10);
console.log(`result1=${result1}`);
result1 = fun(10,20);
console.log(`result1=${result1}`);
result1 = fun(10,20,30);
console.log(`result1=${result1}`);
result1 = fun(10,20,30,40);
console.log(`result1=${result1}`);


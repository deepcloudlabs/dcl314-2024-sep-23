function fun(x, y, z) {
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


function fun() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => { resolve(42);} , 8_000);
    });
}

function gun() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => { resolve(108);} , 5_000);
    });
}

function sun() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => { resolve(549);} , 12_000);
    });
}

let total = 0;

fun().then( result1 => {
    total += result1;
});

gun().then( result2 => {
    total += result2;
});

sun().then( result3 => {
    total += result3;
});

Promise.all(
    [fun(), sun(), gun()]
).then( results => {
    console.log(results.reduce((x,y)=>x+y,0))
})

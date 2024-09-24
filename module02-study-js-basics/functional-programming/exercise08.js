numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function even_number(number) {
    console.log(`[even_number(${number})]`);
    return number % 2 === 0;
}

function* filter(input,predicate_fun){
    for (const element of input){
        if (predicate_fun(element)){
            console.log("yielding in filter...");
            yield element;
        }
    }
}


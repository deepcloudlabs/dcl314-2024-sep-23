function fun() {
    const x = 42;
    console.log(`[after the loop] x: ${x}`);
    // Error at the runtime: TypeError: Assignment to constant variable.
    // x++;
    console.log(`[after the loop] x: ${x}`);
}

fun();

x = "this is a simple sentence";
for (let i = 0; i < x.length; i++) {
    const c = x[i];
    console.log(c);
}

for (let c of x) {
    console.log(c);
}

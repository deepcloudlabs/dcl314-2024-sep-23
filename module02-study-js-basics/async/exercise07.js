async function fun() {
    return 42;
}

async function gun() {
    return 108;
}

async function sun() {
    return 549;
}

async function app(){
    let result = await Promise.all([fun(), sun(), gun()])
    console.log(`result: ${result}`);
}

app().then(() => console.log('done'));

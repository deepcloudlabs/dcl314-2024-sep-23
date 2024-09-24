const jack = {
    firstName: 'Jack',
    lastName: 'Shephard',
    data: 1_000_000,

    // property
    get salary(){
        console.log(`getting the salary: ${this.data}...`);
        return this.data / 34.0;
    },

    set salary(data){
        console.log(`setting new salary to ${data}...`);
        if (data >= 17_000) // validation
            this.data = data;
    }
}

jack.salary = 200_000; // looks like an attribute but acts like a method
console.log(jack.salary);

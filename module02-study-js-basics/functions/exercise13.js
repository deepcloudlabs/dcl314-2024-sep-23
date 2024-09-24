function fun() {
    {
        let x = 10;
        {
            let y = 20;
        } // end of the scope for y
        // console.log(y); // error
    } // end of the scope for x
    // console.log(x); // error

}

fun();

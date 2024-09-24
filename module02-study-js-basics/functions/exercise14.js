function fun() {
    {
        var x = 10;
        {
            var y = 20;
        }
        console.log(y); // error
    }
    console.log(x); // error

} // end of the scope for both x and y

fun();

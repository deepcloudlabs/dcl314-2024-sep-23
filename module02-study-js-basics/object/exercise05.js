circle4 = {}
circle4.x = -1
circle4.y = 10
circle4.radius = 100
circle4.area = function () {
    return Math.PI * this.radius ** 2;
}
circle4.pen = {}
circle4.pen.color = "Red";
circle4.pen.thickness = 5;
circle4.pen.style = "solid";
// let x = circle4.x;
// let y = circle4.y;
// let radius = circle4.radius;
let {x,radius,...rest} = {...circle4};
console.log(`x: ${x}, radius: ${radius}`);
console.log(`rest: ${JSON.stringify(rest)}`);

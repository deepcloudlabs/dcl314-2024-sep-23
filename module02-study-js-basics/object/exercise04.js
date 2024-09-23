circle3 = {}
circle3.x = -1
circle3.y = 10
circle3.radius = 100
circle3.area = function () {
    return Math.PI * this.radius ** 2;
}
circle3.pen = {}
circle3.pen.color = "Red";
circle3.pen.thickness = 5;
circle3.pen.style = "solid";

for (let key in circle3) {
    let value = circle3[key];
    if (typeof (value) == "object") {
        for (let attribute in value) {
            console.log(`${key}'s ${attribute}: ${value[attribute]}`);
        }
    }
    console.log(`circle3's ${key}: ${value}`);
}
console.log(JSON.stringify(circle3));

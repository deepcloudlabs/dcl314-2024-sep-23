circle2 = {}
circle2.x = -1
circle2.y = 10
circle2.radius = 100
circle2.area = function () {
    return Math.PI * this.radius ** 2;
}

console.log(typeof(circle2));
console.log(`circle2's radius: ${circle2.radius}`);
console.log(`circle2's area: ${circle2.area()}`);
circle1 = {
    x: -1,
    y: 100,
    radius: 100,
    area: function () {
        return Math.PI * this.radius ** 2;
    }
}

console.log(typeof (circle1));
console.log(`circle1's radius: ${circle1.radius}`);
console.log(`circle1's area: ${circle1.area()}`);

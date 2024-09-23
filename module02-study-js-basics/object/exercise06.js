let x = -1
let y = 10
let radius = 100

color = "Red";
thickness = 5;
style = "solid";

let pen = {color, thickness, style};
circle5 = {
    x: x,
    y: y,
    radius: radius,
    pen: pen
};
// this is a shortcut to circle5
circle6 = {x,y,radius, pen};

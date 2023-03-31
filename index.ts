interface ShapeExample {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

//Example of equality narrowing.
//error TS18048: 'shape.radius' is possibly 'undefined'.
function getAreaExample(shape: ShapeExample) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }

}


//Discriminated union types


// type Shape = ???

//Define a function getArea that gets the area of the shape. Lets only consider squares and circles.
//Hint: define an union type Shape
//Shape of circle is Math.Pi * radius ** 2
//Shape of square is sideLength ** 2

//Test data: area of square with sideLength 2, should be 4.
//Test data: area of circle with radius 2, should be 12.57 aprox.

function getArea() {
    //TODO: implement me
    return;
}

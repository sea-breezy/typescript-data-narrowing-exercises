interface ShapeExample {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

//Example of equality narrowing.
//error TS18048: 'shape.radius' is possibly 'undefined'.
function getAreaExample(shape: ShapeExample) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius! ** 2;
    }

}


//Define a function getArea that gets the area of the shape. Lets only consider squares and circles.
//Hint: define an union type Shape, based of some interfaces.
//Shape of circle is Math.Pi * radius ** 2
//Shape of square is sideLength ** 2


//change type from any to your new type.
function getArea(shape : any) : number {
    //TODO: implement me
    return 0;
}

//Test data: area of square with sideLength 2, should be 4.
//Test data: area of circle with radius 2, should be 12.57 aprox.
const square = {kind: "square", sideLength: 2}
const circle = {kind: "circle", radius: 2}
console.log('Asserting if square area calculated correctly...')
console.assert(getArea(square) === 4)
console.log('Asserting if circle area calculated correctly...')
console.assert(getArea(circle) === 12.566370614359172)

//Exercise complete

interface ShapeExample {
    kind: "circle" | "square";
    radius?: number;
    sideLength?: number;
}

//Example of equality narrowing.
//error TS18048: 'shape.radius' is possibly 'undefined'.
//We use the ! operator to help compiler know this is defined (i.e. cannot be null or undefined) - bad practice.
function getAreaExample(shape: ShapeExample) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius! ** 2;
    }

}


//Define a function getArea that gets the area of the shape. Let's only consider squares and circles.
//Hint: define a union type Shape, based of some interfaces.
//Shape of circle is Math.Pi * radius ** 2
//Shape of square is sideLength ** 2

interface Square {
    kind: "square";
    sideLength: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Circle;

//change type from any to your new type.
function getArea(shape : Shape) : number {
    switch(shape.kind){
        case "square": return shape.sideLength**2;
        case "circle": return shape.radius **2 * Math.PI;
        default:
            // This is a type exhaustiveness check to ensure all cases are handled
            throw new Error(`Unhandled shape kind: ${shape}`);
    }
}

//Test data: area of square with sideLength 2, should be 4.
//Test data: area of circle with radius 2, should be 12.57 aprox.
const square: Square = {kind: "square", sideLength: 2}
const circle: Circle = {kind: "circle", radius: 2}
console.log('Asserting if square area calculated correctly...')
console.assert(getArea(square) === 4)
console.log('Asserting if circle area calculated correctly...')
console.assert(getArea(circle) === 12.566370614359172)

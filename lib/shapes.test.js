// Import the shape classes
const { Circle, Triangle, Square } = require("./shapes");

// Test the render method of the Circle class
test("Circle rendor method", () => {
    const shape = new Circle(50);
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});

// Test the render method of the Triangle class
test("Triangle render method", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test the render method of the Square class
test("Square render method", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');
});
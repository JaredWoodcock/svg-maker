const { Circle, Triangle, Square } = require("./shapes");


test("Circle rendor method", () => {
    const shape = new Circle(50);
    shape.setColor("blue");
    expect(shape.rendor()).toEqual('<circle cx="150" cy="100" r="50" fill="blue" />');
});


test('Triangle render method', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
 
test('Square render method', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<rect width="200" height="200" fill="blue" />');
});
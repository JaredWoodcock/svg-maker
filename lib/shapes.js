// This is the base class for all shapes
class Shape {
    constructor(color) {
        this.color = color;
    }
    // This sets the color of the shape
    setColor(color) {
        this.color = color;
    }
    render() {
        throw new Error("render() method must be implemented in child class");
    }
}

// Circle subclass
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    // Renders a circle SVG element
    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

// Triangle subclass
class Triangle extends Shape {
    // Renders a triangle SVG element
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Square subclass
class Square extends Shape {
    // Renders a square SVG element
    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Triangle, Square };
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

async function run() {
    // Defines shape choices
    const shapeChoices = ["Circle", "Triangle", "Square"];

    // Prompts for the user to enter their input/choices
    const userInput = await inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters for your logo:",
            validate: (input) => input.length <= 3,
        },
        {
            type: "input",
            name: "textColor",
            message: "Enter the text color (color or hex):",
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape:",
            choices: shapeChoices,
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Enter the shape color (color or hex):",
        },
    ]);

    // Initializes the shape based on what the user's input was
    let shape;
    switch (userInput.shape) {
        case "Circle":
            shape = new Circle(50, userInput.shapeColor);
            break;
        case "Triangle":
            shape = new Triangle(userInput.shapeColor);
            break;
        case "Square":
            shape = new Square(userInput.shapeColor);
            break;
        default:
            throw new Error("Invalid shape choice");
    }

    // Finds the next available logo name
    const exampleFiles = fs.readdirSync("./examples");
    let logoNumber = 1;
    while (exampleFiles.includes(`logo${logoNumber}.svg`)) {
        logoNumber++;
    }

    // Generates the logo name
    const logoName = `logo${logoNumber}.svg`;

    // This creates the SVG content
    const svgContent =
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    ${shape.render()}
    
    <text x="50%" y="50%" font-size="40" fill="${userInput.textColor}" text-anchor="middle" dominant-baseline="middle">${userInput.text}</text>

</svg>`;
    
    // This writes the SVG content to a file
    fs.writeFileSync(`examples/${logoName}`, svgContent);
    console.log(`Generated ${logoName}`);
}

run();
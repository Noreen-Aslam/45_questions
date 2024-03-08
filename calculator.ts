import inquirer from 'inquirer';

async function calculate() {
    let answer = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Select your first number"
        },
        {
            name: "num2",
            type: "number",
            message: "Select your second number"
        },
        {
            name: "operator",
            type: "list",
            choices: ["addition", "subtraction", "multiplication", "division"],
            message: "Select your operator"
        }
    ]);

    const { num1, num2, operator } = answer;

    if (num1 !== undefined && num2 !== undefined && operator !== undefined) {
        let result = 0;
        if (operator === "addition") {
            result = num1 + num2;
        } else if (operator === "subtraction") {
            result = num1 - num2;
        } else if (operator === "multiplication") {
            result = num1 * num2;
        } else if (operator === "division") {
            result = num1 / num2;
        } else {
            console.log("Oops! Enter valid numbers and select operator.");
            return;
        }
        console.log("Result:", result);
    } else {
        console.log("Oops! Enter valid numbers and select operator.");
    }
}


calculate();


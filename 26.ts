// Version 1: Running the if block (assuming the alien's color is green)
let alienColor: string = "green";

// Check if the alien's color is green
if (alienColor === "green") {
    // Print a statement that the player just earned 5 points for shooting the green alien
    console.log("You just earned 5 points for shooting the green alien.");
} else {
    // Print a statement that the player just earned 10 points
    console.log("You just earned 10 points.");
}

// Version 2: Running the else block (assuming the alien's color is not green)
alienColor = "red"; // Assuming the color is red

// Check if the alien's color is green
if (alienColor === "green") {
    // Print a statement that the player just earned 5 points for shooting the green alien
    console.log("You just earned 5 points for shooting the green alien.");
} else {
    // Print a statement that the player just earned 10 points
    console.log("You just earned 10 points.");
}

let alienColor: string = "green"; // Change this variable to test different alien colors

// Check if the alien's color is green
if (alienColor === "green") {
    console.log("You just earned 5 points for shooting the green alien.");
} 
// Check if the alien's color is yellow
else if (alienColor === "yellow") {
    console.log("You just earned 10 points for shooting the yellow alien.");
} 
// Check if the alien's color is red
else if (alienColor === "red") {
    console.log("You just earned 15 points for shooting the red alien.");
} 
// If the color is none of the specified colors
else {
    console.log("Invalid alien color!"); 
}

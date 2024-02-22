// Define the function make_great to modify a copy of the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    // Initialize an empty array to store the modified magician names
    let greatMagicians: string[] = [];

    // Loop through the original array of magician names
    for (let magician of magicians) {
        // Add "the Great" to each magician's name and push it to the new array
        greatMagicians.push("the Great " + magician);
    }

    // Return the new array containing the modified magician names
    return greatMagicians;
}

// Define the function show_magicians to print the names of magicians in the array
function show_magicians(magicians: string[]): void {
    // Loop through the array of magicians
    for (let magician of magicians) {
        // Print each magician's name
        console.log(magician);
    }
}

// Define an array of magician's names
let magicians: string[] = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];

// Call the make_great function with a copy of the array of magicians' names
let greatMagicians: string[] = make_great([...magicians]); // Using spread operator to create a copy of the array

// Call the show_magicians function with the original array to show the unchanged names
console.log("Original magicians:");
show_magicians(magicians);

// Call the show_magicians function with the new array to show the names with "the Great" added
console.log("\nGreat magicians:");
show_magicians(greatMagicians);

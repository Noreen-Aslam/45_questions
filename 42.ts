// Define the function make_great to modify the array of magicians by adding "the Great" to each magician's name
function make_great(magicians: string[]): void {
    // Loop through the array of magicians
    for (let i = 0; i < magicians.length; i++) {
        // Add "the Great" to each magician's name
        magicians[i] = "the Great " + magicians[i];
    }
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

// Call the make_great function to modify the array of magicians
make_great(magicians);

// Call the show_magicians function to see that the list has actually been modified

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

// Call the show_magicians function with the array of magician's names
show_magicians(magicians);

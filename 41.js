// Define the function show_magicians to print the names of magicians in the array
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define an array of magician's names
var magicians = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call the show_magicians function with the array of magician's names
show_magicians(magicians);

// Define the function make_great to modify the array of magicians by adding "the Great" to each magician's name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Define the function show_magicians to print the names of magicians in the array
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define an array of magician's names
var magicians = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call the make_great function to modify the array of magicians
make_great(magicians);
// Call the show_magicians function to see that the list has actually been modified
show_magicians(magicians);

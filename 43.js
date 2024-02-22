var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define the function make_great to modify a copy of the array of magicians by adding "the Great" to each magician's name
function make_great(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}
// Define the function show_magicians to print the names of magicians in the array
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Define an array of magician's names
var magicians = ["Merlin", "David Copperfield", "Houdini", "Penn & Teller"];
// Call the make_great function with a copy of the array of magicians' names
var greatMagicians = make_great(__spreadArray([], magicians, true)); // Using spread operator to create a copy of the array
// Call the show_magicians function with the original array to show the unchanged names
console.log("Original magicians:");
show_magicians(magicians);
// Call the show_magicians function with the new array to show the names with "the Great" added
console.log("\nGreat magicians:");
show_magicians(greatMagicians);

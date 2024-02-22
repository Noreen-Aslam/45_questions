// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
var locations = ["UAE", "Maldives", "Australia", "Saudi Arabia", "Singapore"];
console.log(locations);
// Store a copy of original array 
var originalArray = __spreadArray([], locations, true);
// • Print your array in alphabetical order without modifying the actual list.
locations.sort();
console.log("Sorted array: ".concat(locations));
// • Show that your array is still in its original order by printing it.
console.log("Original array: ".concat(originalArray));
// • Reverse the order of your list. Print the array to show that its order has changed
locations.reverse();
// for(let i=0; i< reverseArray.length;i++ ){
//     console.log(`Reverse array: ${reverseArray[i]}`)
// };
// second method to print the reverse array 
console.log("Reverse array:  ".concat(locations.join(",")));
// • Reverse the order of your list again. Print the list to show it’s back to its original
// // order.
locations.reverse();
console.log(" Array back to its original order: ".concat(locations.join("\n")));
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its
// order has been changed
console.log(locations);

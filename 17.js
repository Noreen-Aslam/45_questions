// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guest_list = ["Ayesha", "Fatima", "Tayyaba"];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log(" Hii ".concat(guest, ", you are invited to dinner today! "));
}
;
var newGuest_list = ["Hifza", "Aqsa", "Hania"];
for (var _a = 0, newGuest_list_1 = newGuest_list; _a < newGuest_list_1.length; _a++) {
    var guest = newGuest_list_1[_a];
    console.log("\nHi ".concat(guest, " we find more space for diner, you are invited to dinner please join us today\n "));
}
newGuest_list.unshift("Noreen");
newGuest_list.splice(2, 0, "Erum");
for (var _b = 0, newGuest_list_2 = newGuest_list; _b < newGuest_list_2.length; _b++) {
    var guest = newGuest_list_2[_b];
    console.log("\nHi ".concat(guest, " you are invited to dinner today!\n "));
}
while (newGuest_list.length > 2) {
    var removedGuest = newGuest_list.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner today."));
}
console.log("\nFinal Guest List:");
for (var _c = 0, newGuest_list_3 = newGuest_list; _c < newGuest_list_3.length; _c++) {
    var guest = newGuest_list_3[_c];
    console.log("Dear ".concat(guest, " you are invited to dinner please join us today!"));
}
newGuest_list.pop();
console.log(newGuest_list);
newGuest_list.pop();
console.log(newGuest_list);

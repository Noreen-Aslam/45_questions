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

var guest_list = ["Ayesha", "Fatima", "Tayyaba"];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log(" Hii ".concat(guest, ", you are invited to dinner today! "));
}
;
var guestCantMakeIt = "Ayesha";
var newGuest = "Hania";
console.log("\n Unfortunatily ".concat(guestCantMakeIt, " Can't make it to the dinner \n"));
console.log("\n The ".concat(newGuest, " are invited to dinner\n"));
guest_list.shift();
var newGuest_list = ["Hifza", "Aqsa", "Hania"];
for (var _a = 0, newGuest_list_1 = newGuest_list; _a < newGuest_list_1.length; _a++) {
    var guest = newGuest_list_1[_a];
    console.log("\nHey ".concat(guest, " you are invited todinner please join us today\n "));
}

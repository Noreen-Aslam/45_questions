// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["Ayesha", "Fatima", "Tayyaba"];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var guest = guest_list_1[_i];
    console.log(" Dear ".concat(guest, ", you are invited to dinner please join us today! "));
}
;

// Initial list of guests
let guest_list: string[]= [ "Ayesha", "Fatima" ,"Tayyaba" ];

// Invite each guest from the initial list to dinner
for (const guest of guest_list) {
    console.log(`Hii ${guest}, you are invited to dinner today!`);
};

// Additional guests
let newGuest_list:string []=["Hifza","Aqsa","Hania"]

// Invite each new guest to dinner
for (const guest of newGuest_list){
    console.log(`\nHi ${guest}, we have more space for dinner, you are invited to join us today!\n`);
}

// Add new guests to the list
newGuest_list.unshift("Noreen"); // Add "Noreen" to the beginning of the list
newGuest_list.splice(2,0,"Erum"); // Add "Erum" at index 2 without removing any elements

// Invite each guest, including the newly added ones, to dinner
for (const guest of newGuest_list){
    console.log(`\nHi ${guest}, you are invited to dinner today!\n`);
}

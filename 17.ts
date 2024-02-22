// Initial guest list
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

// Add more guests to the list
newGuest_list.unshift("Noreen");
newGuest_list.splice(2,0,"Erum");
for (const guest of newGuest_list){
    console.log(`\nHi ${guest}, you are invited to dinner today!\n`);
}

// Shrinking the guest list
while (newGuest_list.length > 2) {
    // Remove guests from the list and apologize to each one
    let removedGuest = newGuest_list.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner today.`);
}

// Final invitation messages for the remaining two guests
console.log("\nFinal Guest List:");
for (const guest of newGuest_list) {
    console.log(`Dear ${guest}, you are invited to dinner please join us today!`);
}

// Empty the list
newGuest_list.pop();
console.log(newGuest_list);
newGuest_list.pop();
console.log(newGuest_list);

// Guest invitation list
let guestList:string[]=["Aqsa", "Fatima","Ayesha"];

// Print invitation messages for each guest in the list
for (const guest of guestList){
    console.log(`Dear ${guest}, you are invited to lunch. Please join us today`);
}

// Change in Guest List
const guestCantMakeIt: string = "hiba"; // Guest who can't make it
const newInvitee: string = "hunzala"; // New invitee

// Print the guest name who can't make it
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);

// Replace the guest name who can't make it with a new invite
const indexToRemove: number = guestList.indexOf(guestCantMakeIt);
if (indexToRemove !== -1) {
    guestList.splice(indexToRemove, 1, newInvitee);
}

// Print the updated invitation messages
for (const guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner. Please join us!`);
}

// Array containing the list of initial guests
let guest_list: string[] = ["Ayesha", "Fatima", "Tayyaba"];

// Loop through each guest in the guest list and print invitation message
for (const guest of guest_list) {
    console.log(`Hii ${guest}, you are invited to dinner today!`);
};

// Name of the guest who can't make it to the dinner and the new guest
let guestCantMakeIt:string = "Ayesha";
let newGuest:string = "Hania";

// Output the guest who can't make it to the dinner
console.log(`\nUnfortunately ${guestCantMakeIt} can't make it to the dinner.\n`);

// Output the new guest who is invited to the dinner
console.log(`\nThe ${newGuest} is invited to dinner.\n`);

// Remove the first guest from the original list
guest_list.shift();

// Array containing the list of new guests
let newGuest_list:string []=["Hifza","Aqsa","Hania"];

// Loop through each new guest in the new guest list and print invitation message
for (const guest of newGuest_list){
    console.log(`\nHey ${guest}, you are invited to dinner today. Please join us!\n`);
}

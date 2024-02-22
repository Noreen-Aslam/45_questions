// Define a guest list
var guestList = ["Albert Einstein", "Maya Angelou", "Elon Musk"];
// Function to print invitation messages
function sendInvitations(guests) {
    guests.forEach(function (guest) {
        console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner. We would be honored to have you join us for an evening of delightful conversation.\n\nBest regards,\n[ Noreen]"));
    });
}
// Send invitations to the guests
sendInvitations(guestList);

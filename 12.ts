// Define a constant array of guests
const guestList: string[] = ["Albert Einstein", "Maya Angelou", "Elon Musk"];

// Function to send invitations to the guests
function sendInvitations(guests: string[]): void {
  // Iterate over each guest in the list
  guests.forEach((guest) => {
    // Output a personalized invitation message for each guest
    console.log(`Dear ${guest},\nYou are cordially invited to dinner. We would be honored to have you join us for an evening of delightful conversation.\n\nBest regards,\n[ Noreen]`);
  });
}

// Send invitations to the guests by calling the function
sendInvitations(guestList);

// Define the list of current users
let current_users: string[] = ["Ayesha", "Fatima", "Aqsa", "Haleema", "Hifza"];

// Define the list of new users
let new_users: string[] = ["Noreen", "Summaiya", "Tooba", "Erum", "Hareem"];

// Convert all usernames to lowercase for case-insensitive comparison
let current_users_lowercase: string[] = current_users.map(user => user.toLowerCase());

// Loop through each new username to check if it's already been used
for (let new_user of new_users) {
    // Convert the new username to lowercase for case-insensitive comparison
    let new_user_lowercase: string = new_user.toLowerCase();

    // Check if the lowercase version of the new username exists in the list of current users
    if (current_users_lowercase.includes(new_user_lowercase)) {
        // Print a message indicating that the username is already taken
        console.log(`Username '${new_user}' is already taken. Please choose another one.`);
    } else {
        // Print a message indicating that the username is available
        console.log(`Username '${new_user}' is available.`);
    }
}

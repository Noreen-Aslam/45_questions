// Define the array of usernames
let usernames: string[] = ["admin", "john", "emma", "alice", "sam"];

// Loop through the array of usernames
for (let username of usernames) {
    // Check if the username is 'admin'
    if (username === "admin") {
        // Print a special message for the admin
        console.log("Hello admin, would you like to see a status report?");
    } else {
        // Print a generic message for other users
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}

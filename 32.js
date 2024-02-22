// Define the list of current users
var current_users = ["user1", "user2", "user3", "user4", "user5"];
// Define the list of new users
var new_users = ["user6", "user7", "user3", "user8", "user9"];
// Check each new username against the current users list
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Check if the new username already exists in the current users list
    if (current_users.includes(new_user)) {
        console.log("Username '".concat(new_user, "' is already taken. Please choose another one."));
    }
    else {
        console.log("Username '".concat(new_user, "' is available."));
    }
}

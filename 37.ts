// Define the function make_shirt with default parameters
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    // Print a message indicating the shirt size and message
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Call the function make_shirt with default parameters
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, friends!"); // Small shirt with custom message

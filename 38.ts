// Define the function describe_city with a default parameter for the country
function describe_city(city: string, country: string = "Unknown"): void {
    // Print a message indicating the city and its country
    console.log(`${city} is in ${country}.`);
}

// Call the function describe_city for three different cities
describe_city("Karachi", "Pakistan"); // City in specified country
describe_city("Tokyo", "Japan"); // City in specified country
describe_city("London"); // City with default country

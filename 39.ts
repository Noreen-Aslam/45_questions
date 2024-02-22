// Define the function city_country to format city and country
function city_country(city: string, country: string): string {
    // Concatenate city and country with a comma
    return `${city}, ${country}`;
}

// Call the function city_country with three city-country pairs
let formatted1: string = city_country("Lahore", "Pakistan");
let formatted2: string = city_country("Paris", "France");
let formatted3: string = city_country("New York", "USA");

// Print the values returned by the function
console.log(formatted1);
console.log(formatted2);
console.log(formatted3);

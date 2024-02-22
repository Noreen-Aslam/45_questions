// Define the function city_country to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function city_country with three city-country pairs
var formatted1 = city_country("Lahore", "Pakistan");
var formatted2 = city_country("Paris", "France");
var formatted3 = city_country("New York", "USA");
// Print the values returned by the function
console.log(formatted1);
console.log(formatted2);
console.log(formatted3);

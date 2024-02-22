// Define the function describe_city with a default parameter for the country
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function describe_city for three different cities
describe_city("Karachi", "Pakistan"); // City in default country
describe_city("Tokyo", "Japan"); // City not in default country
describe_city("London"); // City in default country

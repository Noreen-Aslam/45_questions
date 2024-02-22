// Define the function car_info to store information about a car in an object
function car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    // Initialize an object to store car information with mandatory properties
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model,
    };

    // Add additional information to the car object
    for (let extra of extras) {
        // Merge each additional property into the car object
        car = { ...car, ...extra };
    }

    return car; // Return the completed car object
}

// Call the function car_info with the required information and additional name-value pairs
let myCar = car_info("Toyota", "Camry", { color: "blue" }, { year: 2022 });

// Print the object returned by the function to make sure all the information was stored correctly
console.log(myCar); // Output the car object

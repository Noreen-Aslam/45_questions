// Array mein shehron ka list banayein
const cities: string[] = ["Multan", "Lahore", "Karachi", "Islamabad", "Peshawar"];

// print the list of the cities 
console.log("Shahron ki list:");
for (let i=0; i <cities.length; i++){
    // Print each city with its index number
    console.log((i+1) + "." + (cities[i]))
};

// second method to print the list of the cities 
// Using map function to iterate through the cities array and print each city
cities.map((item) => console.log(item));

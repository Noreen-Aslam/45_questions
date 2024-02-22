// Array mein shehron ka list banayein
var cities = ["Multan", "Lahore", "Karachi", "Islamabad", "Peshawar"];
// Banayein shahron ka list ko print karne ka program
console.log("Shahron ki list:");
for (var i = 0; i < cities.length; i++) {
    console.log((i + 1) + "." + (cities[i]));
}
;
cities.map(function (item) { return console.log(item); });

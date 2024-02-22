var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Define the function car_info to store information about a car in an object
function car_info(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // Add additional information to the car object
    for (var _a = 0, extras_1 = extras; _a < extras_1.length; _a++) {
        var extra = extras_1[_a];
        car = __assign(__assign({}, car), extra);
    }
    return car;
}
// Call the function car_info with the required information and additional name-value pairs
var myCar = car_info("Toyota", "Camry", { color: "blue" }, { year: 2022 });
// Print the object returned by the function to make sure all the information was stored correctly
console.log(myCar);

// Qno:10 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var Names = ["Ayesha", "Fatima", "Aqsa", "Haleema", "Hareem", "Noreen"];
for (var N = 0; N < Names.length; N++) {
    console.log("Hello,".concat(Names[N], "!have a nice day."));
}

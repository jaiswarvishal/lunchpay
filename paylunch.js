//whos buying lunch today?
var names = ["Shubhankar", "Vishal", "Ravindra", "Nitesh", "Deepak", "Nikhil", "Pradeep"];
function whoPaying(names)
{
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " is going to buy lunch today!";
}
// from data.js
var tableData = data.js;

// YOUR CODE HERE!
// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});

console.log(data)

// This activity was designed to run multiple times. For each time uncomment once step, run the JavaScript code,
// comment the step again and move to the next step. 

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
 data.forEach(function(weatherReport) {
  console.log(weatherReport);
 });

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
 data.forEach(function(weatherReport) {
   console.log(weatherReport);
   var row = tbody.append("tr");
 });

// Step 3:  Use `Object.entries` to console.log each weather report value
 data.forEach(function(weatherReport) {
   console.log(weatherReport);
  var row = tbody.append("tr");

  Object.entries(weatherReport).forEach(function([key, value]) {
   console.log(key, value);
 });
});

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(weatherReport) {
 console.log(weatherReport);
 var row = tbody.append("tr");

 Object.entries(weatherReport).forEach(function([key, value]) {
  console.log(key, value);
  // Append a cell to the row for each value
  // in the weather report object
  var cell = row.append("td");
 });
});

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
 data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
   Object.entries(weatherReport).forEach(function([key, value]) {
   console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
   var cell = row.append("td");
   cell.text(value);
  });
 });


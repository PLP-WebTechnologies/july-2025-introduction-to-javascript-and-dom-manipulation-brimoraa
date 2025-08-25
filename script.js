// =======================
// Part 1: Variables & Conditionals
// =======================
let age = 20;
let name = "Patrick";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// =======================
// Part 2: Custom Functions
// =======================
function greetUser(username) {
  console.log("Hello, " + username + "!");
}

function addNumbers(a, b) {
  return a + b;
}

// Call functions
greetUser("Patrick");
console.log("Sum: " + addNumbers(10, 5));

// =======================
// Part 3: Loops
// =======================

// For loop example
for (let i = 1; i <= 5; i++) {
  console.log("For Loop iteration: " + i);
}

// While loop example
let count = 1;
while (count <= 3) {
  console.log("While Loop count: " + count);
  count++;
}

// =======================
// Part 4: DOM Interactions
// =======================

// 1. Change text when button is clicked
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("info").textContent = "The text has been changed!";
});

// 2. Toggle color on title
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.getElementById("main-title").classList.toggle("highlight");
});

// 3. Add new list item
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item";
  document.getElementById("list").appendChild(newItem);
});

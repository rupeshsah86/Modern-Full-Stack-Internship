// Synchronous Code
console.log("Start");

// Asynchronous Task
setTimeout(function () {
  console.log("Hello from timer");
}, 5000);

// Asynchronous Task
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  console.log("You clicked the button!");
});

// Asynchronous task
fetch("https://dummyjson.com/users")
  .then((response) => response.json)
  .then((data) => console.log("fetched users:", data))
  .catch((error) => {
    console.log(error);
  });

const p1 = new Promise((resolve, reject) => {
  resolve("Hello from promise");
});
// console.log("p1:", p1);
p1.then((response) => console.log(response));

// Synchronous Code
console.log("End");

// start - this is quickly executed in call stack
// end - this is also quickly executed
// Hello From promise  -- callback stored in MicroTask Queue
// fetch() -- callback in .then() stored in MicroTask Queue
// timer -- stored in Callback Queue
// event listener (click) -- stored in Callback Queue

console.log(1);

setTimeout(function () {
  console.log(2);
}, 2000);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  })
  .then(function () {
    console.log("hey");
  });

console.log(5);

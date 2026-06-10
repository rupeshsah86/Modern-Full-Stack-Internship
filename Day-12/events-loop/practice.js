
console.log("begins");
setTimeout(() => console.log("setTimeout 1"));
Promise.resolve().then(() => {
  console.log("priomise 1");
},0);





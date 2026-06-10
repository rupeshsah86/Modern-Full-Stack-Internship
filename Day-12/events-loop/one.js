// console.log("begins");
// setTimeout(() => console.log("setTimeout 1"));
// Promise.resolve().then(() => {
//   console.log("priomise 1");
// },0);

console.log("script");
setTimeout(() => console.log("1"), 0);
Promise.resolve().then(()=>{console.log("2");})
.then(()=>{console.log("2");})
.then(()=>{console.log("2");});
console.log("end");

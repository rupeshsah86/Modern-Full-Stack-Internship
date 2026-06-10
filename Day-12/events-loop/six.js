console.log("script start");
setTimeout(()=>{
console.log("setTimeout 1");
    console.log("promise inside setTimeout");
    resolve();
}).then(()=>{
    console.log("then inside setTimeout");
});

console.log("script end");
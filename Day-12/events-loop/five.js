console.log("script start");
setTimeout(()=>{
console.log("setTimeout 1");

new Promise((resolve)=>{
    console.log("promise inside setTimeout");
    resolve();
}).then(()=>{
    console.log("then inside setTimeout");
});
},0);
console.log("script end");
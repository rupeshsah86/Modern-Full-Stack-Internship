console.log("script start");
new Promise((resolve)=>{
    console.log("promise start");
    setTimeout(()=>{
        console.log("setTimeout inside promise");
        resolve();
    },0);
}).then (()=>{
    console.log("promise end");
});
console.log("script end")
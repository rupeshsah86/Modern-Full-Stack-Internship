console.log("script start");

setTimeout(()=>{
    console.log("setTimeout 1");
},0);

new Promise((resolve)=>{
    console.log("promise 1");
    resolve();
}).then(()=>{
    console.log("then 1");
    new Promise ((resolve)=>{
        console.log("promise 2");
        resolve();
    }).then(()=>{
        console.log("then 2");
});
});
console.log("sript end");
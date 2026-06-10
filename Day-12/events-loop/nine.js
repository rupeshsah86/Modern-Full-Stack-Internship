console.log("1");
setTimeout(() => console.log("2"), 0);
setTimeout(() => console.log("3"), 0);

const p = Promise.resolve();
for (let i = 0; i < 2; i++) {
  p.then(() => {
    setTimeout(() => {
      console.log("4");
      setTimeout(() => console.log("5"), 0);
      p.then(() => console.log("6"));
    }, 0);
    console.log("7");
  });
  console.log("8");
}

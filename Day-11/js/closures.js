// function fun1(){
//     var b = 20;
//     function fun2(){
//         var a = 100;
//         function fun3(){
//             console.log(a, b);
//         }
//         fun3();
//     }
//     fun2();
// }

// fun1();

// function fun1(){
//     var a = 50;
//     function fun2(){
//         return a;
//     }
//     return fun2;
// }

// const output = fun1(); // 50
// const result = output();
// console.log("output", result);

// function outer(a) {
//   console.log("a inside outer: ", a);
//   function inner() {
//     let b = 99;
//     // console.log(a, b);
//     // JS engine looks for a first in inner
//     // function scope, if a is not present
//     // it will look inside the parent scope
//     return { a, b };
//   }
//   // console.log("b: ", b);
//   return inner;
// }
// const result = outer(9999);
// const output = result();
// console.log(output);

// Inner function will remember all the variables
// declared in its own scope as well as all the
// variables declared in its parent scope

// Start
// Inside set time out
// i: 10

// closures();

// Print numbers from 1 to 5
// 1 ---- after 1 sec
// 2 ---- after 2 sec
// 3 ---- after 3 sec
// ----------------
// 5 ---- after 5 sec

function printNums() {
  //   var i = 10;
  // memory address = 800
  console.log("Start");
  for (var i = 1; i <= 5; i++) {
    function xyz(i) {
      setTimeout(() => {
        console.log("i:", i);
      }, i * 1000);
    }
    xyz(i);
  }
  console.log("end");
}
printNums();
// 6 6 6 6 6

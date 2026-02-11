// Function greet(){
//     console.log("hello nitu");
// }
//     greet();





// // let marks=20;

// // if (marks >= 60) {
// //     console.log("great");
// // }
// // else if (marks >= 40) {
// //     console.log("best");
// // }
// // else if (marks >= 30) {
// //     console.log("pass");
// // }
// // else {
// //     console.log("fail");
// // }

//witch case program 

// let day=1;
// switch (day){
//     case 1:
//     console.log("sunday");
//     break;
//     case 2:
//      console.log("monday");
//      break;
//      case 3:
//          console.log("thusday");
//     default:
//          console.log("invalid");    
//     };
    

    // Using for loop 
    
    // for (let i=1; i<=10; i++){
    //     console.log("", i);
    // };

// here using  do while loop.

// let i = 1;
// do{

//     console.log(i);
//     i++;
// }
//     while(i<=50);



// do while - literation repeat whenever condition satisfy 
// let i = 1;
// do{
//     console.log(i);
//     i++;

// }
// while(i<=5);


// for loop 
// for (let i=1; i<=15; i++){
//     if (i==10)
//         break;
//     console.log(i);

// };


// function declaration 

// function greet(){
//     console.log("hello nitu");

// }
// greet();

// function expression 
// const greet = function (ooooooooooooooooo,,,,,,,,,,,,,,,,,,,,,,,,kk m,laaaaaaaaaaddxqddddddddddddddddddd){
//     console.log("hello nitish ");

// };
// greet();


// const greet = () => {
//     console.log("hello");
// };
// greet();


// function add (a,b){
//     return a+b;
// }

// let result =add(7,3);
//     console.log(result);





function sum(...numbers){
    console.log(numbers);


// }
// sum(1,2,3);




function sum (...numbers){
    let total =0;
    for (let n of numbers){
        total +=n;

    }console.log(total);
}
sum(50,60,70,80);


// spread values 
let nums=[1,2,3];
let newnum =[...nums, 4,5];

console.log(newnum);


// function overriden 

class vehical{
    start(){
        console.log("vehical start");

    }
}
class Car extends vehical{
    start(){
        console.log("car start with key ");

    }
}
class Bike extends vehical{
    start(){
        console.log("bike start ");
    }
}

let v1= new Car();
let v2= new Bike ();

v1.start();
v2.start()}
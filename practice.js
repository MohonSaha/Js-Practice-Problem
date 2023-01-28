// Problem-1

var mother = 1000;
// console.log(`Mom Give me ${mother}`);

var apple = 400;
var orange = 300;
var totalFruits = apple + orange;

var rest = mother - totalFruits;
// console.log(`Rest of the money is ${rest}`);



// Problem-2 

var math = 75.25;
var bangla = 99.50;
var physics = 35.45;
var boilogy = 65;
var chemistry = 80;

var sum = math + bangla + physics + boilogy + chemistry;

var ave = sum / 5;
var result = ave.toFixed(2);
// console.log(result);



// Problem-3 

var text1 = "I am going to be";
var text2 = "an awesome web developer";

var result = text1 + " " + text2;
// console.log(result);


// problem-4 
// You are giben an array: var fruits = ['apple', 'banana', 'orange']; 
// a) Find the index of banana and replace banana with mango
// b) Remove the orange and add wathermelon 

var fruits = ['apple', 'banana', 'orange']; 
var indexOfBanana = fruits.indexOf('banana');
fruits[1] = "mango";
fruits.pop();
fruits.push("Watermalon")

// console.log(fruits);



// Problem-5 (Grade Problem)

var mohon = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var jhon = 40;

//  var num = tom;
// if(num >= 80){
//     console.log("You got A grade");
// }
// else if (num >= 60){
//     console.log("You got B grade");
// }
// else{
//     console.log("You are fail");
// }



// Problem-6 
// You have given three numbers 13, 79 and 45. Write a program that will print the largest number using if else 

var num1 = 13;
var num2 = 79;
var num3 = 45;

// if(num1 > num2){
//     if(num1 > num3){
//         console.log(num1);
//     }
//     else{
//         console.log(num3);
//     }
// }
// else{
//     if(num2 > num3){
//         console.log(num2);
//     }
//     else{
//         console.log(num3);
//     }
// }



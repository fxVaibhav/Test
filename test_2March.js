/*
1  => DONE
2  => 
3  => 
4  => DONE
5  => DONE
6  => DONE
7  => DONE
8  => DONE
9  => DONE 
10 => DONE
11 => DONE
/*

/*
1. Write a JavaScript program that takes a month number (1 for January, 2 for February, and so on) as input and prints the number of days in that month. Consider leap years (February has 29 days in a leap year, otherwise 28), and assume all other months have a standard number of days (January, March, May, July, August, October, December have 31 days, April, June, September, November have 30 days).

INPUT - MONTH NUMBER
PRINT - DAYS IN MONTH

=> ANSWER
alert("ENTER ONLY IN NUMBERS");
let m = +prompt("Enter Month Number...");
switch (m) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31 Days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30 Days");
    break;
  case 2:
    let y = +prompt("Enter Year...");
    let leapD = new Date(y, 1, 29);
    if (leapD.getMonth() === 1 && leapD.getDate() === 29) {
      console.log("29 Days");
    } else if (y >= 1880) {
      console.log("28 Days");
    } else {
      console.log("invalid");
    }
}
*/

/*
4. Create function to find max of 2 numbers by using all 3 types of function .
=> ANSWER

// function declaration
// function findMax(a, b) {
//   let x = Math.max(a, b);
//   console.log(x);
// }
// findMax(5, 2);

// function expression / anonynmous
// let findMax = function (a,b){
//     let x = Math.max(a,b);
//     console.log(x);
// }
// findMax(5,1);

// arrow function
// let findMax = (a, b) => {
//   let x = Math.max(a, b);
//   console.log(x);
// };
// findMax(234, 654);
*/

/*
5. Add all the number of an array and print sum using for-of loop
=> ANSWER

let arr = [10, 6, 69, 95, 62];
let sum = 0;
for (const a of arr) {
  sum += a; // 0+10
}
console.log(sum);
*/

/*
6. Write a function to find maximum number from an array.

=> ANSWER
let arr = [12,34,35,65,23,65,4]
let ans = Math.max(...arr);
console.log(ans);
*/

/*
7. Write a function to find minimum number from an array.

=> ANSWER
let arr = [123,43,234,5,12,7,21]
let ans = Math.min(...arr)
console.log(ans);
*/

/*
8. Write a function to reverse a string.

=> ANSWER
let str = "reversing this sentence";
console.log(str);
let rev = str.split("").reverse().join("");
console.log(rev);
*/

/*
9. Write a function to count all odd number in an array.

=> ANSWER
// let arr = [12, 4, 2, 234, 53, 24, 2345, 6, 123];
let arr = [129, 43, 29, 2341, 53, 41, 2345, 5, 123];
let count = 0;
for (const a of arr) {
    if (a % 2 !== 0) {
        count++;
    }
}
console.log(count);
*/

/*
10. Write a function to count all even number in an array.

=> ANSWER
let arr = [12, 4, 2, 234, 53, 24, 2345, 6, 123];
let count = 0;
for (const a of arr) {
    if (a % 2 == 0) {
        count++;
    }
}
console.log(count);
*/

/*
11. Write a function that takes an array of strings and returns the longest string in the array.

=> ANSWER
function findLongestStr(x) {
    let longestStr = "";
    for (let i = 0; i < x.length; i++) {
        if(x[i].length > longestStr.length){
            longestStr = x[i];
        }
    }
    return longestStr;
}

let a = ["vaibhav","mohit","pawan","roshan","gaurav","karan"]
let ans = findLongestStr(a);
console.log(ans);
*/

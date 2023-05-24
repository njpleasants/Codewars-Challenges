//Is n divisible by x and y? 8kyu
//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

//P: All inputs are positive non-zero numbers
//R: Return if n is divisible by x and y 
//E: n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
//P:
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0){
       return true;
   } else {
     return false;
   }
}

//Other Codewars solutions:

function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
  }

const isDivisible = (n, x, y) => n%x==0 && n%y==0;
//Simple multiplication
//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//P: Will always be numbers, not strings
//R: return a number multiplied by 8 if the number is even, return a number multiplied by 9 if odd
//E: if n % 2 === 0, multiply by 8. If n% 3 === 0, multiply by 9
//P:
function simpleMultiplication(number) {
    if(number % 2 === 0){
        return number * 8
        }else{
        return number * 9
        }
    }

    //Other Codewars solutions
    function simpleMultiplication(n) {
        return n * (n % 2 ? 9 : 8);
    }

    function simpleMultiplication(n){
        return n % 2 == 0 ? n * 8 : n * 9
      }
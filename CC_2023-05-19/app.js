//Descending Order 7kyu
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//P: Will be given positive integers
//R: Return the digits in descending order
//E: Input: 42145 Output: 54421
//P:
const descendingOrder = n =>
   Number([...String(n)].sort((a,b)=> b - a).join(''))


//Other Codewars solutions
function descendingOrder(n){
    return Number(n.toString().split('').sort((a,b) => b-a).join(''));
  }
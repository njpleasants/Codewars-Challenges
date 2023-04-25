//Beginner - Reduce But Grow 8kyu
//Given a non-empty array of integers, return the result of multiplying the values together in order. 
//P: array will not be empty, will only be integers 
//R: return the result of multiplying the integers together in order
//E: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
//P:
const grow = x => x.reduce((a,b) => a * b)

//Other Codewars solutions
function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }



//Calculate Average
//Write a function which calculates the average of the numbers in a given list.

//Note: Empty arrays should return 0.
//P:Arrays will have numbers but can also be empty
//R:Returning the average of the numbers in an array
//E:findAverage([1,2,3,4]), 2.5
//P:
const findAverage = array => array.length > 0 ? (array.reduce((a,b) => a + b, 0) / array.length) : 0;

//Other Codewars solutions
function find_average(array) {
    if (array.length === 0) {
    return 0;
    }
    let result = 0;
    for (i=0; i<array.length; i++) {
      result +=array[i];
    }
    return result/array.length;
  }

  let find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }
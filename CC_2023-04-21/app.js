//Array Plus Array 8kyu
//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.
//P: Sum arrays, the arrays only include integer numbers
//R: Return the sum of the arrays
//E: 
//P:
function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a, b) => a + b)
  }

//Other Codewars solutions

arrayPlusArray = (arr1,arr2) => arr1.concat(arr2).reduce((prev, curr) => prev + curr)
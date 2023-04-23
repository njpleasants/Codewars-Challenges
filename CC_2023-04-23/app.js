//Invert Values 8kyu
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//E: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
//invert([]) == []
//You can assume that all values are integers. Do not mutate the input array/list.
//P: all values are integers
//R: return the inverse of each number in the array
//E: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//P:
function invert(array) {
    return array.map(num => num * -1)
 }

//Other Codewars solutions
const invert = array => array.map(num => -num);
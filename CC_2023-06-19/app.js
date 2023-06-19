//Third Angle of a Triangle 8kyu
//You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.
//P: Only positive integers used
//R: Return the third angle 
//E:
//P:
function otherAngle(a, b) {
  let c = (180 - (a + b));
    return c;
}

//Other Codewars solutions:
const otherAngle = (a, b) => 180 - a - b
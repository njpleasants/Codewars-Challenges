//How good are you really? 8kyu
//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.
//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!

//P: You will pass in an array of test scores
//R: Return true if your test score is higher than the classes average, false if it is lower. 
//E: 
//P:

// function betterThanAverage(classPoints, yourPoints) {
//   let classAvg = (classPoints + yourPoints) / (yourPoints + classPoints.length); //calculate the average and include my grade
//   if( yourPoints > classAvg){
//     return true;
//   } else {
//     return false;
//  }
// }

const betterThanAverage = (classPoints, yourPoints) => 
 classPoints.reduce((prev,curr) => prev + curr) / classPoints.length < yourPoints

 //Other Codewars solutions
 function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var classAvg = 0;
  for (var i = 0; i < classPoints.length; i++){
    classAvg += classPoints[i]; 
  }
  classAvg = classAvg/classPoints.length; 
  return yourPoints > classAvg;
}
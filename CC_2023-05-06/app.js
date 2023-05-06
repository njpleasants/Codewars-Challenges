//Get the Mean of an Array 8kyu
//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.
//The array will never be empty.

//P: The array will never be empty, the average must be rounded down to the nearest whole number
//R: Return the average of the array
//E: (getAverage([1,2,3,4,5,]),3
//P:

//add together all of the numbers in array and divide by number of numbers
function getAverage(marks){
    let sum = 0
    for (let number of marks){
      sum += number;
    }
     return Math.floor( sum/marks.length);
  }

//Other Codewars solutions
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }

const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

function getAverage(marks){

    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }
  


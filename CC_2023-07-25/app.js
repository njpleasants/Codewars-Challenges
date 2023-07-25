//Codewars Challenge Grasshopper Grade Book 8kyu
//Grade book
//Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//Numerical Score	Letter Grade
//90 <= score <= 100	'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'
//Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

//P: Values will be between 0 and 100
//R: the letter grade for the average of three scores 
//E: describe('grade book', function () {
  //it('should return an A', function () {
    //Test.assertEquals(getGrade(95,90,93), 'A')
    //Test.assertEquals(getGrade(100,85,96), 'A')
    //Test.assertEquals(getGrade(92,93,94), 'A')
  //})
//P:
function getGrade (s1, s2, s3) {
    avg = (s1 + s2 + s3) / 3;
    if (avg < 60) return 'F';
    else if (avg < 70) return 'D';
    else if (avg < 80) return 'C';
    else if (avg < 90) return 'B';
    else return 'A';
}

//Other Codewars solutions
function getGrade (s1, s2, s3) {
    var avg = (s1 + s2 + s3)/3;
    switch(true) {
      case (avg >= 90):
        return 'A';
      case ( avg >= 80):
        return 'B';
      case ( avg >= 70):
        return 'C';
      case ( avg >= 60):
        return 'D'; 
      default:
        return 'F';   
    }
   }

   function getGrade (s1, s2, s3) {
    // Code here
    var avg = (s1 + s2 + s3) / 3
    if (avg >= 90)
        return 'A'
    if (avg >= 80)
        return 'B'
    if (avg >= 70)
        return 'C'
    if (avg >= 60)
        return 'D'
    return 'F'
  }

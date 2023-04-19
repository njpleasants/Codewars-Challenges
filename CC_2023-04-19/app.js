//You Only Need One - Beginner
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//Array can contain numbers or strings. X can be either.

//Return true if the array contains the value, false if not.
//P:Array can be numbers or strings
//R:return true if X is present
//E: array.includes(x) 
//P:
function check(a, x) {
    if (a.includes(x) == true){
        return true
    }else{
        return false
        }
    }

//Other codewars solutions
const check = (a,x) => a.includes(x);

function check(a,x){
    return a.includes(x);
  };

  
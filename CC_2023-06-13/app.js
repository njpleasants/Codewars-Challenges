//If you can't sleep, just count sheep!! 8kyu
//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
//P: No negative numbers, no strings
//R: Return a string counting sheep in order
//E: "1 sheep...2 sheep...3 sheep..."
//P:
var countSheep = function (num){
    let sheepString = '';
    for( let i = 1; i <= num; i++){
       sheepString += i.toString() + ' sheep...'
    }
    return sheepString
  }

//Other Codewars solutions
var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }


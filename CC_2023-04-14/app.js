//Digit*digit 7kyu
//In this kata, you are asked to square every digit of a number and concatenate them.

//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

//Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

//Note: The function accepts an integer and returns an integer.
//P: accepts an integer and returns an integer
//R: Return the square of every digit of a number and concatenate them
//E: 765 will return 493625
//P:
  
function squareDigits(num){
    let res = "";
    num = num.toString();
    for (let i = 0; i < num.length; i++)
    {
      res = res + (num[i] * num[i]).toString();
    }
    return Number(res);
  }

  // other soltions
  function squareDigits(num){
    return Number(String(num).split("").map(function (item) { return Math.pow(Number(item), 2); }).join(""));
  }


  function squareDigits(num){
    var string = num.toString();
    var results = [];
    for (var i = 0; i < string.length; i++){
        results[i] = string[i] * string[i];
    }
    return Number(results.join(''));
};

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }
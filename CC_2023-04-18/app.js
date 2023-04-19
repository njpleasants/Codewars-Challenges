//Vowel Count 7kyu
//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.
//P: will consider a, e, i, o, u as vowels
//R: return the number of vowels in the string
//E: 
//P:
function getCount(str) {
    let vowelsCount = 0
    const vowels = ['a','e','i','o','u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount;
  }

  //other codewars solutions
  function getCount(str) {
    var vowelsCount = 0;
    str.split("").forEach(function(x){
      if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
        vowelsCount += 1;
      }
    });  
    return vowelsCount;
  }
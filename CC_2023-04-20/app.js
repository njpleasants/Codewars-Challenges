//Fake Binary
//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//P: Input will never be an empty string
//R: Return any digit below 5 with 0 and any digit above 5 with 1
//E:
//P:
function fakeBin(x){
    let bin = '';
    for (const char of x) {
        if (parseInt(char) < 5){
            bin += '0';
        }else{
            bin += '1';
        }
    }
    return bin
}

//Other Codewars solutions

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}

function fakeBin(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }

  fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');

  function fakeBin(x){
    return x.split('').map(a => a < '5' ? "0" : "1").join("");
  }
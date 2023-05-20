//Get the Middle Character
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//P: Will be given words, no integers
//R: Return the middle character if the word length is odd. Return the middle two characters is the word length is even.
//E: Kata.getMiddle("test") should return "es" Kata.getMiddle("testing") should return "t"
//P:
function getMiddle(s)
{
  //Code goes here!
}
function getMiddle(s){
    let length = s.length;
    if( length < 2){
      return s;
    } 
      if( length % 2 ){
     for( i = 0; i < length; i++)
       if( i == (length - 1) / 2){
         return s[i];
       } 
    } else {
     for( i = 0; i < length; i++){
       if( i == length / 2){
         return s[i - 1] + s[i];
         }
      } 
    }
  }
//Other Codewars solutions

function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
    }
  }

  function getMiddle(s)
  {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
  }
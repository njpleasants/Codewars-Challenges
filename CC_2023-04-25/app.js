//Check Same Case 8kyu
//Write a function that will check if two given characters are the same case.

//If either of the characters is not a letter, return -1
//If both characters are the same case, return 1
//If both characters are letters, but not the same case, return 0

//P: Will have two characters but not necessarily both integers or letters
//R: Return -1 if neither is a letter, return 1 if both are letters and the same case, return 0 if both letters but not same case
//E: 'a' and 'g' returns 1, 'A' and 'C' returns 1, 'b' and 'G' returns 0, 'B' and 'g' returns 0, '0' and '?' returns -1
//P:
function sameCase(a, b){
    if( a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()){
        return -1;
    }else if ( a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase()){
        return 1;
    }else{
        return 0;
    }
  }

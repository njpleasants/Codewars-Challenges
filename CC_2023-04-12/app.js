//Are You Playing Banjo?

//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!

//The function takes a name as its only argument, and returns one of the following strings:

//name + " plays banjo" 
//name + " does not play banjo"
//Names given are always valid strings.

//P: Names given will always be a string
//R: return the name + 'plays banjo' or 'does not play banjo'
//E: `Ron plays banjo` , `ron plays banjo`, `Cooper does not play banjo'
//P:
function areYouPlayingBanjo(name) {
    if(name.startsWith('r') || (name.startsWith('R'))){
      return (name) + ' plays banjo';
    }else{
      return (name) + ' does not play banjo';
    }
  }



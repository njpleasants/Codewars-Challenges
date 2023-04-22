//Name Shuffler 8kyu
 //Write a function that returns a string in which firstname is swapped with last name.
//P: will be a string
//R: returns the strings with the name order swapped
//E: Example(Input --> Output) "john McClane" --> "McClane john"
//P:
function nameShuffler(str){
    const fullName = str.split(" ");
    return [fullName[1], fullName[0]].join(" ");
  }

//other solutions
function nameSuffle(str){
    return str.split(' ').reverse().join(' ');
  }

  const nameShuffler = str => str.split(' ').reverse().join(' ');
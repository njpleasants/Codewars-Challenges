//Abbreviate a Two Word Name
//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot separating them.

//It should look like this:

//Sam Harris => S.H

//patrick feeney => P.F

//First thought process
/*function abbrevName(name){
    //make sure initials are upper case
    name.toUpperCase(name)
    //need to turn name into two arrays
    const newName = name.split('')
    //take zero index in each array
    let initials = newName[0]
    //use ticks to add . between each zero index of array
    return initials + `.`
}*/

function abbrevName(name){
    return name.toUpperCase().split(' ').map(element => element[0]).join('.')
}

//my choice from codewars community solution
/*const abbrevName = (name) => {
    return name.split(" ").map(name => name[0].toUpperCase()).join(".");
  };*/
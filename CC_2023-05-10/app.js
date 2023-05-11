//Remove Exclamation Marks 8kyu
//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
//P: Exclamation marks will be in the given string
//R: Return the string without exclamation marks
//E: removeExclamationMarks("Hello World!"), ("Hello World");
//P: 
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}

//Other solutions from Codewars
function removeExclamationMarks(s) {
  return s.split('!').join('');
}

function removeExclamationMarks(s) {
  return s.replaceAll('!', '');
}

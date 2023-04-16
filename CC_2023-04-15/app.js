//Highest and Lowest 7kyu
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//P: All numbers are valid Int32, no need to validate them. There will always be at least one number in the input string. Output string must be two numbers separated by a single space, and highest number is first.
//R: return highest and lowest number from a string
//E:
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//P: 
function highAndLow(numbers){
    const arr = numbers.split(" ").map(Number).sort((a,b) => b - a)
    return arr[0] + " " + arr[arr.length - 1]
}

//Best practices and other codewars solutions
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

  function highAndLow(numbers){
    var arr = numbers.split(' ').sort(function(a, b) { return a - b });
    return arr[arr.length -1] + ' ' + arr[0];
  }
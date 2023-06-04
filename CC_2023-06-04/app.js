//Will you make it 8kyu
//You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
//Considering these factors, write a function that tells you if it is possible to get to the pump or not.
//Function should return true if it is possible and false if not.
//P: Have two numbers that we will pass through our function
//R: True if sufficient fuel, false if not enough fuel
//E: 
//P:
const zeroFuel = (distanceToPump, mpg, fuelLeft){ 
    if( mpg / distanceToPump > fuelLeft){
        return false;
    } else {
        return true;
    }
  };


//Other solutions
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump/mpg <= fuelLeft
  };


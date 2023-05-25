//Is he gonna survive? 8kyu
//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return true if yes, false otherwise :)
//P: Will pass in a number never a string
//R: Return a yes or no depending on number of bullets
//E: 
//P:
function hero(bullets, dragons){
    if( bullets / 2 >= dragons){
        return true;
    } else {
    return false;
  }
}

//Other Codewars solutions
function hero(bullets, dragons){
    return bullets >= dragons * 2
  }

function hero(bullets, dragons){
    return (bullets / 2 >= dragons) ? true : false;
    }

const hero = (bullets, dragons) => dragons * 2 <= bullets;

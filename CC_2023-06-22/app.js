//Friend or foe? 7kyu
//Make a program that filters a list of strings and returns a list with only your friends name in it. If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
//P:
//R:
//E: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//P:
function friend(friends){
    let result = []
    for (let index = 0; index < friends.length; index++) {
        if(friends[index].length == 4){
            result.push(friends[index]);
        }
      }
      return result;
    }

//Other Codewars solutions
function friend(friends){
    return friends.filter(n => n.length === 4)
  }

const friend = friends => friends.filter(friend => friend.length == 4);

  

  

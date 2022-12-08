
function checkLower(char){
  // var lowerChars = ['a','b','c','d','e','f','g'];
  var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  
  for(var i=0;i<lowerChars.length;i++){
    if(lowerChars[i] == char){
      return true;
    }
  }
  return false;
}

console.log(checkLower('b'));
console.log(checkLower('C'));
console.log(checkLower('E'));
console.log(checkLower('e'));
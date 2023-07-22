var name = "services";
var details = {};

for(var i=0;i<name.length;i++){
  var char = name[i];
  if(details[char]== undefined){
    details[char] = 1;
  }
  else{
    details[char] =  details[char]+1;
  }
}
console.log(details)
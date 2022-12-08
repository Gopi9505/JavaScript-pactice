
function replaceSpace(name){

  var str = "";
  
  for(i=0;i<name.length;i++){
    if(name[i] == ' '){
      str = str + "-";
    }
    else{
      str = str + name[i];
    }
  }
  return str;
}

console.log(replaceSpace("I am a monster"));
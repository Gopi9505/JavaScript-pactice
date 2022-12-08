
for(var i=1;i<=6;i++){
  var pattern = "";
  for(var j=1;j<=6;j++){
    if(i == 1 || i == 6){
      pattern = pattern + "*";
    }
    else{
      if(j == 1 || j == 6){
        pattern = pattern + "*";
      }
      else{
        pattern = pattern + " ";
      }
    }
  }
  console.log(pattern);
}
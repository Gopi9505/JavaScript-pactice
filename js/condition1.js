// stored values
var stoed_user = "gopi";
var stored_pass = 123;

var n = prompt("user name","gopi");
var p = prompt("user name",123);
if(stoed_user == n){
  if(stored_pass == p){
    console.log("successfull");
  }else{
    console.log("password wrong");
  }
}else{
  console.log("user not exists");
}
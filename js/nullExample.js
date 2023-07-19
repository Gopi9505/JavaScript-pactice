function checkingdetails(fname,lname,email,pass,gender,city){
  if(fname==null || lname==null || email==null || pass==null || gender==null || city==null){
    console.log("please provide all the fields")
  }
  else{
    console.log("Your details are: "+fname+" "+lname+" "+email+" "+pass+" "+gender+" "+city);
  }
}

var x = "gopi";
var y = "mittakola";
var z = null;
var a =123;
var b = null;
var c = null;

checkingdetails(x,y,z,a);

var x = "gopi";
var y = "mittakola";
var z = "g@gmail.com";
var a =123;
var b = "male";
var c = "kmm";

checkingdetails(x,y,z,a,b,c);
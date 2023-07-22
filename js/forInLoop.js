var user = {
  name : "gopi",
  age : 20,
  city : "kmm",
  gender : "male"
}

console.log("--Object--");
console.log(user);

console.log("---------------------------------");
console.log("--Object keys only--");
for(var key in user){
  console.log(key);
}

console.log("---------------------------------");
console.log("--Object values only--");
for(var key in user){
  console.log(user[key]);
}

console.log("---------------------------------");
console.log("--Object keys with values--");
for(var key in user){
  console.log(key +":"+user[key]);
}

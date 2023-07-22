var user = {
  name : "gopi",
  age : 20,
  city : "kmm",
  male : true,
  phone : 1234567890
}

console.log(user);

user.hobby = "watching news";
console.log(user);

user.additional = null;
console.log(user);

delete user.additional;
console.log(user);
var arr = ["potato", "onion", "brinjal", "tomato","potato", "onion","carrot"];
var unique = {};

for(var i=0;i<arr.length;i++){
    unique[arr[i]] = "true"
}
console.log(unique);
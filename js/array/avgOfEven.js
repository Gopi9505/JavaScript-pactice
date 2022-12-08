var arr1 = [23, 43, 56, 61, 78, 90, 33, 27];

var sum = 0; 
var count = 0;
var evenArray = [];

for (var i = 0;i<arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    sum = sum + arr1[i];
    count++;
    evenArray.push(arr1[i]);
  }
}

console.log("Average ",sum/count);
console.log(evenArray);
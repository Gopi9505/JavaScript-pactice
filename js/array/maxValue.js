var arr = [3,5,1,9,2,0,3,8,4,9,2];

var max = arr[0];
for(var i=0;i<arr.length;i++){
  if(arr[i]>max){
    max = arr[i];
  }
}

console.log(max);
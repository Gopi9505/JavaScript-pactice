var marks = [23,56,45,78,90,22];

var sum = 0;

for(var i=0;i<marks.length;i++){
  if(i%2==0){
    sum = sum + marks[i];
  }
}

console.log("sum of odd positions : ",sum);
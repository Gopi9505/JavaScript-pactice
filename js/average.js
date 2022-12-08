var start=1;
var end = 100;
var sum = 0;
var count = 0;

while(start<=100){
	if(start %2 ==0){
		sum = sum + start;
    count++;
	}
	start++;
}
var avg = sum/count;
console.log(avg);
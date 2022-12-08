
function isPrime(num){
  
  var factors = 0;

  for(var i=1;i<=num;i++){
    if(num % i == 0){
      factors++;
    }
  }
  
  if(factors == 2){
    return true;
  }
  else{
    return false;
  }
}

console.log(isPrime(5));
console.log(isPrime(2));
console.log(isPrime(8));
console.log(isPrime(11));
var x=13;
var ifPrime=true;
if(x===1){
console.log("1 is not a prime");
}
else if(x>1){

for(var i=2; i<x; i++){
if(x%i==0){
ifPrime=false;
break;

}
}
if(ifPrime){
console.log("Yes");
}
else{
console.log("No");
}


// palindrome---------------------------

var str="naman";
var x=str.length;
var count=0;

for(var i=0; i<x; i++){
if(str[i]!=str[x-i-1]){
count++;
}
}
if(count==0){
console.log("Yes");
}
else{
console.log("No");
}


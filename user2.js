n=require("readline-sync");
var user=n.questionInt("enter your number");
arr=[2,5,9,6,0];
var a=arr.indexOf(user)
i=0;
while(i<arr.length){
    if(arr[i]==user){
        arr.splice(a,1)
    }
    i++;
}

console.log(arr)


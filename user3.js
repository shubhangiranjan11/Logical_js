n=require("readline-sync");
var user=n.questionInt("enter your number");
arr=[2,3,4,5,6,7];
i=0;
while(i<arr.length){
    if(user==arr[i]){
        console.log("True")
    }
    i++;
}

readlinesync=require("readline-sync");
var user=readlinesync.questionInt("enter your number");
max=0
b=[]
i=0
while(i<user){
    var user2=readlinesync.questionInt("enter your number");
    b.push(user2)
    i++
}
console.log(b)
max=0;
x=0;
while(x<b.length){
    if(b[x]>max){
        max=b[x]
    }
    x++;
}
console.log(max)

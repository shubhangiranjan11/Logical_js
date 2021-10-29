readlinesync=require("readline-sync");
var user=readlinesync.questionInt("enter your number");
result=String(user);
list=[]
i=0;
while(i<result.length){
    if  (result[i]%2==0){
        list.push(result[i],"-")
    }
    else{
        list.push(result[i])
    }
    i++;
}
// console.log(list)
string=""
for(x=0;x<list.length;x++){
    if (list[x].includes("")){
        string=string+list[x]
    }
}
console.log(string)



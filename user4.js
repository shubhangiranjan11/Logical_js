l1=[2,4,3];
l2=[3,6,5];
st=""
c=""
i=0;
while(i<l1.length){
    st=st+l1[i]
    c=c+l2[i]
    d=Number(st)+Number(c)
    str=String(d)
    i++;
}
// console.log(str)
l3=[]
x=0
while(x<str.length){
    l3.push(Number(str[x]))
    x++;
}
console.log(l3)


// readlinesync=require("readline-sync");
// var x=readlinesync.questionInt("enter your number");
//  i = 1, result = 1;

// while (result <= x)
// {
//     i++;
//     result = i * i;
// }
// console.log(i - 1);

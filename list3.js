// a=[["a",1,true],["b",2,false]];
// list=[];
// i=0;
// while(i<a.length){
//     j=0;
//     while(j<a[i].length){
//         list.push(a[i][j],a[i+1],a[j])
//         j++;
//     }
//     i++;
// }
// console.log(list)


readlinesync=require("readline-sync");
var user=readlinesync.questionInt("enter your number");
var user2=readlinesync.questionInt("enter your number");
list=[];
while(user<=user2){
    list.push(user)
    user++;
}
console.log(list)


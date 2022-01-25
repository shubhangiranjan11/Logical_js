// n=require("readline-sync");
// var user=n.questionInt("enter your number");
// arr=[2,3,4,5,6,7];
// i=0;
// while(i<arr.length){
//     if(user==arr[i]){
//         console.log("True")
//     }
//     i++;
// }

// readlinesync=require("readline-sync");
// var user=readlinesync.question("enter your strings");
// i=0;
// string1=[];
// while(i<user.length){
//     if(user[i].includes(" ")){
//         string1.push("-",user[i])
//     }
//     else{
//         string1.push(user[i])
//     }
//     i++;
// }
// console.log(string1)

// string=""
// for(x=0;x<string1.length;x++){
//     if (string1[x].includes("")){
//         string=string+string1[x]
//     }
// }
// console.log(string)


i=0;
while(i<10){
    i++;
    if(i==5 || i==6){
        i++;
    }
    else{
        console.log(i)
    }
}

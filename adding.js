array1=[1,0,2,3,4];
array2=[3,5,6,7,8,13];

list1=[]
i=0;
while(i<array1.length){
    list1.push(array1[i]+array2[i])
    i++;
}
if(i===array1.length){
    x=i;
    while(x<array2.length){
        list1.push(array2[x])
        x++;
    }
    console.log(list1)   
}


// n=require("readline-sync");
// var user=n.question("enter your string");
// var user2=n.questionInt("enter your number");
// a= user.repeat(user2);
// console.log(a)

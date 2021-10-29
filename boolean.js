// arr=[58, '', 'abcd', true, null, false, 0];
// b=[]
// c=[]
// i=0;
// while(i<arr.length){
//     if(arr[i]==Boolean(0)){
//         b.push(arr[i])
//     }
//     else{
//         c.push(arr[i])
//     }
//     i++;
// }
// console.log(c)

arr=[58,"","abcd",true,null,false,0];
b=[];
c=[];
i=0;
while(i<arr.length){
    if(arr[i] == false || arr[i] == null || arr[i] == 0 || arr[i] == ""){
        b.push(arr[i])
    }
    else{
        c.push(arr[i])
    }
    i++;
}
console.log(c)

var list1=[1,2,2,3,44,55,6,7,2,44,5,6,7,8,8,8,9];
var list2=[];
i=0;
while(i<list1.length){
    if (!(list2.includes(list1[i]))){
        list2.push(list1[i])
    }
    i++;
}
console.log(list2)
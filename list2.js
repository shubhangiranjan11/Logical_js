a=[[1,2,3],[100,2,1,10]];
list=[];
i=0;
while(i<a.length){
    j=0;
    while(j<a[i].length){
        list.push(a[i][j])
        j++;
    }
    i++;
}
// console.log(list)
list2=[];
x=0;
while(x<list.length){
    if(!(list2.includes(list[x]))){
        list2.push(list[x])
    }
    x++;
}
// console.log(list2)
v=0;
while(v<list2.length){
    j=0;
    while(j<list2.length){
        if(list2[v]<list2[j]){
            var x=list2[v]
            list2[v]=list2[j]
            list2[j]=x
        }
        j++;
    }
    v++;
}
// console.log(list2)

e=0;
while(e<list2.length){
    list2[e]=""+list2[e];
    e++;
}
console.log(list2)



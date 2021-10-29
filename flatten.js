nested_array=[[1, [2], [3, [[4]]],[5,6]]];
list2=[]
i=0;
while(i<nested_array.length){
    j=0;
    while(j<nested_array[i].length){
        list2.push(nested_array[i][j])
        j++;
    }
    i++;
}
// console.log(list2)
k=[]
x=0;
while(x<list2.length){
    h=0;
    while(h<list2[x].length){
        k.push(list2[x][h])
        h++;
    }
    x++;
}
console.log(k)


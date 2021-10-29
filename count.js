var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// list=0;
// count=0;
// i=0;
// while(i<arr1.length){
//     j=0
//     while(j<arr1[i].length){
//         if(arr1[i]==arr1[j]){
//             count++;
//             list=arr1[i]
//         }
//         j++;
//     }
//     i++;
// }
// console.log(count)


list=0;
count=0;
i=0;
while(i<arr1.length){
    if(arr1[i]=='a'){
        count++;
        list=arr1[i]
    }
    i++;
}
console.log(`${list} (${count},times)`)

var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
var i = 0;
while(i<arr1.length){
    var j = 0;
    while(j<arr1.length){
        if(arr1[i]<arr1[j]){
            var x = arr1[i]
            arr1[i] = arr1[j]
            arr1[j] = x;
        }
        j++
    }
    i++
}
console.log(arr1);
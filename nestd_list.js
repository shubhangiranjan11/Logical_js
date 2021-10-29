var a=[[1,2,1,24],[8,11,9,4],[7,0,7,27],[7,4,28,14],[3,10,26,7]];
var string=""
var i=0;
while(i<a.length){
    console.log("row"+i)
    var j=0;
    while(j<a[i].length){
        var list=a[i][j]
        string2=list+string
        console.log(string2)
        j++;
    }
    i++;
}

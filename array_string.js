a = ['NaN','0', 15, 'false', -22, ' ','undefined', 47, 'null'];
v=[]
b=[]
second=typeof(String);
var i=0;
while(i<a.length){
    if(typeof(a[i])===second){
        b.push(a[i])
    }
    else{
        v.push(a[i])
    }
    i++;
}
console.log(v)

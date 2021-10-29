myColor = ["Red", "Green", "White", "Black"];
string=""
list=""
i=0;
while(i<myColor.length){
    if (myColor[i].includes("")){
        string=string+","+myColor[i]
        list=list+"+"+myColor[i]
    }
    i++;
}
// console.log(string)

newstring=string.slice(1)
console.log(newstring)

// console.log(list)
newlist=list.slice(1)
console.log(newlist)

// string="The Quick Brown Fox";
// i=0;
// while(i<string.length){
//     if (org(string[i]>=65) || (org(string[i]<=90))){
//         b=org(str[i]+32)
//         console.log(chr(b),end="")
//     }
//     else{
//         c=org(str[i]-32)
//         console.log(chr(c))
//     }
//     i++;
// }

string="The Quick Brown Fox";
vnew=""
i=0;
while(i<string.length){
    if (string[i].includes(toUpperCase())){
        vnew=vnew+string[i].toLowerCase()
    }
    else if (string[i].includes(toLowerCase())){
        vnew=vnew+string[i].toUpperCase()
    }
    else{
        vnew=vnew+string[i]
    }
    i++;
}
console.log(vnew)

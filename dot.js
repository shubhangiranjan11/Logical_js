readlinesync=require("readline-sync");
var user=readlinesync.question("enter your string");
var ext=user.split(".");
console.log(ext)
console.log(ext[1])

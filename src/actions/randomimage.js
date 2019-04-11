
var arr = []
while(arr.length < 3){
    var r = Math.floor(Math.random()*77) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
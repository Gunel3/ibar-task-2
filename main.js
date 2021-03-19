var a = [8,6,7,5];

var b= [7,5,8,6,9];

var aSum = 0;
var bSum = 0;

for (let i = 0; i < b.length; i++) {
    if(a[i] !=undefined && a[i] !=NaN) {
        aSum += a[i];
    }
    bSum += b[i];
    
}

console.log('redundant:' + (bSum - aSum) );
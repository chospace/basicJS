// 9 filter & find 
// (filter --> menghasilkan array, find --> menghasilkan satu nilai)

var angka = [1,3,2,4,5,6,7,9,8];

var angka2 = angka.filter(function(x){
    return x > 5;
});

console.log(angka2.join(' - '));

var angka3 = angka.find(function(e){
    return e < 7;
});

console.log(angka3);
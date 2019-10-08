// 6  forEach
var angka = [1,3,2,4,5,6,7,9,8];
var nama = ['Choirul','Anas','Cho','Space'];
// for (var i = 0; i < angka.length; i++){
//     console.log(angka[i])
// }

angka.forEach (function(e) {
    console.log(e);
});

nama.forEach(function(e, i) {
    console.log('Mahasiswa ke-' + i+1 + ' adalah : ' + e);
})

// 7 map    

var angka2 = angka.map(function(e){
    return e * 2;
});
console.log(angka2.join(' '));

// 8 sort

angka.sort();
console.log(angka.join(' ')); 

angka2.sort(function(a,b) {
    return a-b;
});
console.log(angka2.join(' ')); 
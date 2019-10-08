// parameter & argument

function tambah(a, b) {  // <-- parameater
    return a + b;
}

function kali(a, b) {  // <-- parameter
    return a * b;
}
 
var hasil = kali(tambah(1,2), tambah(3, 4)); // <-- Argumenet
console.log(hasil);
// Parameter dan Argument

function tambah(a, b) { // <-- parameter
    return a + b;

}

var a = parseInt(prompt('Masukan Nila 1 :'));
var b = parseInt(prompt('Masukan Nilai 2 :'));
var hasil = tambah(a*2, b*2); // <--argument
console.log(hasil);
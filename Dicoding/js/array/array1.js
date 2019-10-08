// MANIPULASI ARRAY

var arr = ["aku", 2, true];
console.log(arr[0]);

// 1 Menambah isi array

var arr= []
arr [0] = "Choirul";
arr [2] = "Anas"
arr [4] = "Cho"

console.log(arr);

// Menghapus isi array

var arr= ["Choirul","Anas","Cho"];
arr[2]=undefined;
console.log(arr);

// Menampilkan isi aray

var arr = ["Choirul","Anas","Cho","Space"];

for (var i = 0; i < arr.length; i++){
    console.log('Mahasiswa ke-'+ (i+1) + ' : ' + arr[i]);
}

// Method pada ARRAY
// Lenght, Join, push, pop, shift, unshift, DST.
// 1 JOIN --> Merubah isi array menjadi string

var arr = ["Choirul","Anas","Cho","Space"];

// 2 PUSH & POP -->  memasukan & menghilangkan elemen di akhir array nya
arr.push("Tujuh","Delapan","Sembilan");  // meemasukan
arr.pop();          // menghilangkan

// 3 UNSHIFT & SHIFT --> elemen baru di awal array-nya
arr.unshift("Mas");
arr.shift();

// 4 SPLICE
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)

arr.splice(2, 0, 'NANAS','PANAS');
arr.splice(1, 3, 'Anass')

// 5 SLICE -> memotong untuk menghasilkan array baru
var arr2 = arr.slice(2,4);
console.log(arr.join('  '));
console.log(arr2.join(' '));
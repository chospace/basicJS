// *Function -> Variable Scoop*
// ---> {block scope(C) and function scoop(JS)}


// "use strict"; 

// var a =19; // global scoop / window scoop

// function tes() {
//     var b =2;           // variabel local -> dalam function
//     console.log(b+a);
// }

// tes();
// console.log(b+a);

// luar tidak bisa lihat ke dalam tetapi dalam bisa lihat ke luar.

var a =11; // <-- Var global

function tes(a) { // <-- a pada argumen merupakan variable local
    console.log(a); // <-- mengacu ke local
}

tes(10);
tes(a); // <-- ikut global
console.log(a); // <-- ikut global
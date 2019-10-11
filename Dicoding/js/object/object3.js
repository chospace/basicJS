// // Membuat object 

// // cara 1 - functionn declaration
// function halo() {
//     console.log('halo');
// }

// halo();


// // cara 2 - object literal
// var obj = {};
// obj.halo = function () {
//     console.log('halo');

// }
// obj.halo();

// // cara 3 - constructor
// function Halo() {
//     console.log('halo');
// }
// new Halo();






// // this // -->
// console.log(window == this);

// cara 1 - functionn declaration - this
function halo() {
    console.log(this);
    console.log('halo');
}

this.halo();
// this mengembalikasn objek global


// cara 2 - object literal - this
var obj = {
    a: 10,
    nama: 'Choirul'
};
obj.halo = function () {
    console.log(this);
    console.log('halo');

}
obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 - constructor - this
function Halo() {
    console.log(this);
    console.log('halo');
}
new Halo();
// this mengembalikasn object yang baru dibuat
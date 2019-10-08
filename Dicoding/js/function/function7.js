// *RECURSION* --> Sebuah fungsi yang memanggil dirinya sendiri.


// function tampilAngka(n) {
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(29);

// *BASE CASE* --> kondisi akhir dari rekursif yang menghasilkan nilai

// function tampilAngka(n) {
//     if (n===0) return
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);


// *FAKTORIAL*

function faktorial(n) {
    if (n===0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));


// *IMPLEMENTASI REKURSIF*

// 1. Menggantikan looping
// 2. Fibonacci
// 3. Pencarian dan penelusuran pada struktur data list dan Tree
// 4. Bahasa pemrograman yang tidak memiliki pengulangan
//     a. Haskell, Erlang, Prolog, dll.
// 5. Intelegensi Buatan, game, dll

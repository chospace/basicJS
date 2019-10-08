// INTRO // Membuat Function Declaration

function jumlahVolumeDUaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;
    return total
}

console.log(jumlahVolumeDUaKubus(1,3));
console.log(jumlahVolumeDUaKubus(1,1));
console.log(jumlahVolumeDUaKubus(1,2));


// function Expression
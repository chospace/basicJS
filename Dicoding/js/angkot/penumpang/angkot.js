var angkot = [];
var tambahPenumpang = function (namaPenumpang, angkot) {

    if (angkot.length == 0) {
        angkot.push(namaPenumpang);
        return angkot;
    } else {
        for (var i = 0; i < angkot.length; i++) {
            if (angkot[i] == undefined) {
                angkot[i] = namaPenumpang;
                return angkot;
            } else if (angkot[i] == namaPenumpang) {
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                return angkot;
            } else if (i == angkot.length - 1) {
                angkot.push(namaPenumpang);
                return angkot;
            }
        }
    }
}

var hapusPenumpang = function (namaPenumpang, angkot) {
    if (angkot.length == 0) {
        console.log('Angkot masih kosong');
        return hapusPenumpang;
    } else {
        for (var i = 0; i < angkot.length; i++) {
            if (angkot[i] == namaPenumpang) {
                angkot[i] = undefined;
                return angkot;
            } else if (i == angkot.length - 1) {
                console.log(namaPenumpang + ' tidak ada di dalam angkot');
                return angkot;
            }
        }
    }
}
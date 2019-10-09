var penumpang = ['Choirul', undefined,'Anas'];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    //jika penumpang kosong
    if ( penumpang.length == 0 ) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //kembalikas isi array & keluar dari function
        return penumpang;
    } else {
    // else
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length    ; i++) {
            // jika ada kursi kosong
            if( penumpang[i] == undefined) {
                // tambah nama penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if ( penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahanya
                console.log(namaPenumpang + ' sudah ada di dalam angkot');
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1 ) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array & keluar dari function
                return penumpang;
            }
        }
    }
} 
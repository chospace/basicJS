var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.leng == 0 ) {
        penumpang.push (namaPenumpang);
        return penumpang;
    }
    else {
        for (var i = 0; i < penumpang.lenght; i++) {
            if (penumpang [i] == undefined ) {
                penumpang [i] = namaPenumpang;
                return penumpang;
            }
        }
    }
}
// membuat objek
// 1. objek literal

var mhs1 = {
    nama: 'Choirul',
    nrp: '0973297',
    email: 'cho@space.com',
    jurusan: 'Teknik Informatika'
}
var mhs2 = {
    nama: 'Anas',
    nrp: '0973299',
    email: 'cho@space7.com',
    jurusan: 'Teknik Industri'
}

// 2. Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Choirul', '0989630', 'cho@space.id', 'Teknik Informatika');
var mhs4 = buatObjectMahasiswa('John Doe', '80979197', 'john@space.id', 'Teknik Pangan');

// 3. Constructor

function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs5 = new Mahasiswa('Imam', '8989083', 'imam@space.id', 'Teknik Industri');
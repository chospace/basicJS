var item = prompt('masukan makanan : \n (cth: nasi, daging, susu hamburger, softdrink)');

switch (item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert ('makanan sehat !');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert (' makanan tidak sehat');
        break;
    default :
        alert ('anda memasukan nama yang salah');
    break;
}
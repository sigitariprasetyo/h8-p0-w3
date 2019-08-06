function dataHandling2(input){
    // modufikasi array dengan splice
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    // menampilkan bulan
    var sliceBulan = (input.slice(3, 4)).toString();
    var splitBulan = sliceBulan.split('/');
    var angkaBulan = splitBulan[1];

    switch(angkaBulan){
        case '01' : console.log('Januari'); break;
        case '02' : console.log('Februari'); break;
        case '03' : console.log('Maret'); break;
        case '04' : console.log('April'); break;
        case '05' : console.log('Mei'); break;
        case '06' : console.log('Juni'); break;
        case '07' : console.log('Juli'); break;
        case '08' : console.log('Agustus'); break;
        case '09' : console.log('September'); break;
        case '10' : console.log('Oktober'); break;
        case '11' : console.log('November'); break;
        case '12' : console.log('Desember'); break;
        default : console.log('Angka bulan salah..'); break;
    }
    
    // Sorting splitBulan
    var sortSplitBulan = splitBulan.sort(function(a, b){return b-a;});
    console.log(sortSplitBulan);
    
    // Join splitBulan
    var splitBulan = sliceBulan.split('/');
    var joinSplitBulan = (splitBulan).join('-');
    console.log(joinSplitBulan);
    
    // slice nama > 15
    var sliceNama = (input.slice(1, 2)).toString();
    var resultNama = sliceNama.slice(0, 15);
    console.log(resultNama);
}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);
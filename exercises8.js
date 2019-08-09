// Pasangan Angka Terbesar
function pasanganTerbesar(num) {
    // you can only write your code here!
    var panjangNum = String(num).length - 1;
    var stringNum = num.toString();
    var angka = '';

    for(var i = 0; i < panjangNum; i++){
        angka += stringNum[i] + stringNum[i + 1];
        if(i !== panjangNum - 1){
            angka += ' ';
            }
    }

    var splitAngka = angka.split(' ');
    var sort = splitAngka.sort(function(a, b){return b-a;});
    var angkaTerbesar = Number(sort[0]);
    
    return angkaTerbesar;
}

  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
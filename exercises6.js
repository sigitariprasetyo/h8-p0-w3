// Palindrome Angka
function angkaPalindrome(num) {
    // you can only write your code here!  
    var angka = num + 1;
    var balikAngka = '' ;
    
    while(angka){
        var i = angka.toString();
        balikAngka = i.split('').reverse().join('');
        if(angka === Number(balikAngka)){
            return balikAngka;
        }
        angka++;
    }
    
}

  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

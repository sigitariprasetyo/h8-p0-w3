// Palindrome
function palindrome(kata) {
    // you can only write your code here!
var hasil = false;
var panjangKata = kata.length -1;
var balikKata = '';

for(i = 0; panjangKata >= i; panjangKata--){
    balikKata += kata[panjangKata];
}

if(kata === balikKata){
    hasil = true;
} 

return hasil;
}

  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
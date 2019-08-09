// Target Terdekat
function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO = arr.indexOf('o');
    var hasil =[];
    
    if( arr.indexOf('x') === -1){
            return 0;
        } 
    for( var i = 0; i < arr.length; i++){
        if( arr[i] === 'x'){
            hasil.push(Math.abs(indexO - i));
            hasil.sort()
        }
    }

    return hasil[0];
}

  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
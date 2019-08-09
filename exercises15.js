// Mengelompokan Hewan
function groupAnimals(animals) {
    // you can only write your code here!
    var hasil = [];
    var animals = animals.sort()

    for( var i = 0; i < animals.length; i++){
        if( i == 0){
            hasil.push([animals[0]]);
        } else {
            for(var j = hasil.length - 1; j >= 0; j--){
                if( animals[i][0] === hasil[j][0][0]){
                    hasil[j].push(animals[i]);
                    break;
                } else {
                    hasil.push([animals[i]]);
                    break;
                }
            }
        }
    }
    return hasil;
}


  // TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
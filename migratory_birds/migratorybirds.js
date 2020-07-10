// Complete the migratoryBirds function below.
function migratoryBirds(arr) {

    var mostCommon = 0;
    var counter = 0;

    arr.sort();
    for (var i = 0; i < arr.length; i++) {
        var type = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1
        if (type > counter) {
            counter = type;
            mostCommon = arr[i]
        }
        i = arr.lastIndexOf(arr[i])
    }
    return mostCommon; 
}

console.log(migratoryBirds([1, 1, 2, 3, 3, 3, 3, 4]));
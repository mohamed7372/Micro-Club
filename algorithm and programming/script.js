// input 
var T = [2, 3, 4, 15, 16, 17, 0, 0, -4, 5, 6, 7, 8, 9, 10, 1, 2]

// traitement
var res = findLongestSeq(T);
inverse(T, res[0], res[1]);
console.log(T);

// functions 
function findLongestSeq(arr) {
    var start = 0, startMax = 0, i = 0, nbr = 0, nbrMax = 0;
    while (i < arr.length - 1) {
        if (arr[i] < arr[i + 1]) {
            nbr++;
            if (nbr > nbrMax) {
                nbrMax = nbr;
                startMax = start;
            }
        }
        else {
            start = i+1;
            nbr = 0;
        }
        i++;
    }
    return [startMax, startMax + nbrMax];  // return pos initial to the end of the sequence
}
function inverse(arr, start, end) {
    var med = ((end - start + 1) / 2) + start;
    for (var i = start; i < med; i++){
        var c = arr[i];
        arr[i] = arr[end - (i - start)];
        arr[end - (i - start)] = c;
    }
    return arr;
}



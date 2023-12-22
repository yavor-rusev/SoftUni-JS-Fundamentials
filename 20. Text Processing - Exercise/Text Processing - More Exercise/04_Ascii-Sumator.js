function asciiSumator(array) {
    let startChar = array[0] < array[1] ? array[0] : array[1];
    let endChar = array[0] > array[1] ? array[0] : array[1];

    let text = array[2];
    let asciiSum = 0;

    for (let char of text) {
        if (char > startChar && char < endChar) {
            asciiSum += char.charCodeAt();
        }
    }

    console.log(asciiSum);
}

// asciiSumator([
//     '.',
//     '@',
//     'dsg12gr5653feee5'
// ]);

asciiSumator([
    'a',
    '1',
    'jfe392$#@j24ui9ne#@$'
]);
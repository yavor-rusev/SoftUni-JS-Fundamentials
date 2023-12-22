function deserializeString(array) {
    let charString = array.shift();
    let matrixOfCharsIndexes = [];

    while (charString !== 'end') {
        let [char, indexesAsString] = charString.split(":");
        let indexesAsNumbersArray = indexesAsString.split("/").map(Number);

        for (let index of indexesAsNumbersArray) {
            matrixOfCharsIndexes.push([char, index]);
        }

        charString = array.shift();
    }

    let sortedCharsByIndex = matrixOfCharsIndexes.sort((charA, charB) => charA[1] - charB[1]);
    let result = "";

    sortedCharsByIndex.forEach(char => {
        result += char[0];
    })

    console.table(result);
}

// deserializeString([
//     'a:0/2/4/6',
//     'b:1/3/5',
//     'end'
// ]);

deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);
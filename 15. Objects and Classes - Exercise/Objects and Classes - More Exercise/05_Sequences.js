function sequences(jsons) {
    let mySet = new Set();

    for (let json of jsons) {
        let arrayOrMatrix = JSON.parse(json);

        if (Number(arrayOrMatrix[0])) {
            let sortedArrayAsString = arrayOrMatrix.sort((a, b) => b - a).join(", ");
            mySet.add(`${sortedArrayAsString}`);

        } else {
            for (let arr of arrayOrMatrix) {
                let sortedArrayAsString = arr.sort((a, b) => b - a).join(", ");
                mySet.add(`${sortedArrayAsString}`);
            }
        }
    }

    let arrayOfSortedStrings = Array.from(mySet);
    let matrixOfSortedArrays = arrayOfSortedStrings.map(a => a = a.split(", "))
        .sort((a, b) => a.length - b.length);

    for (let arr of matrixOfSortedArrays) {
        console.log(`[${arr.join(", ")}]`);
    }
}



// sequences([
//     "[[7.14, 7.180, 7.339, 80.099], [10, 1, -17, 0, 2, 13]]",
//     "[7.339, 80.0990, 7.140000, 7.18]",
//     "[7.339, 7.180, 7.14, 80.099]"
// ]);

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);

// sequences([
//     "[[8, 10, 9, 11], [5, 6, 4, 7]]",
//     "[2, 3, 1]",
//     "[7, 5, 6, 4]"
// ]);
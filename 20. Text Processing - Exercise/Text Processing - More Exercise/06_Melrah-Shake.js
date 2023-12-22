function melrahShake(arr) {
    let str = arr[0];
    let pattern = arr[1];

    let firstIndex = str.indexOf(pattern);
    let firstIndexLeftSide = str.substring(0, firstIndex);
    let firstIndexRightSide = str.substring(firstIndex + pattern.length);
    str = firstIndexLeftSide + firstIndexRightSide;

    let lastIndex = str.lastIndexOf(pattern);

    while (str.length > 0 && firstIndex !== -1 && lastIndex !== -1) {
        if (pattern.length === 0) {
            break;
        }

        let lastIndexLeftSide = str.substring(0, lastIndex);
        let lastIndexRightSide = str.substring(lastIndex + pattern.length);
        str = lastIndexLeftSide + lastIndexRightSide;

        console.log("Shaked it.");

        let removeIndexOfPattern = Math.trunc(pattern.length / 2);
        let removeIndexLeftSide = pattern.substring(0, removeIndexOfPattern);
        let removeIndexRightSide = pattern.substring(removeIndexOfPattern + 1);
        pattern = removeIndexLeftSide + removeIndexRightSide;

        firstIndex = str.indexOf(pattern);

        if (firstIndex !== -1) {
            firstIndexLeftSide = str.substring(0, firstIndex);
            firstIndexRightSide = str.substring(firstIndex + pattern.length);
            str = firstIndexLeftSide + firstIndexRightSide;

            lastIndex = str.lastIndexOf(pattern);
        }
    }

    console.log("No shake.");
    console.log(str);
}

melrahShake([
    'asastalavistasa ssbaby',
    'sta'
]);

// melrahShake([
//     '##mtm!!mm.mm*mtm.#',
//     'mtm'
// ]);
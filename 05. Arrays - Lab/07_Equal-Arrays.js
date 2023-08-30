function equalArrays(firstArray, secondArray) {
    let sum = 0;

    for (let i = 0; i < (firstArray.length + secondArray.length) / 2; i++) {
        let firstArrayNum = Number(firstArray[i]);
        let secondArrayNum = Number(secondArray[i]);

        if (firstArrayNum === secondArrayNum) {
            sum += firstArrayNum;

        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;

        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}

equalArrays(
    ['10', '20', '30'],
    ['10', '20', '30']
);


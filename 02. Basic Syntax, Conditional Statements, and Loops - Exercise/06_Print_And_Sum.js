function printAndSum(startNum, endNum) {
    let row = ``;
    let sum = 0;

    for (let currNum = startNum; currNum <= endNum; currNum++) {
        row += `${currNum} `;
        sum += currNum;

    }

    console.log(row);
    console.log(`Sum: ${sum}`);

}

printAndSum(0, 26);
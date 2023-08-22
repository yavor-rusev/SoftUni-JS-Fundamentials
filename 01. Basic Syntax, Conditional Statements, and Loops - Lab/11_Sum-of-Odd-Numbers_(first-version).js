function sumOfOddNumbers(input) {
    let n = Number(input);
    let currNum = 1;
    let totalSum = 1;

    console.log(currNum);

    for (i = 2; i <= n; i++) {
        currNum += 2;
        totalSum += currNum;
        console.log(currNum);

    }

    console.log(`Sum: ${totalSum}`);

}

sumOfOddNumbers(5);
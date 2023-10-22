function numbers(input) {
    let nums = input.split(" ").map(Number);

    let sumNums = 0;
    let numsCount = nums.length;

    for (let num of nums) {
        sumNums += num;
    }

    let averageValue = sumNums / numsCount;

    let topNums = nums.filter(num => num > averageValue);
    topNums.sort((a, b) => b - a);

    let fiveTopNums = topNums.slice(0, 5);

    if (fiveTopNums.length !== 0) {
        console.log(fiveTopNums.join(" "));

    } else {
        console.log("No");

    }
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');
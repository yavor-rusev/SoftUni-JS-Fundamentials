function orbit(input) {
    let width = Number(input[0]);
    let height = Number(input[1]);
    let x = Number(input[2]);
    let y = Number(input[3]);

    let twoDimentionalArray = [];

    for (let i = 0; i < height; i++) {
        let row = [];
        twoDimentionalArray.push(row);

        for (let j = 0; j < width; j++) {
            let col = 0;
            row.push(col);
        }

    }

    for (let currRow = 0; currRow < height; currRow++) {

        for (let currCol = 0; currCol < width; currCol++) {
            let widthDistance = Math.abs(currCol - y);
            let heightDistance = Math.abs(currRow - x);

            if (currRow === x && currCol === y) {
                twoDimentionalArray[currRow][currCol] = 1;

            } else {
                twoDimentionalArray[currRow][currCol] = 1 + Math.max(heightDistance, widthDistance);

            }
        }
    }

    for (let printLine = 0; printLine < twoDimentionalArray.length; printLine++) {
        console.log(twoDimentionalArray[printLine].join(" "));

    }
}

orbit([5, 5, 2, 2]);
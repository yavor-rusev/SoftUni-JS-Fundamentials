function printDNA(num) {
    let printLine = ``;
    let leftSymbol = "";
    let rightSymbol = "";

    for (let row = 1; row <= num; row++) {

        if (row % 5 === 1) {
            leftSymbol = "A";
            rightSymbol = "T";

        } else if (row % 5 === 2) {
            leftSymbol = "C";
            rightSymbol = "G";

        } else if (row % 5 === 3) {
            leftSymbol = "T";
            rightSymbol = "T";

        } else if (row % 5 === 4) {
            leftSymbol = "A";
            rightSymbol = "G";

        } else if (row % 5 === 0) {
            leftSymbol = "G";
            rightSymbol = "G";

        }

        if (row % 4 === 1) {
            printLine = `**${leftSymbol}${rightSymbol}**`

        } else if (row % 2 === 0) {
            printLine = `*${leftSymbol}--${rightSymbol}*`

        } else if (row % 4 === 3) {
            printLine = `${leftSymbol}----${rightSymbol}`

        }

        console.log(printLine);
    }
}

printDNA(10);
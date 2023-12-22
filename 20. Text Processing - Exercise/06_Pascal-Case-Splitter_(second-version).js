function pascalCaseSplitter(text) {
    let printLine = '';
    let start = 0;

    let textLength = text.length;

    for (let i = 1; i < textLength; i++) {
        let char = text[i];
        let stop = i;
        let currentWord = '';

        if (char === char.toUpperCase()) {
            currentWord += text.substring(start, stop);
            printLine += currentWord + ', ';
            start = i;
        }

        if (i === textLength - 1) {
            currentWord = '';
            currentWord += text.substring(start, stop + 1);
            printLine += currentWord;
        }
    }

    console.log(printLine);
}

pascalCaseSplitter('SS');
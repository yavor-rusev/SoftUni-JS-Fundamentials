function rageQuit(line) {
    let regex = /(?<symbols>[\D]+)(?<count>\d+)/g;
    let stringsArray = [];

    let match = regex.exec(line);

    while (match) {
        stringsArray.push(match);
        match = regex.exec(line);
    }

    let message = "";

    for (let str of stringsArray) {
        let modifiedSymbols = str.groups.symbols.toUpperCase();
        let count = str.groups.count;

        let newString = modifiedSymbols.repeat(count);
        message += newString;
    }

    let uniqueSymbols = new Set(message.split(""));

    console.log(`Unique symbols used: ${uniqueSymbols.size}`);
    console.log(message);
}

rageQuit("aSd2&5s@1");

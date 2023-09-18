function loadingBar(num) {
    let percentSymbolsCount = Math.trunc(num / 10);
    let dotSymbolCount = 10 - percentSymbolsCount;

    if (percentSymbolsCount === 10) {
        console.log("100% Complete!");
        return;

    } else {
        console.log(`${num}% [${"%".repeat(percentSymbolsCount)}${".".repeat(dotSymbolCount)}]`);
        console.log("Still loading...");

    }
}

loadingBar(100);
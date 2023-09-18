function loadingBar(num) {
    let percentSymbolsCount = Math.trunc(num / 10);
    let scaleAsArray = [];

    for (let index = 1; index <= 10; index++) {

        if (percentSymbolsCount === 10) {
            console.log("100% Complete!");
            return;

        }

        if (index <= percentSymbolsCount) {
            scaleAsArray.push("%");

        } else {
            scaleAsArray.push(".");

        }
    }

    console.log(`${num}% [${scaleAsArray.join("")}]`);
    console.log("Still loading...");
}

loadingBar(99);
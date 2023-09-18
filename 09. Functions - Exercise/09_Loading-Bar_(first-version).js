function loadingBar(num) {
    let percentSymbolsCount = Math.trunc(num / 10);
    let scaleAsString = "";
    scaleAsString += "[";

    for (let index = 1; index <= 10; index++) {

        if (percentSymbolsCount === 10) {
            console.log("100% Complete!");
            return;

        }

        if (index <= percentSymbolsCount) {
            scaleAsString += "%";

        } else {
            scaleAsString += ".";

        }
    }

    scaleAsString += "]";
    console.log(`${num}% ${scaleAsString}`);
    console.log("Still loading...");
}

loadingBar(99);
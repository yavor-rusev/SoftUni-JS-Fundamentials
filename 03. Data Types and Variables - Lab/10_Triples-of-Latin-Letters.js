function triplesOfLatinLetters(n) {
    for (let x = 0; x < n; x++) {

        let printLineX = "";
        let letterX = String.fromCharCode(97 + x);
        printLineX += letterX;

        for (let y = 0; y < n; y++) {

            let printLineY = printLineX
            let letterY = String.fromCharCode(97 + y);
            printLineY += letterY;


            for (let z = 0; z < n; z++) {

                let printLineZ = printLineY
                let letterZ = String.fromCharCode(97 + z);
                printLineZ += letterZ;

                console.log(printLineZ);
            }
        }
    }
}

triplesOfLatinLetters("5");
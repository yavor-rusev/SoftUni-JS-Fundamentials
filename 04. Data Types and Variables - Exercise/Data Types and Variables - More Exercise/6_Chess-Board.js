function chessBoard(num) {
    let outputAsString = '';

    let tableOpeningTag = '<div class="chessboard">\n';
    let tableClosingTag = '</div> ';

    let rowOpeningTag = '   <div>\n';
    let rowClosingTag = '   </div>\n';

    let blackSquare = '<span class="black"></span> \n';
    let whiteSquare = '<span class="white"></span> \n';


    outputAsString += tableOpeningTag;

    for (let row = 1; row <= num; row++) {

        outputAsString += rowOpeningTag;

        for (let col = 1; col <= num; col++) {

            if (row % 2 !== 0) {

                if (col % 2 !== 0) {
                    outputAsString += blackSquare;

                } else {
                    outputAsString += whiteSquare;

                }

            } else if (row % 2 === 0) {
                if (col % 2 !== 0) {
                    outputAsString += whiteSquare;

                } else {
                    outputAsString += blackSquare;

                }

            }

        }

        outputAsString += rowClosingTag;
    }

    outputAsString += tableClosingTag;

    console.log(outputAsString);
}

chessBoard(3);
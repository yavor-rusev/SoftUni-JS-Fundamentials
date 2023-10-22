function rosettaStone(array) {
    let templateRowCount = Number(array.shift());
    let decoderMatrix = [];

    for (let templateRow = 0; templateRow < templateRowCount; templateRow++) {
        let templateNumberRow = array.shift().split(" ").map(Number);
        decoderMatrix.push(templateNumberRow);
    }

    let encodedMessageMatrix = [];

    for (let messageRow of array) {
        let messageNumberRow = messageRow.split(" ").map(Number);
        encodedMessageMatrix.push(messageNumberRow);
    }

    for (let messageY = 0; messageY < encodedMessageMatrix.length; messageY++) {
        let currentMessageRow = encodedMessageMatrix.splice(messageY, 1);
        currentMessageRow = currentMessageRow[0];

        let decoderY = messageY % decoderMatrix.length;
        let currentDecoderRow = decoderMatrix[decoderY];

        for (let messageX = 0; messageX < currentMessageRow.length; messageX++) {

            let currentMessageCol = currentMessageRow.splice(messageX, 1);
            currentMessageCol = currentMessageCol[0];

            let decoderX = messageX % currentDecoderRow.length;
            let currentDecoderCol = currentDecoderRow[decoderX];

            let summedMessageCol = currentMessageCol + currentDecoderCol;

            currentMessageRow.splice(messageX, 0, summedMessageCol);

        }

        encodedMessageMatrix.splice(messageY, 0, currentMessageRow);
    }

    let summedMessageMatrix = encodedMessageMatrix;
    let decodedMessage = "";

    for (let row of summedMessageMatrix) {

        for (let col of row) {
            let currentRosettaPosition = col % 27;
            let decodedSign = String.fromCharCode(currentRosettaPosition + 64);

            if (decodedSign === "@") {
                decodedSign = " ";
            }

            decodedMessage += decodedSign;
        }
    }

    console.log(decodedMessage);
}

rosettaStone([
    '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
)
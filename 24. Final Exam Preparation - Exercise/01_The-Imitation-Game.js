function theImitationGame(arr) {
    let message = arr.shift();

    while (arr[0] !== 'Decode') {
        let command = arr.shift();
        let tokens = command.split('|');
        let action = tokens.shift();

        if (action === 'Move') {
            let lettersCount = Number(tokens.shift());
            let partToMove = message.substring(0, lettersCount);

            message = message.replace(partToMove, "") + partToMove;

        } else if (action === 'Insert') {
            let index = Number(tokens.shift());
            let value = tokens.shift();

            let leftPart = message.slice(0, index);
            let rightPart = message.slice(index);

            message = leftPart + value + rightPart;

        } else if (action === 'ChangeAll') {
            let substring = tokens.shift();
            let replacement = tokens.shift();

            message = message.split(substring).join(replacement);
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);

// theImitationGame([
//     'owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode'
// ]);
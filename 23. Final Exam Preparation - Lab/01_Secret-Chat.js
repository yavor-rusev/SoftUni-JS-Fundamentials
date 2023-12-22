function secretChat(arr) {
    let message = arr.shift();

    while (arr[0] !== 'Reveal') {
        let commandInfo = arr.shift().split(':|:');
        let commandName = commandInfo[0];

        switch (commandName) {
            case 'InsertSpace':
                let insertIndex = Number(commandInfo[1]);
                let beforeInsertIndex = message.substring(0, insertIndex);
                let afterInsertIndex = message.substring(insertIndex);

                message = beforeInsertIndex + ' ' + afterInsertIndex;
                console.log(message);
                break;

            case 'Reverse':
                let substringToReverse = commandInfo[1];
                let substringIndex = message.indexOf(substringToReverse);

                if (substringIndex === -1) {
                    console.log('error');
                    continue;
                }

                let beforeSubstring = message.substring(0, substringIndex);
                let afterSubstring = message.substring(substringIndex + substringToReverse.length);
                let substringReversed = substringToReverse.split('').reverse().join('');

                message = beforeSubstring + afterSubstring + substringReversed;
                console.log(message);
                break;

            case 'ChangeAll':
                let substringToReplace = commandInfo[1];
                let replacement = commandInfo[2];

                message = message.split(substringToReplace).join(replacement);
                console.log(message);
                break;
        }
    }

    console.log(`You have a new text message: ${message}`);
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ]);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);

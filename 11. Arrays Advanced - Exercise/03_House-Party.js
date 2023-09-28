function houseParty(commands) {
    let guestList = [];
    let commandsLength = commands.length;

    for (let index = 0; index < commandsLength; index++) {

        let currentCommand = commands[index].split(" ");
        let guestName = currentCommand[0];

        if (currentCommand.includes('not')) {

            if (guestList.includes(guestName)) {
                let removeIndex = guestList.indexOf(guestName);
                guestList.splice(removeIndex, 1);

            } else {
                console.log(`${guestName} is not in the list!`);

            }

        } else {

            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);

            } else {
                guestList.push(guestName);

            }
        }
    }

    console.log(guestList.join("\n"));
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
);
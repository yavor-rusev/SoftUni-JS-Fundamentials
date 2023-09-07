function addAndRemove(commands) {
    let newArray = [];
    let initialNumber = 0;

    let commandsLength = commands.length;

    for (let index = 0; index < commandsLength; index++) {

        let command = commands[index];
        initialNumber++;

        if (command === 'add') {
            newArray.push(initialNumber);

        } else if (command === 'remove') {
            newArray.pop();

        }
    }

    if (newArray.length > 0) {
        console.log(newArray.join(" "));

    } else {
        console.log("Empty");

    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);
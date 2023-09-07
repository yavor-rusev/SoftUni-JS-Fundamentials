function tseamAccount(array) {
    let account = array.shift();
    let gamesArray = account.split(" ");
    let gameName;

    let index = 0;
    let command = array[index];

    while (command !== 'Play!') {
        if (command.includes("Install")) {

            gameName = command.replace("Install ", "");

            if (gamesArray.includes(gameName) !== true) {
                gamesArray.push(gameName);

            }

        } else if (command.includes("Uninstall")) {

            gameName = command.replace("Uninstall ", "");
            let gamesArrayAsString = gamesArray.join(" ");
            gamesArrayAsString = gamesArrayAsString.replace(gameName, "");
            gamesArrayAsString = gamesArrayAsString.replace("  ", " ");
            gamesArray = gamesArrayAsString.split(" ");

        } else if (command.includes("Update")) {

            gameName = command.replace("Update ", "");
            let gamesArrayAsString = gamesArray.join(" ");

            if (gamesArrayAsString.includes(gameName)) {
                gamesArrayAsString = gamesArrayAsString.replace(gameName, "");
                gamesArrayAsString = gamesArrayAsString.replace("  ", " ");
                gamesArray = gamesArrayAsString.split(" ");
                gamesArray.push(gameName);

            }

        } else if (command.includes("Expansion")) {

            let gameExpansionName = command.replace("Expansion ", "");
            gameExpansionName = gameExpansionName.replace("-", " ");
            let gameExpansionNameAsArray = gameExpansionName.split(" ");
            gameExpansionName = gameExpansionName.replace(" ", ":");
            gameName = gameExpansionNameAsArray[0];
            let gamesArrayAsString = gamesArray.join(" ");

            if (gamesArrayAsString.includes(gameName)) {
                gamesArrayAsString = gamesArrayAsString.replace(gameName, gameName + " " + gameExpansionName);
                gamesArray = gamesArrayAsString.split(" ");

            }
        }

        command = array[++index];
    }

    console.log(gamesArray.join(" "));
}

tseamAccount([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);
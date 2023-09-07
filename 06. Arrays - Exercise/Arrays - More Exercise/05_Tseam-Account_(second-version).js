function tseamAccount(array) {
    let account = array.shift();
    let gamesArray = account.split(" ");
    let gameName;

    let index = 0;
    let currentElement = array[index];

    while (currentElement !== 'Play!') {

        let currentElementAsArray = currentElement.split(" ");
        let command = currentElementAsArray[0];
        gameName = currentElementAsArray[1];

        let gamesArrayAsString = gamesArray.join(" ");

        switch (command) {
            case "Install":
                if (gamesArray.includes(gameName) !== true) {
                    gamesArray.push(gameName);
                }; break;

            case "Uninstall":
                gamesArrayAsString = gamesArrayAsString.replace(gameName, "");
                gamesArrayAsString = gamesArrayAsString.replace("  ", " ");
                gamesArray = gamesArrayAsString.split(" ");
                break;

            case "Update":
                if (gamesArrayAsString.includes(gameName)) {
                    gamesArrayAsString = gamesArrayAsString.replace(gameName, "");
                    gamesArrayAsString = gamesArrayAsString.replace("  ", " ");
                    gamesArray = gamesArrayAsString.split(" ");
                    gamesArray.push(gameName);
                }; break;

            case "Expansion":
                let gameNameAsArray = gameName.split("-");
                gameName = gameNameAsArray[0];
                let expansionName = gameNameAsArray[1];

                if (gamesArrayAsString.includes(gameName)) {
                    gamesArrayAsString = gamesArrayAsString.replace(gameName, `${gameName} ${gameName}:${expansionName}`);
                    gamesArray = gamesArrayAsString.split(" ");
                }; break;
        }

        currentElement = array[++index];
    }

    console.log(gamesArray.join(" "));
}

tseamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);


tseamAccount([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'
]);
function partyTime(input) {
    let vipList = [];
    let regularList = [];

    let command = input.splice(0, 1)[0];

    while (command !== 'PARTY') {
        let guestID = command;
        let isVIPGuest = Number(guestID[0]);

        if (isVIPGuest) {
            vipList.push(guestID);
        } else {
            regularList.push(guestID);
        }

        command = input.splice(0, 1)[0];
    }

    let allGuestsList = vipList.concat(regularList);

    for (let guestID of input) {
        let guestIDIndex = allGuestsList.findIndex(currentGuestID => currentGuestID === guestID)

        if (guestIDIndex !== -1) {
            allGuestsList.splice(guestIDIndex, 1);
        }
    }

    console.log(allGuestsList.length);
    console.log(allGuestsList.join(`\n`));
}

partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
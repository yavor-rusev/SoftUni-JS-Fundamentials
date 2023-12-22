function armies(input) {
    let leaders = {};

    for (let command of input) {
        if (command.includes(" arrives")) {
            let newLeader = command.replace(" arrives", "");

            if (!leaders.hasOwnProperty(newLeader)) {
                leaders[newLeader] = {};
            }

        } else if (command.includes(": ")) {
            let currentLeader = command.split(": ")[0];
            let newArmy = command.split(": ")[1];

            if (leaders.hasOwnProperty(currentLeader)) {
                let newArmyName = newArmy.split(", ")[0];
                let newArmyCount = Number(newArmy.split(", ")[1]);

                leaders[currentLeader][newArmyName] = newArmyCount;
            }

        } else if (command.includes(" + ")) {
            let currentArmyName = command.split(" + ")[0];
            let additionalCount = Number(command.split(" + ")[1]);

            for (let leader in leaders) {
                if (leaders[leader].hasOwnProperty(currentArmyName)) {
                    leaders[leader][currentArmyName] += additionalCount;
                }
            }

        } else if (command.includes(" defeated")) {
            let defeatedLeader = command.split(" defeated")[0];
            delete leaders[defeatedLeader];
        }
    }

    let allLeadersMatrix = Object.entries(leaders);

    for (let currentLeaderInfoDouble of allLeadersMatrix) {

        let currentLeaderArmiesObj = currentLeaderInfoDouble[1];

        let armiesSortedMatrix = Object.entries(currentLeaderArmiesObj).sort((armyA, armyB) => armyB[1] - armyA[1]);
        currentLeaderInfoDouble.splice(1, 1, armiesSortedMatrix);

        let leaderTotalSoldiers = 0;

        for (let currentArmyInfoArray of armiesSortedMatrix) {

            let currentArmyCount = currentArmyInfoArray[1];
            leaderTotalSoldiers += currentArmyCount;
        }

        currentLeaderInfoDouble.push(["totalSoldiers", leaderTotalSoldiers]);
    }

    let leadersSortedMatrix = allLeadersMatrix.sort((leaderA, leaderB) => leaderB[2][1] - leaderA[2][1]);

    leadersSortedMatrix.forEach(currentLeader => {
        let currentLeaderName = currentLeader[0];
        let currentLeaderTotalSolders = currentLeader[2][1];
        console.log(`${currentLeaderName}: ${currentLeaderTotalSolders}`);

        let armiesMatrix = currentLeader[1];
        armiesMatrix.forEach(currentArmy => {
            let currentArmyName = currentArmy[0];
            let currentArmyCount = currentArmy[1];

            console.log(`>>> ${currentArmyName} - ${currentArmyCount}`);
        })
    })
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
function heroesOfCodeAndLogicVII(arr) {
    let party = {};
    let n = Number(arr.shift());

    for (let i = 0; i < n; i++) {
        let heroData = arr.shift();
        let [name, hp, mp] = heroData.split(" ");

        party[name] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    while (arr[0] !== 'End') {
        let line = arr.shift();
        let tokens = line.split(" - ");
        let command = tokens[0];
        let currentHeroName = tokens[1];

        let currentHeroData = party[currentHeroName];

        switch (command) {
            case "CastSpell":
                let mpNeeded = Number(tokens[2]);
                let spellName = tokens[3];

                if (currentHeroData.mp >= mpNeeded) {
                    currentHeroData.mp -= mpNeeded;
                    console.log(`${currentHeroName} has successfully cast ${spellName} and now has ${currentHeroData.mp} MP!`);

                } else {
                    console.log(`${currentHeroName} does not have enough MP to cast ${spellName}!`);

                }
                break;

            case "TakeDamage":
                let damage = Number(tokens[2]);
                let attacker = tokens[3];

                currentHeroData.hp -= damage;

                if (currentHeroData.hp > 0) {
                    console.log(`${currentHeroName} was hit for ${damage} HP by ${attacker} and now has ${currentHeroData.hp} HP left!`);

                } else {
                    console.log(`${currentHeroName} has been killed by ${attacker}!`);
                    delete party[currentHeroName];
                }
                break;

            case "Recharge":
                let mpToRestore = Number(tokens[2]);

                if (currentHeroData.mp + mpToRestore > 200) {
                    mpToRestore = 200 - currentHeroData.mp;
                }

                currentHeroData.mp += mpToRestore;
                console.log(`${currentHeroName} recharged for ${mpToRestore} MP!`);
                break;

            case "Heal":
                let hpToRestore = Number(tokens[2]);

                if (currentHeroData.hp + hpToRestore > 100) {
                    hpToRestore = 100 - currentHeroData.hp;
                }

                currentHeroData.hp += hpToRestore;
                console.log(`${currentHeroName} healed for ${hpToRestore} HP!`);
                break;
        }
    }

    for (let name in party) {
        let heroInfo = party[name];

        console.log(name);
        console.log(`  HP: ${heroInfo.hp}`);
        console.log(`  MP: ${heroInfo.mp}`);
    }
}

heroesOfCodeAndLogicVII([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);

// heroesOfCodeAndLogicVII([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ]);
function secondTask(input) {
    let health = 100;
    let bitcoins = 0;
    let roomsArray = input.split('|');

    for (let index = 0; index < roomsArray.length; index++) {
        let bestRoom = index + 1;
        let currentRoom = roomsArray[index];

        let command = currentRoom.split(" ")[0];
        let num = Number(currentRoom.split(" ")[1]);

        if (command === "potion") {
            if (health + num > 100) {
                num = 100 - health;
            }

            health += num;

            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === "chest") {
            bitcoins += num;
            console.log(`You found ${num} bitcoins.`);

        } else {
            health -= num;

            if (health > 0) {
                console.log(`You slayed ${command}.`);

            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${bestRoom}`);
                return;

            }
        }
    }

    console.log("You've made it!");
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}


// secondTask("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
secondTask("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");

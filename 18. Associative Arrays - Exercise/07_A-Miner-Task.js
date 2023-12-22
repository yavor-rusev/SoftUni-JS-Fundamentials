function aMinerTask(input) {
    let resources = new Map;

    for (let index = 0; index < input.length; index += 2) {
        let currentResource = input[index];
        let resourceQuantity = Number(input[index + 1]);

        if (!resources.has(currentResource)) {
            resources.set(currentResource, 0);
        }

        let currentQuantity = resources.get(currentResource);
        resources.set(currentResource, currentQuantity + resourceQuantity);
    }

    for (let [resource, quantity] of resources.entries()) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);
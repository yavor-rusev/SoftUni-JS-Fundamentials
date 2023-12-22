function bookShelf(arr) {
    let idsSet = new Set();
    let shelvesMatrix = [];

    for (let line of arr) {

        if (line.includes(" -> ")) {
            let [shelfId, genre] = line.split(" -> ");

            if (!idsSet.has(shelfId)) {
                idsSet.add(shelfId);

                shelvesMatrix.push([shelfId, genre]);
            }

        } else if (line.includes(": ") && line.includes(", ")) {
            let [bookInfo, genre] = line.split(", ");

            if (shelvesMatrix.length > 0) {

                for (let shelfInfo of shelvesMatrix) {
                    if (shelfInfo[1] === genre) {
                        let bookAndAuthorArray = bookInfo.split(": ");
                        shelfInfo.push(bookAndAuthorArray);
                        break;
                    }
                }
            }
        }
    }

    shelvesMatrix.sort((a, b) => b.length - a.length);

    for (let shelfArray of shelvesMatrix) {
        let sortedBooksArray = shelfArray.splice(2).sort((bookA, bookB) => bookA[0].localeCompare(bookB));
        shelfArray.push(sortedBooksArray);
    }

    for (let shelfInfo of shelvesMatrix) {
        console.log(`${shelfInfo[0]} ${shelfInfo[1]}: ${shelfInfo[2].length}`);

        let shelfBooksMatrix = shelfInfo[2]

        for (let currentBookInfo of shelfBooksMatrix) {
            console.log(`--> ${currentBookInfo[0]}: ${currentBookInfo[1]}`);
        }
    }
}

// bookShelf([
//     '1 -> history',
//     '1 -> action',
//     'Death in Time: Criss Bell, mystery',
//     '2 -> mystery',
//     '3 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Hurting Secrets: Dustin Bolt, action',
//     'Future of Dawn: Aiden Rose, sci-fi',
//     'Lions and Rats: Gabe Roads, history',
//     '2 -> romance',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi',
//     'Pilots of Stone: Brook Jay, history'
// ]);

bookShelf([
    '1 -> mystery',
    '2 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Lions and Rats: Gabe Roads, history',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi'
]);
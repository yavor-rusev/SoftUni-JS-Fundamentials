function mirrorWords([str]) {
    let regex = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let matchCounter = 0;
    let mirrorPairs = [];

    let match = regex.exec(str);

    while (match) {
        matchCounter++;

        let firstWord = match[2];
        let secondWord = match[3];
        let secondWordReversed = secondWord.split('').reverse().join('');

        if (firstWord === secondWordReversed) {
            mirrorPairs.push(`${firstWord} <=> ${secondWord}`);
        }

        match = regex.exec(str);
    }

    if (matchCounter > 0) {
        console.log(`${matchCounter} word pairs found!`);

    } else {
        console.log(`No word pairs found!`);
    }

    if (mirrorPairs.length > 0) {
        console.log(`The mirror words are:`);
        console.log(`${mirrorPairs.join(', ')}`);

    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);

mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);

mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);  
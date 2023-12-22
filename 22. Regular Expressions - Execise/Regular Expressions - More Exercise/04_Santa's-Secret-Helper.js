function santasSecretHelper(arr) {
    let key = arr.shift();

    let line = arr.shift();

    while (line !== "end") {
        let lineLength = line.length;
        let decriptedLine = "";

        for (let i = 0; i < lineLength; i++) {
            let charAscii = line.charCodeAt(i);
            let decriptedChar = String.fromCharCode(charAscii - key);

            decriptedLine += decriptedChar;
        }

        let regex = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>G|N)!/;
        let match = decriptedLine.match(regex);

        if (match) {
            let name = match.groups.name;
            let behavior = match.groups.behavior;

            if (behavior === "G") {
                console.log(name);
            }
        }

        line = arr.shift();
    }
}

// santasSecretHelper([
//     '4',
//     '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
//     '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
//     ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
//     "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
//     'DReh}e=<4lhzj1%K%',
//     'end'
// ]);

santasSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]);





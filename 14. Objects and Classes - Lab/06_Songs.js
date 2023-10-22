function songs(array) {
    let songCount = array.shift();
    let typeListOrAll = array.pop();

    class Song {
        constructor(typeList, name, time) {
            this.list = typeList;
            this.songName = name;
            this.duration = time;
        }

        printSongName() {
            console.log(`${this.songName}`);
        }
    }

    for (let songDataString of array) {

        let songDataArray = songDataString.split("_");

        let typeList = songDataArray[0];
        let name = songDataArray[1];
        let time = songDataArray[2];

        if (typeListOrAll === 'all') {
            let currentSong = new Song(typeList, name, time);
            currentSong.printSongName();
        }

        if (typeListOrAll === typeList) {
            let currentTypeSong = new Song(typeList, name, time);
            currentTypeSong.printSongName();
        }
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
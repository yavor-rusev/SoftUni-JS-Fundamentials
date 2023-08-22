function gramophone(bandName, albumName, songName) {
    let rotationInSeconds = 2.5;
    let songDurationSeconds = (albumName.length * bandName.length) * (songName.length / 2);

    let totalRotations = songDurationSeconds / rotationInSeconds;

    console.log(`The plate was rotated ${Math.ceil(totalRotations)} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
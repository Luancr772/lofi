const song = document.getElementById("song");

const playBtn = document.querySelector(".play-inner");

playBtn.addEventListener("click", playPause);

const nextBtn = document.querySelector(".music-forward");

const backBtn = document.querySelector(".music-back");

// Gió

const soundWind = document.getElementById("Wind");

const soundStreet = document.querySelector(".buttonWind");

//Bàn phím

const Key = document.getElementById("soundkey");

const soundKeyboard = document.querySelector(".buttonkey");

//Mưa

const Rain = document.getElementById("Rainn");

const soundRainboard = document.querySelector(".buttonRain");

let isRainning = true;

let isPlaying = true;

let isWinding = true;

let isKeing = true;

let indexSong = 0;

// mưa
soundRainboard.addEventListener("click", truesoundRain)

function truesoundRain() {
    if (isRainning) {
        isRainning = false;
        Rain.play();
    }

    else {
        isKeing = true;
        Rain.pause();
    }
}


//Gió

soundStreet.addEventListener("click", truesoundWind)

function truesoundWind() {
    if (isWinding) {
        isWinding = false;
        soundWind.play();
    }

    else {
        isWinding = true;
        soundWind.pause();
    }
}



soundKeyboard.addEventListener("click", truesoundKey)

function truesoundKey() {
    if (isKeing) {
        isKeing = false;
        Key.play();
    }

    else {
        isKeing = true;
        Key.pause();
    }
}

const musics = [

    {
        id: 1,
        file: "Chill1.mp3",
    },

    {
        id: 2,
        file: "Chill2.mp3",
    },

    {
        id: 3,
        file: "Alwaywithme.mp3",
    },

    {
        id: 4,
        file: "Cohenvoithanhxuan.mp3",
    },

    {
        id: 5,
        file: "Amthambenem.mp3",
    },

    {
        id: 5,
        file: "Binhyennoidau.mp3",
    },

    {
        id: 6,
        file: "Chacaidoseve.mp3",
    }
]



song.setAttribute("src", `./sound/${musics[indexSong].file}`)

nextBtn.addEventListener("click", function () {
    changeSong(1);
});

backBtn.addEventListener("click", function () {
    changeSong(-1);
});

function changeSong(dir) {
    if (dir == 1) {
        indexSong++;
        if (indexSong > musics.length) {
            indexSong = 0;
        }
        isPlaying = true;
    }

    else if (dir == -1) {
        indexSong--;
        if (indexSong <= 0) {
            indexSong = musics.length - 1;
        }
        isPlaying = true;
    }

    song.setAttribute("src", `./sound/${musics[indexSong].file}`)
    playPause();

}

function playPause() {
    if (isPlaying) {
        isPlaying = false;
        song.play();
        playBtn.innerHTML = `<ion-icon name="pause"></ion-icon>`;
    }

    else {
        playBtn.innerHTML = `<ion-icon name="play-circle-outline"></ion-icon>`;
        isPlaying = true;
        song.pause();
    }
}

song.addEventListener("ended", nextSong)

function nextSong() {
    changeSong(1);
}


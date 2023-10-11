const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const music = document.getElementById('music');
const musicList = document.getElementsByTagName('li');
const progressBar = document.getElementById('progress-bar');

const songName = document.getElementsByClassName('song-name');

let currentTrack = 0;
let currentList;

let tracks = [
			{
                "track": 1,
                "name": "Redemption",
                "artist": "2pac",
                "duration": "01:48",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Redemption.mp3"
            },
            {
            	"track": 2,
                "name": "Open Fire",
                "artist": "2pac",
                "duration": "02:53",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Open_Fire.mp3"
            },
            {
            	"track": 3,
                "name": "R U Still Down? (Remember me)",
                "artist": "2pac",
                "duration": "04:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-R_U_Still_Down_(Remember_Me).mp3"
            },
            {
            	"track": 4,
                "name": "Hellrazor [Explicit]",
                "artist": "2pac",
                "duration": "04:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Hellrazor.mp3"
            },
            {
            	"track": 5,
                "name": "Thug Style",
                "artist": "2pac",
                "duration": "04:16",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Thug_Style.mp3"
            },
            {
            	"track": 6,
                "name": "Where Do We Go From Her",
                "artist": "2pac",
                "duration": "04:29",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Where_Do_We_Go_From_Here_(Interlude).mp3"
            },
            {
            	"track": 7,
                "name": "Nothing to Lose",
                "artist": "2pac",
                "duration": "03:40",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Nothing_To_Lose.mp3"
            },
            {
            	"track": 8,
                "name": "I'm Gettin Money",
                "artist": "2pac",
                "duration": "03:32",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Im_Gettin_Money.mp3"
            },
            {
            	"track": 9,
                "name": "Lie to Kick It",
                "artist": "2pac",
                "duration": "03:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Lie_To_Kick_It.mp3"
            },
            {
            	"track": 10,
                "name": "F___ All y'All",
                "artist": "2pac",
                "duration": "04:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-F____All_YAll.mp3"
            },
            {
            	"track": 11,
                "name": "Let Them Thangs Go",
                "artist": "2pac",
                "duration": "03:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Let_Them_Thangs_Go.mp3"
            },
            {
            	"track": 12,
                "name": "Definition of a Thug Nigga",
                "artist": "2pac",
                "duration": "04:09",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Definition_Of_A_Thug_Nigga.mp3"
            },
            {
            	"track": 13,
                "name": "Ready 4 Whatever",
                "artist": "2pac",
                "duration": "04:06",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Ready_4_Whatever.mp3"
            },
            {
            	"track": 14,
                "name": "When I Get Free II",
                "artist": "2pac",
                "duration": "03:22",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-When_I_Get_Free_II.mp3"
            },
            {
            	"track": 15,
                "name": "Hold on Be Strong",
                "artist": "2pac",
                "duration": "04:10",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Hold_On_Be_Strong.mp3"
            },
            {
            	"track": 16,
                "name": "I'm Losin It",
                "artist": "2pac",
                "duration": "03:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Im_Losin_It.mp3"
            },
            {
            	"track": 17,
                "name": "Fake Ass B____es",
                "artist": "2pac",
                "duration": "03:11",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Fake_Ass_B____es.mp3"
            },
            {
            	"track": 18,
                "name": "Do for Love",
                "artist": "2pac",
                "duration": "04:42",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Do_For_Love.mp3"
            },
            {
            	"track": 19,
                "name": "Enemies With Me",
                "artist": "2pac",
                "duration": "04:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Enemies_With_Me.mp3"
            },
            {
            	"track": 20,
                "name": "Nothin' but Love",
                "artist": "2pac",
                "duration": "04:26",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Nothin_But_Love.mp3"
            },
            {
            	"track": 21,
                "name": "16 on Death Row",
                "artist": "2pac",
                "duration": "05:40",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-16_On_Death_Row.mp3"
            },
            {
            	"track": 22,
                "name": "I Wonder if Heaven Got a Ghetto",
                "artist": "2pac",
                "duration": "04:51",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-I_Wonder_If_Heaven_Got_A_Ghetto.mp3"
            },
            {
            	"track": 23,
                "name": "When I Get Free",
                "artist": "2pac",
                "duration": "04:46",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-When_I_Get_Free.mp3"
            },
            {
            	"track": 23,
                "name": "Black Starry Night (interlude)",
                "artist": "2pac",
                "duration": "00:48",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Black_Starry_Night_(Interlude).mp3"
            },
            {
            	"track": 24,
                "name": "Only Fear of Death",
                "artist": "2pac",
                "duration": "05:09",
                "url": "https://2pacalbum.blob.core.windows.net/albums/r-u-still-down/2Pac-Only_Fear_Of_Death.mp3"
            }
         	];
 
function init() {
	if (currentTrack === 0) {
		music.src = tracks[0].url;
		music.load();
	}

	for(let i=0; i<tracks.length; i++){
		$('ul').append(`<li id="${i}"><div class="wrapper"><div>${tracks[i].track}</div><div>${tracks[i].name}<br /> <span class="artist">${tracks[i].artist}</span></div><div>${tracks[i].duration}</div></div></li>`);
	}

	for(let musicIndex=0; musicIndex<musicList.length; musicIndex++){
		musicList[musicIndex].addEventListener('click', switchMusic, false);
	}
}

function switchMusic(e) {

	if(currentList !== undefined) {
		removePlayedBackground();
		music.pause();
	}	
	currentTrack = this.id;
	music.src = tracks[currentTrack].url;
	music.load();
	play();

}

function addChoosedBackground() {
	currentList = document.getElementById(currentTrack);
	currentList.classList.add("song-play-now");


}

function removePlayedBackground() {
	currentList.classList.remove("song-play-now");

}

function play() {
	playBtn.classList.add("hidden");
	pauseBtn.classList.remove("hidden");
	
	music.play();
	musicIsPlaying = true;
	addChoosedBackground();
	document.getElementById('end-time').innerHTML = tracks[currentTrack].duration;
}

function pause() {
	pauseBtn.classList.add("hidden");
	playBtn.classList.remove("hidden");

	musicIsPlaying = false;
	music.pause();
}


function prePlay() {
	removePlayedBackground();
	music.pause();

	if (currentTrack > 0){
		currentTrack --;

	} else {
		currentTrack = tracks.length-1;
	}
	
	music.src = tracks[currentTrack].url;
	music.load();
	play();

}

function nextPlay() {
	removePlayedBackground();
	music.pause();
	
	if (currentTrack < tracks.length-1){
		currentTrack ++;

	} else {
		currentTrack = 0;
	}

	music.src = tracks[currentTrack].url;
	music.load();
	play();

}

function calculateTotalValue(length) {
  let minutes = Math.floor(length / 60),
    seconds_int = length - minutes * 60,
    seconds_str = seconds_int.toString(),
    seconds = seconds_str.substr(0, 2),
    time = minutes + ':' + seconds

  return time;
}

function formatTime() {
	let timeline = document.getElementById('start-time');
    let s = parseInt(music.currentTime % 60);
    let m = parseInt((music.currentTime / 60) % 60);
    if (s < 10) {
        timeline.innerHTML = m + ':0' + s;
    }
    else {
        timeline.innerHTML = m + ':' + s;
    }
}

function updateProgress() {
	let current = music.currentTime;
	let percent = (current / music.duration) * 100;
	progressBar.setAttribute('value', percent);

}

playBtn.addEventListener('click', play, false);
pauseBtn.addEventListener('click', pause, false);
preBtn.addEventListener('click', prePlay, false);
nextBtn.addEventListener('click', nextPlay, false);
music.addEventListener('ended', nextPlay, false);

// 歌曲已播放時間
music.addEventListener("timeupdate", formatTime, false);
music.addEventListener("timeupdate", updateProgress, false);



init();
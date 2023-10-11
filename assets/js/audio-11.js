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
                "name": "Holler If Ya Hear Me",
                "artist": "2pac",
                "duration": "04:31",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Holler_If_Ya_Hear_Me.mp3"
            },
            {
            	"track": 2,
                "name": "Pac's Theme (interlude)",
                "artist": "2pac",
                "duration": "01:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Pacs_Theme_(Interlude).mp3"
            },
            {
            	"track": 3,
                "name": "Point the Finga",
                "artist": "2pac",
                "duration": "04:26",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Point_The_Finga.mp3"
            },
            {
            	"track": 4,
                "name": "Something 2 Die 4 (interlude)",
                "artist": "2pac",
                "duration": "02:43",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Something_2_Die_4_(Interlude).mp3"
            },
            {
            	"track": 5,
                "name": "Last Wordz",
                "artist": "2pac ft. Ice Cube, Ice-T",
                "duration": "03:37",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Last_Wordz.mp3"
            },
            {
            	"track": 6,
                "name": "Souljah's Revenge",
                "artist": "2pac",
                "duration": "03:17",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Souljahs_Revenge.mp3"
            },
            {
            	"track": 7,
                "name": "Peep Game",
                "artist": "2pac ft. Deadly Threat",
                "duration": "04:28",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Peep_Game.mp3"
            },
            {
            	"track": 8,
                "name": "Strugglin'",
                "artist": "2pac",
                "duration": "03:34",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Strugglin.mp3"
            },
            {
            	"track": 9,
                "name": "Guess Who's Back",
                "artist": "2pac",
                "duration": "03:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Guess_Whos_Back.mp3"
            },
            {
            	"track": 10,
                "name": "Representin' 93",
                "artist": "2pac",
                "duration": "03:34",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Representin_93.mp3"
            },
            {
            	"track": 11,
                "name": "Keep Ya Head Up",
                "artist": "2pac",
                "duration": "04:23",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Keep_Ya_Head_Up.mp3"
            },
            {
            	"track": 12,
                "name": "Strictly 4 My N.I.G.G.A.Z...",
                "artist": "2pac",
                "duration": "05:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Strictly_4_My_NIGGAZ.mp3"
            },
            {
            	"track": 13,
                "name": "The Streetz R Deathrow",
                "artist": "2pac",
                "duration": "03:27",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-The_Streetz_R_Deathrow.mp3"
            },
            {
            	"track": 14,
                "name": "I Get Around",
                "artist": "2pac ft. Digital Underground",
                "duration": "04:23",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-I_Get_Around.mp3"
            },
            {
            	"track": 15,
                "name": "Papa'z Song",
                "artist": "2pac ft. Wycked",
                "duration": "05:26",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-Papaz_Song.mp3"
            },
            {
            	"track": 16,
                "name": "5 Deadly Venomz",
                "artist": "2pac ft. Treach, Apache, Live Squad",
                "duration": "05:14",
                "url": "https://2pacalbum.blob.core.windows.net/albums/strictly-4-my-niggaz/2Pac-5_Deadly_Venomz.mp3"
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
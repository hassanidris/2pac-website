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
                "name": "Intro",
                "artist": "2pac",
                "duration": "01:40",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Intro.mp3"
            },
            {
            	"track": 2,
                "name": "If I Die 2Nite",
                "artist": "2pac",
                "duration": "04:02",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-If_I_Die_2Nite.mp3"
            },
            {
            	"track": 3,
                "name": "Me Against the World",
                "artist": "2pac ft. Dramacydal",
                "duration": "04:39",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Me_Against_The_World.mp3"
            },
            {
            	"track": 4,
                "name": "So Many Tears",
                "artist": "2pac",
                "duration": "03:58",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-So_Many_Tears.mp3"
            },
            {
            	"track": 5,
                "name": "Temptations [Explicit]",
                "artist": "2pac",
                "duration": "05:01",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Temptations.mp3"
            },
            {
            	"track": 6,
                "name": "Young Niggaz",
                "artist": "2pac",
                "duration": "04:53",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Young_Niggaz.mp3"
            },
            {
            	"track": 7,
                "name": "Heavy in the Game",
                "artist": "2pac ft. Richie Rich",
                "duration": "04:22",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Heavy_In_The_Game.mp3"
            },
            {
            	"track": 8,
                "name": "Lord Knows",
                "artist": "2pac",
                "duration": "04:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Lord_Knows.mp3"
            },
            {
            	"track": 9,
                "name": "Dear Mama",
                "artist": "2pac",
                "duration": "04:36",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Dear_Mama.mp3"
            },
            {
            	"track": 10,
                "name": "It Ain't Easy",
                "artist": "2pac",
                "duration": "04:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-It_Aint_Easy.mp3"
            },
            {
            	"track": 11,
                "name": "Can U Get Away",
                "artist": "2pac",
                "duration": "05:46",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Can_U_Get_Away.mp3"
            },
            {
            	"track": 12,
                "name": "Old School",
                "artist": "2pac",
                "duration": "04:39",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Old_School.mp3"
            },
            {
            	"track": 13,
                "name": "F___ the World",
                "artist": "2pac",
                "duration": "04:13",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-F____The_World.mp3"
            },
            {
            	"track": 14,
                "name": "Death Around the Corner",
                "artist": "2pac",
                "duration": "04:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Death_Around_The_Corner.mp3"
            },
            {
            	"track": 15,
                "name": "Outlaw",
                "artist": "2pac ft. Dramacydal",
                "duration": "04:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/me-against-the-world/2Pac-Outlaw.mp3"
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
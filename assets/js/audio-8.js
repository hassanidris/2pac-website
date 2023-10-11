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
                "name": "To Live and Die in L.A.",
                "artist": "2pac",
                "duration": "04:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-To-Live-Die-In-LA.mp3"
            },
            {
            	"track": 2,
                "name": "Hail Mary [Explicit]",
                "artist": "2pac",
                "duration": "05:12",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Hail-Mary.mp3"
            },
            {
            	"track": 3,
                "name": "Toss It Up",
                "artist": "2pac",
                "duration": "04:43",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Toss-It-Up.mp3"
            },
            {
            	"track": 4,
                "name": "Me and My Girlfriend",
                "artist": "2pac",
                "duration": "05:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Me_And_My_Girlfriend.mp3"
            },
            {
            	"track": 5,
                "name": "Hold Ya Head",
                "artist": "2pac",
                "duration": "03:59",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Hold_Ya_Head.mp3"
            },
            {
            	"track": 6,
                "name": "Against All Odds",
                "artist": "2pac",
                "duration": "04:37",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Against_All_Odds.mp3"
            },
            {
            	"track": 7,
                "name": "Krazy",
                "artist": "2pac",
                "duration": "05:16",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Krazy.mp3"
            },
            {
            	"track": 8,
                "name": "White Man'z World",
                "artist": "2pac",
                "duration": "05:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-White_Manz_World.mp3"
            },
            {
            	"track": 9,
                "name": "Bomb First (My Second Reply)",
                "artist": "2pac",
                "duration": "04:57",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Bomb_First_(My_Second_Reply).mp3"
            },
            {
            	"track": 10,
                "name": "Life of an Outlaw",
                "artist": "2pac",
                "duration": "04:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Life_Of_An_Outlaw.mp3"
            },
            {
            	"track": 11,
                "name": "Just Like Daddy",
                "artist": "2pac",
                "duration": "05:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Just_Like_Daddy.mp3"
            },
            {
            	"track": 12,
                "name": "Blasphemy",
                "artist": "2pac",
                "duration": "04:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/the-don-killuminati/2Pac-Blasphemy.mp3"
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
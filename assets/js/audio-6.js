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
                "name": "Letter to the President",
                "artist": "2pac ft. Outlawz, Big Skye",
                "duration": "06:04",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Letter_To_The_President.mp3"
            },
            {
            	"track": 2,
                "name": "Still I Rise",
                "artist": "2pac ft. Outlawz, Ta'He",
                "duration": "04:45",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Still_I_Rise.mp3"
            },
            {
            	"track": 3,
                "name": "Secretz of War",
                "artist": "2pac ft. Outlawz",
                "duration": "04:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Secretz_Of_War.mp3"            	
            },
            {
            	"track": 4,
                "name": "Baby Don’t Cry (Keep Ya Head Up II)",
                "artist": "2pac ft. Outlawz",
                "duration": "04:22",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Baby_Dont_Cry_(Keep_Ya_Head_Up_II).mp3"            	
            },
            {
            	"track": 5,
                "name": "As the World Turns",
                "artist": "2pac ft. Outlawz",
                "duration": "05:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-As_The_World_Turns.mp3"            	
            },
            {
            	"track": 6,
                "name": "Black Jesuz",
                "artist": "2pac ft. Outlawz",
                "duration": "04:29",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Black_Jesuz.mp3"            	
            },
            {
            	"track": 7,
                "name": "Home Boyz",
                "artist": "2pac ft. Outlawz",
                "duration": "03:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Homeboyz.mp3"            	
            },
            {
            	"track": 8,
                "name": "Hell 4 a Hustler",
                "artist": "2pac ft. Outlawz",
                "duration": "04:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Hell_4_A_Hustler.mp3"            	
            },
            {
            	"track": 9,
                "name": "High Speed",
                "artist": "2pac ft. Outlawz",
                "duration": "06:00",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-High_Speed.mp3"            	
            },
            {
            	"track": 10,
                "name": "The Good Die Young",
                "artist": "2pac ft. Outlawz",
                "duration": "05:42",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-The_Good_Die_Young.mp3"            	
            },
            {
            	"track": 11,
                "name": "Killuminati",
                "artist": "2pac ft. Outlawz",
                "duration": "04:02",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Killuminati.mp3"            	
            },
            {
            	"track": 12,
                "name": "Teardrops and Closed Caskets",
                "artist": "2pac ft. Outlawz",
                "duration": "05:05",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Teardrops_And_Closed_Caskets.mp3"            	
            },
            {
            	"track": 13,
                "name": "Tattoo Tears",
                "artist": "2pac ft. Outlawz",
                "duration": "05:03",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Tattoo_Tears.mp3"            	
            },
            {
            	"track": 14,
                "name": "U Can Be Touched",
                "artist": "2pac ft. Outlawz",
                "duration": "04:23",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-U_Can_Be_Touched.mp3"            	
            },
            {
            	"track": 15,
                "name": "Y'all Don't Know Us",
                "artist": "2pac ft. Outlawz",
                "duration": "04:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/still-i-rise/2Pac-Yall_Dont_Know_Us.mp3"            	
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
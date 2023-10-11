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
                "name": "Just Watching",
                "artist": "2pac",
                "duration": "05:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Just_Watching.mp3"
            },
            {
            	"track": 2,
                "name": "Thug Pound",
                "artist": "2pac",
                "duration": "04:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Thug_Pound.mp3"
            },
            {
            	"track": 3,
                "name": "Lets Fight",
                "artist": "2pac",
                "duration": "04:42",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Lets_Fight.mp3"            	
            },
			{
                "track": 4,
                "name": "Where Will I Be",
                "artist": "2pac",
                "duration": "02:48",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Where_Will_I_Be.mp3"
            },
			{
                "track": 5,
                "name": "Struggle Continues",
                "artist": "2pac",
                "duration": "05:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Struggle_Continues.mp3"
            },
			{
                "track": 6,
                "name": "Boot Camp Clik Interview",
                "artist": "2pac",
                "duration": "04:06",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Boot_Camp_Clik_Interview.mp3"
            },
			{
                "track": 7,
                "name": "Thug Nigga",
                "artist": "2pac",
                "duration": "04:58",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Thug_Nigga.mp3"
            },
			{
                "track": 8,
                "name": "Worldwide Dime Piece",
                "artist": "2pac",
                "duration": "04:52",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Worldwide_Dime_Piece.mp3"
            },
			{
                "track": 9,
                "name": "Secrets Of War",
                "artist": "2pac",
                "duration": "04:45",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Secrets_of_War.mp3"
            },
			{
                "track": 10,
                "name": "How Do You Want It",
                "artist": "2pac",
                "duration": "02:45",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-How_Do_You_Want_It.mp3"
            },
			{
                "track": 11,
                "name": "My Own Style",
                "artist": "2pac",
                "duration": "04:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-My_Own_Style.mp3"
            },
			{
                "track": 12,
                "name": "Brother At Armz",
                "artist": "2pac",
                "duration": "03:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Brother_At_Armz.mp3"
            },
			{
                "track": 13,
                "name": "They Don't Know",
                "artist": "2pac",
                "duration": "03:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-They_Dont_Know.mp3"
            },
			{
                "track": 14,
                "name": "Immortal",
                "artist": "2pac",
                "duration": "05:03",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Immortal.mp3"
            },
			{
                "track": 15,
                "name": "Tattoo Tearz",
                "artist": "2pac",
                "duration": "05:44",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Tattoo_Tearz.mp3"
            },
			{
                "track": 16,
                "name": "Where Ever You Are",
                "artist": "2pac",
                "duration": "03:14",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Where_Ever_You_Are.mp3"
            },
			{
                "track": 17,
                "name": "Military Minds",
                "artist": "2pac",
                "duration": "05:04",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-Military_Minds.mp3"
            },
			{
                "track": 18,
                "name": "The Money",
                "artist": "2pac",
                "duration": "03:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/one-nation/2Pac-The_Money.mp3"
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
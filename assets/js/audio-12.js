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
                "name": "Young Black Male",
                "artist": "2pac",
                "duration": "02:35",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Young_Black_Male.mp3"
            },
            {
            	"track": 2,
                "name": "I Don't Give a Fuck",
                "artist": "2pac",
                "duration": "04:20",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-I_Dont_Give_A_Fuck.mp3"
            },
            {
            	"track": 3,
                "name": "Something Wicked",
                "artist": "2pac",
                "duration": "02:29",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Something_Wicked.mp3"            	
            },
			{
                "track": 4,
                "name": "Tha' Lunatic",
                "artist": "2pac",
                "duration": "03:29",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Tha_Lunatic.mp3"
            },
			{
                "track": 5,
                "name": "Brenda's Got a Baby",
                "artist": "2pac",
                "duration": "03:52",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Brendas_Got_A_Baby.m4a"
            },
			{
                "track": 6,
                "name": "Trapped",
                "artist": "2pac",
                "duration": "05:17",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Trapped.mp3"
            },
			{
                "track": 7,
                "name": "Violent...",
                "artist": "2pac",
                "duration": "06:26",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Violent.mp3"
            },
			{
                "track": 8,
                "name": "Crooked Ass Nigga",
                "artist": "2pac",
                "duration": "04:17",
                "url": "https://dodealstorge.blob.core.windows.net/upload/2Pac-Crooked_Ass_Nigga.mp3"
            },
			{
                "track": 9,
                "name": "Rebel of the Underground",
                "artist": "2pac",
                "duration": "03:17",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Rebel_Of_The_Underground.mp3"
            },
			{
                "track": 10,
                "name": "Soulja's Story",
                "artist": "2pac",
                "duration": "05:06",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Souljas_Story.mp3"
            },
			{
                "track": 11,
                "name": "Words of Wisdom",
                "artist": "2pac",
                "duration": "04:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Words_Of_Wisdom.mp3"
            },
			{
                "track": 12,
                "name": "If My Homie Calls",
                "artist": "2pac",
                "duration": "03:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-If_My_Homie_Calls.mp3"
            },
			{
                "track": 13,
                "name": "Part Time Mutha",
                "artist": "2pac",
                "duration": "05:14",
                "url": "https://2pacalbum.blob.core.windows.net/albums/2pacalypse-now/2Pac-Part_Time_Mutha.mp3"
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
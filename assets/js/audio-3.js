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
                "name": "The Uppercut",
                "artist": "2pac ft. E.D.I, Noble",
                "duration": "03:50",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-The_Uppercut.mp3"
            },
            {
            	"track": 2,
                "name": "N.I.G.G.A. (Never Ignorant About Getting Goals Accomplished)",
                "artist": "2pac ft. Jadakiss",
                "duration": "04:16",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-NIGGA_(Never_Ignorant_About_Getting_Goals_Accomplished).mp3"
            },
            {
            	"track": 3,
                "name": "Loyal to the Game",
                "artist": "2pac ft. 50 Cent, Lloyd Banks, Young Buck",
                "duration": "03:24",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Loyal_To_The_Game.mp3"            	
            },
			{
                "track": 4,
                "name": "Hennessey",
                "artist": "2pac ft. Obie Trice",
                "duration": "03:27",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Hennessey.mp3"
            },
			{
                "track": 5,
                "name": "Crooked Nigga Too",
                "artist": "2pac",
                "duration": "02:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Crooked_Nigga_Too.mp3"
            },
			{
                "track": 6,
                "name": "Who Do You Love?",
                "artist": "2pac",
                "duration": "03:28",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Who_Do_You_Love.mp3"
            },
			{
                "track": 7,
                "name": "Po Nigga Blues (Scott Storch Remix (Explicit))",
                "artist": "2pac ft. Ronald Isley",
                "duration": "03:39",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Po_Nigga_Blues_(Scott_Storch_Remix_Explicit).mp3"
            },
			{
                "track": 8,
                "name": "Soldier Like Me",
                "artist": "2pac ft. Eminem",
                "duration": "03:51",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Soldier_Like_Me.mp3"
            },
			{
                "track": 9,
                "name": "Ghetto Gospel",
                "artist": "2pac ft. Elton John",
                "duration": "04:26",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Ghetto_Gospel.mp3"
            },
			{
                "track": 10,
                "name": "Black Cotton",
                "artist": "2pac ft. Eminem, Kastrom, Noble",
                "duration": "05:03",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Black_Cotton.mp3"
            },
			{
                "track": 11,
                "name": "Out on Bail",
                "artist": "2pac",
                "duration": "03:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Out_On_Bail.mp3"
            },
			{
                "track": 12,
                "name": "Crooked Nigga Too (Raphael Saadiq Remix (Explicit))",
                "artist": "2pac",
                "duration": "04:02",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Crooked_Nigga_Too_(Raphael_Saadiq_Remix_Explicit).mp3"
            },
			{
                "track": 13,
                "name": "Hennessey (Red Spyda Remix (Explicit))",
                "artist": "2pac ft. E.D.I, Sleepy Brown",
                "duration": "03:18",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Hennessey_(Red_Spyda_Remix_Explicit).mp3"
            },
			{
                "track": 14,
                "name": "Thugs Get Lonely Too",
                "artist": "2pac ft. Nate Dogg",
                "duration": "04:48",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Thugs_Get_Lonely_Too.mp3"
            },
			{
                "track": 15,
                "name": "Loyal To The Game (DJ Quik Remix (Explicit))",
                "artist": "2pac ft. Big Skye",
                "duration": "04:21",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Loyal_To_The_Game_(DJ_Quik_Remix_Explicit).mp3"
            },
			{
                "track": 16,
                "name": "Thug 4 Life",
                "artist": "2pac",
                "duration": "02:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Thug_4_Life.mp3"
            },
			{
                "track": 17,
                "name": "Don't You Trust Me",
                "artist": "2pac",
                "duration": "04:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/loyal-to-the-game/2Pac-Dont_You_Trust_Me.mp3"
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
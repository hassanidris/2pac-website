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
                "name": "Ballad of a Dead Soulja",
                "artist": "2pac",
                "duration": "04:16",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Ballad_Of_A_Dead_Soulja.mp3"
            },
            {
            	"track": 2,
                "name": "F___ Friendz",
                "artist": "2pac",
                "duration": "05:20",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-F___Friendz.mp3"
            },
            {
            	"track": 3,
                "name": "Lil' Homies",
                "artist": "2pac",
                "duration": "03:46",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Lil_Homies.mp3"            	
            },
			{
                "track": 4,
                "name": "Let Em Have It",
                "artist": "2pac ft. SKG",
                "duration": "04:53",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Let_Em_Have_It_(Hutch_Mix).mp3"
            },
			{
                "track": 5,
                "name": "Good Life",
                "artist": "2pac ft. Big Syke, E.D.I. Mean",
                "duration": "04:17",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Good_Life.mp3"
            },
			{
                "track": 6,
                "name": "Letter 2 My Unborn (album version)",
                "artist": "2pac",
                "duration": "03:18",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Letter_2_My_Unborn.mp3"
            },
			{
                "track": 7,
                "name": "Breathin",
                "artist": "2pac",
                "duration": "04:05",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Breathin.mp3"
            },
			{
                "track": 8,
                "name": "Happy Home",
                "artist": "2pac",
                "duration": "03:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Happy_Home.mp3"
            },
			{
                "track": 9,
                "name": "All Out",
                "artist": "2pac",
                "duration": "05:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-All_Out.mp3"
            },
			{
                "track": 10,
                "name": "F___ing Wit the Wrong Nigga",
                "artist": "2pac",
                "duration": "03:37",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-F___in_Wit_The_Wrong_Nigga.mp3"
            },
			{
                "track": 11,
                "name": "Thug N U Thug N Me (remix)",
                "artist": "2pac ft. K-Ci & JoJo",
                "duration": "04:12",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Thug_N_U_Thug_N_Me_(Jamie_Mix).mp3"
            },
			{
                "track": 12,
                "name": "Everything They Owe",
                "artist": "2pac",
                "duration": "03:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Everything_They_Owe.mp3"
            },
			{
                "track": 13,
                "name": "Until the End of Time",
                "artist": "2pac ft. RL",
                "duration": "04:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Until_The_End_Of_Time_(Letterbox_Version).mp3"
            },
			{
                "track": 14,
                "name": "M.O.B.",
                "artist": "2pac ft. Thug Life, Outlawz",
                "duration": "05:00",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-M.O.B..mp3"
            },
			{
                "track": 15,
                "name": "World Wide Mob Figgaz",
                "artist": "2pac",
                "duration": "04:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-World_Wide_Mob_Figgaz.mp3"
            },
			{
                "track": 16,
                "name": "Big Syke (interlude)",
                "artist": "2pac",
                "duration": "01:46",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac -Syke_Interlude_T2001.mp3"
            },
			{
                "track": 17,
                "name": "My Closest Roaddogz",
                "artist": "2pac",
                "duration": "04:05",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-My_Closest_RoadDogz.mp3"
            },
			{
                "track": 18,
                "name": "Niggaz Nature (Remix)",
                "artist": "2pac ft. Lil' Mo",
                "duration": "05:04",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Niggaz_Nature.mp3"
            },
			{
                "track": 19,
                "name": "When Thugz Cry",
                "artist": "2pac",
                "duration": "04:23",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-When_Thugz_Cry.mp3"
            },
			{
                "track": 20,
                "name": "U Don't Have 2 Worry",
                "artist": "2pac",
                "duration": "05:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-U_Dont_Have_2_Worry.mp3"
            },
			{
                "track": 21,
                "name": "This Ain't Livin",
                "artist": "2pac",
                "duration": "03:42",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-This_Aint_Livin.mp3"
            },
			{
                "track": 22,
                "name": "Why U Turn on Me",
                "artist": "2pac",
                "duration": "03:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Why_U_Turn_On_Me.mp3"
            },
			{
                "track": 23,
                "name": "Last Ones Left",
                "artist": "2pac",
                "duration": "04:00",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-LastOnesLeft.mp3"
            },
			{
                "track": 24,
                "name": "Thug n U Thug n Me",
                "artist": "2pac ft. K-Ci & JoJo",
                "duration": "04:29",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Thug_N_U_Thug_N_Me_(Hutch_Mix).mp3"
            },
			{
                "track": 25,
                "name": "Words 2 My First Born",
                "artist": "2pac ft. Above the Law",
                "duration": "04:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Words_2_My_Firstborn.mp3"
            },
			{
                "track": 26,
                "name": "Let Em Have It (remix)",
                "artist": "2pac ft. Lisa 'Left Eye' Lopes",
                "duration": "04:25",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Let_Em_Have_It_(Committee_Mix).mp3"
            },
			{
                "track": 27,
                "name": "Running on E",
                "artist": "2pac",
                "duration": "05:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Runnin_On_E.mp3"
            },
			{
                "track": 28,
                "name": "When I Get Free",
                "artist": "2pac ft. J. Valentine",
                "duration": "04:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-When_I_Get_Free.mp3"
            },
			{
                "track": 29,
                "name": "Until the End of Time (RP Remix)",
                "artist": "2pac ft. Richard Page",
                "duration": "04:28",
                "url": "https://2pacalbum.blob.core.windows.net/albums/until-the-end-of-time/2Pac-Until_The_End_Of_Time_(RP_Remix).mp3"
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
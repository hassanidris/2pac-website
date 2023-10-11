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
                "duration": "00:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Intro.mp3"
            },
            {
            	"track": 2,
                "name": "Still Ballin’ (Nitty remix)",
                "artist": "2pac ft. Trick Daddy",
                "duration": "02:50",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Still_Ballin_(Nitty_Remix).mp3"
            },
            {
            	"track": 3,
                "name": "When We Ride on Our Enemies (Briss remix)",
                "artist": "2pac",
                "duration": "02:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-When_We_Ride_On_Our_Enemies_(Briss_Remix).mp3"            	
            },
			{
                "track": 4,
                "name": "Changed Man (Jazze Pha remix)",
                "artist": "2pac ft. T.I., Jazze Pha, Johntá Austin",
                "duration": "03:52",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Changed_Man_(Jazze_Pha_Remix).mp3"
            },
			{
                "track": 5,
                "name": "F___ 'em All (explicit album version)",
                "artist": "2pac",
                "duration": "04:26",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-F___Em_All.mp3"
            },
			{
                "track": 6,
                "name": "Never B Peace (Nitty remix)",
                "artist": "2pac ft. E.D.I. Mean, Kastro",
                "duration": "04:59",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Never_B_Peace_(Nitty_Remix).mp3"
            },
			{
                "track": 7,
                "name": "Mama’s Just a Little Girl (KP remix)",
                "artist": "2pac ft. Kimmy Hill",
                "duration": "04:58",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Mammas_Just_A_Little_Girl_(KP_Remix).mp3"
            },
			{
                "track": 8,
                "name": "Street Fame (Briss remix)",
                "artist": "2pac",
                "duration": "04:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Street_Fame_(Briss_Remix).mp3"
            },
			{
                "track": 9,
                "name": "Whatcha Gonna Do",
                "artist": "2pac",
                "duration": "03:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Whatcha_Gonna_Do.mp3"
            },
			{
                "track": 10,
                "name": "Fair Xchange (Jazze Pha remix)",
                "artist": "2pac ft. Jazze Pha",
                "duration": "03:52",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Fair_Xchange_(Jazze_Pha_Remix).mp3"
            },
			{
                "track": 11,
                "name": "Late Night",
                "artist": "2pac ft. DJ Quik, Outlawz, Yaki Kadafi, Hussein Fatal",
                "duration": "04:20",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Late_Nite.mp3"
            },
			{
                "track": 12,
                "name": "Ghetto Star",
                "artist": "2pac ft. Sean Cole",
                "duration": "04:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Ghetto_Star.mp3"
            },
			{
                "track": 13,
                "name": "Thugz Mansion (Nas acoustic)",
                "artist": "2pac ft. Nas, J. Phoenix",
                "duration": "04:13",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Thugz_Mansion_(Nas_Acoustic).mp3"
            },
			{
                "track": 14,
                "name": "My Block (Nitty remix)",
                "artist": "2pac",
                "duration": "05:23",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-My_Block_(Nitty_Remix).mp3"
            },
			{
                "track": 15,
                "name": "Thugz Mansion (explicit 7 remix)",
                "artist": "2pac ft. Anthony Hamilton",
                "duration": "04:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Thugz_Mansion_(7_Remix).mp3"
            },
			{
                "track": 16,
                "name": "Never Call U B____ Again",
                "artist": "2pac ft. Tyrese Gibson",
                "duration": "04:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Never_Call_U_B____Again.mp3"
            },
			{
                "track": 17,
                "name": "Better Dayz",
                "artist": "2pac ft. Ronald Isley",
                "duration": "04:18",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Better_Dayz.mp3"
            },
			{
                "track": 18,
                "name": "U Can Call (Jazze Pha remix)",
                "artist": "2pac ft. Jazze Pha",
                "duration": "03:50",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-U_Can_Call_(Jazze_Pha_Remix).mp3"
            },
			{
                "track": 19,
                "name": "Military Minds",
                "artist": "2pac ft. Smif-N-Wessun, Buckshot",
                "duration": "05:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Military_Minds.mp3"
            },
			{
                "track": 20,
                "name": "Fame",
                "artist": "2pac ft. Yaki Kadafi, Napoleon, Kastro, Young Noble",
                "duration": "04:50",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Fame.mp3"
            },
			{
                "track": 21,
                "name": "Fair Xchange (Mya remix)",
                "artist": "2pac ft. Mýa",
                "duration": "03:56",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Fair_Xchange_(Mya_Remix).mp3"
            },
			{
                "track": 22,
                "name": "Catchin’ Feelin’s",
                "artist": "2pac ft. E.D.I. Mean, Napoleon, Young Noble, Muszamil",
                "duration": "04:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Catchin_Feelins.mp3"
            },
			{
                "track": 23,
                "name": "There U Go",
                "artist": "2pac ft. Yaki Kadafi, Big Syke, Jazze Pha, E.D.I. Mean, Napoleon, Kastro",
                "duration": "05:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-There_U_Go.mp3"
            },
			{
                "track": 24,
                "name": "This Life I Lead",
                "artist": "2pac",
                "duration": "05:21",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-This_Life_I_Lead.mp3"
            },
			{
                "track": 25,
                "name": "Who Do U Believe In",
                "artist": "2pac ft. Yaki Kadafi",
                "duration": "05:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-Who_Do_You_Believe_In.mp3"
            },
			{
                "track": 26,
                "name": "They Don’t Give a F___ About Us",
                "artist": "2pac",
                "duration": "05:06",
                "url": "https://2pacalbum.blob.core.windows.net/albums/better-dayz/2Pac-They_Dont_Give_A_F____About_Us.mp3"
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
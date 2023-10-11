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
                "name": "Playa Cardz Right (Male)",
                "artist": "2pac ft. Ludacris, Keon Bryce",
                "duration": "04:54",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Playa_Cardz_Right_Male.mp3"
            },
            {
            	"track": 2,
                "name": "Untouchable (Swizz Beatz remix)",
                "artist": "2pac ft. Bone Thugs-N-Harmony, Krayzie Bone",
                "duration": "04:16",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Untouchable_Swizz_Beatz_Remix.mp3"
            },
            {
            	"track": 3,
                "name": "Dumpin",
                "artist": "2pac ft. Papoose, Carl Thomas, Hussein Fatal",
                "duration": "04:28",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Dumpin.mp3"            	
            },
			{
                "track": 4,
                "name": "Pac's Life (Remix)",
                "artist": "2pac ft. Snoop Dogg, T.I., Chris Starr",
                "duration": "03:38",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Pacs_Life_Remix.mp3"
            },
			{
                "track": 5,
                "name": "Untouchable",
                "artist": "2pac ft. Yaki Kadafi, Jamal Woolard, Hussein Fatal",
                "duration": "04:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Untouchable.mp3"
            },
			{
                "track": 6,
                "name": "International",
                "artist": "2pac ft. Nipsey Hussle, Young Dre",
                "duration": "04:03",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-International.mp3"
            },
			{
                "track": 7,
                "name": "Don't Stop",
                "artist": "2pac ft. Yaki Kadafi, Big Syke, Hussein Fatal, E.D.I. Mean, Young Noble, Stormey",
                "duration": "05:25",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Dont_Stop.mp3"
            },
			{
                "track": 8,
                "name": "Whatz Next",
                "artist": "2pac ft. Jay Rock, A-3",
                "duration": "04:18",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Whatz_Next.mp3"
            },
			{
                "track": 9,
                "name": "Sleep",
                "artist": "2pac ft. Chamillionaire, Young Buck",
                "duration": "04:10",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Sleep.mp3"
            },
			{
                "track": 10,
                "name": "Playa Cardz Right",
                "artist": "2pac ft. Keyshia Cole",
                "duration": "04:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Playa_Cardz_Right.mp3"
            },
			{
                "track": 11,
                "name": "Pac's Life",
                "artist": "2pac ft. T.I., Ashanti",
                "duration": "03:40",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Pacs_Life.mp3"
            },
			{
                "track": 12,
                "name": "Soon as I Get Home",
                "artist": "2pac ft. Yaki Kadafi",
                "duration": "03:40",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Soon_As_I_Get_Home.mp3"
            },
			{
                "track": 13,
                "name": "Don't Sleep",
                "artist": "2pac ft. Lil Scrappy, Yaki Kadafi, Sean Cole, Stormey",
                "duration": "03:36",
                "url": "https://2pacalbum.blob.core.windows.net/albums/pacs-life/2Pac-Dont_Sleep.mp3"
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
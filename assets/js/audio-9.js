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
                "name": "Ambitionz Az a Ridah",
                "artist": "2pac",
                "duration": "04:39",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Ambitionz_Az_a_Ridah.mp3"
            },
            {
            	"track": 2,
                "name": "All Bout U [Explicit]",
                "artist": "2pac ft. Snoop Dogg, Nate Dogg, Dru Down",
                "duration": "04:33",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-All-About-U.mp3"
            },
            {
            	"track": 3,
                "name": "Skandalouz",
                "artist": "2pac ft. Nate Dogg",
                "duration": "04:09",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Skandalouz.mp3"
            },
            {
            	"track": 4,
                "name": "Got My Mind Made Up",
                "artist": "2pac ft. Method Man, Redman, Kurupt, Daz Dillinger",
                "duration": "05:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Got_My_Mind_Made_Up.mp3"
            },
            {
            	"track": 5,
                "name": "How Do U Want It",
                "artist": "2pac ft. K-Ci & JoJo",
                "duration": "04:48",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-How-Do-U-Want-It.mp3"
            },
            {
            	"track": 6,
                "name": "2 of Americaz Most Wanted",
                "artist": "2pac ft. Snoop Dogg",
                "duration": "04:07",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-2-Of-Amerikaz-Most-Wanted.mp3"
            },
            {
            	"track": 7,
                "name": "No More Pain [Explicit]",
                "artist": "2pac",
                "duration": "06:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-No_More_Pain.mp3"
            },
            {
            	"track": 8,
                "name": "Heartz of Men [Explicit]",
                "artist": "2pac",
                "duration": "04:41",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Heartz-Of-Men.mp3"
            },
            {
            	"track": 9,
                "name": "Life Goes On",
                "artist": "2pac",
                "duration": "05:02",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Life-Goes-On.mp3"
            },
            {
            	"track": 10,
                "name": "Only God Can Judge Me",
                "artist": "2pac ft. Rappin' 4-Tay",
                "duration": "04:57",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Only_God_Can_Judge_Me.mp3"
            },
            {
            	"track": 11,
                "name": "Tradin' War Stories",
                "artist": "2pac ft. Outlawz, C-Bo, Storm, CPO, The Storm",
                "duration": "05:30",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Tradin_War_Stories.mp3"
            },
            {
            	"track": 12,
                "name": "California Love (Remix)",
                "artist": "2pac ft. Dr. Dre, Roger Troutman",
                "duration": "04:45",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-California-Love.mp3"
            },
            {
            	"track": 13,
                "name": "I Ain't Mad at Cha",
                "artist": "2pac ft. Danny Boy",
                "duration": "04:53",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-I_Aint_Mad_At_Cha.mp3"
            },
            {
            	"track": 14,
                "name": "What'z Ya Phone #",
                "artist": "2pac ft. Danny Boy",
                "duration": "05:09",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Whatz_Ya_Phone.mp3"
            },
            {
            	"track": 15,
                "name": "Can't C Me",
                "artist": "2pac ft. George Clinton",
                "duration": "05:31",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Cant_C_Me.mp3"
            },
            {
            	"track": 16,
                "name": "Shorty Wanna Be a Thug [Explicit]",
                "artist": "2pac",
                "duration": "03:52",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Shorty_Wanna_Be_A_Thug.mp3"
            },
            {
            	"track": 17,
                "name": "Holla at Me",
                "artist": "2pac",
                "duration": "04:55",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2pac-Holla_At_Me.mp3"
            },
            {
            	"track": 18,
                "name": "Wonda Why They Call U B____",
                "artist": "2pac",
                "duration": "04:19",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Wonda_Why_They_Call_U_Bytch.mp3"
            },
            {
            	"track": 19,
                "name": "When We Ride",
                "artist": "2pac",
                "duration": "05:10",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-When_We_Ride.mp3"
            },
            {
            	"track": 20,
                "name": "Thug Passion",
                "artist": "2pac ft. Outlawz, Jewell, The Storm",
                "duration": "05:08",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Thug_Passion.mp3"
            },
            {
            	"track": 21,
                "name": "Picture Me Rollin'",
                "artist": "2pac ft. Big Syke, Danny Boy, CPO Boss Hogg, CPO",
                "duration": "05:15",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Picture_Me_Rollin.mp3"
            },
            {
            	"track": 22,
                "name": "Check Out Time",
                "artist": "2pac ft. Kurupt, Big Syke",
                "duration": "04:40",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Check_Out_Time.mp3"
            },
            {
            	"track": 23,
                "name": "Ratha Be Ya N____",
                "artist": "2pac ft. Richie Rich",
                "duration": "04:14",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Ratha_Be_Ya_N____.mp3"
            },
            {
            	"track": 24,
                "name": "All Eyez on Me",
                "artist": "2pac ft. Big Syke",
                "duration": "02:44",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-All_Eyez_On_Me.mp3"
            },
            {
            	"track": 25,
                "name": "Run tha Streetz",
                "artist": "2pac ft. Michel'le, Napoleon, Storm, The Storm",
                "duration": "05:17",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Run_Tha_Streetz.mp3"
            },
            {
            	"track": 26,
                "name": "Ain't Hard 2 Find",
                "artist": "2pac ft. E-40, B-Legit, C-Bo, Richie Rich",
                "duration": "04:29",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Aint_Hard_2_Find.mp3"
            },
            {
            	"track": 27,
                "name": "Heaven Ain't Hard 2 Find",
                "artist": "2pac",
                "duration": "03:59",
                "url": "https://2pacalbum.blob.core.windows.net/albums/all-eyez-on-me/2Pac-Heaven_Aint_Hard_2_Find.mp3"
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
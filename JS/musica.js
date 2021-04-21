var holding = false;
var track = document.getElementById('track');
var progress = document.getElementById('progress');
var play = document.getElementById('play');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var art = document.getElementById('art');
var current_track = 0;
var song, audio, duration;
var playing = false;
var songs = [{
    title: 'XO TOUR Llif3',
    artist: "Lil Uzi Vert",
    url: '../multimedia/Audios/Lil Uzi Vert - XO TOUR Llif3(Sub español)(M4A_128K).m4a',
    art: '../multimedia/Imagenes/transparente.png'
},
    
{
    title: 'Danger',
    artist: "Migos ft. Marshmello",
    url: '../multimedia/Audios/Migos _ Marshmello - Danger (from Bright_ The Albu(M4A_128K).m4a',
    art: '../multimedia/Imagenes/transparente.png'
},

{
    title: 'I got 5 on it',
    artist: "Luniz",
    url: '../multimedia/Audios/Luniz   I got 5 on it - Bass Boosted - New Bass - [128kbs].m4a',
    art: '../multimedia/Imagenes/transparente.png'
},
             
{
    title: 'Nok from the Future',
    artist: "Cousin Stizz & Night Lovell",
    url: '../multimedia/Audios/Nok from the Future - Up North ft. Cousin Stizz & Night Lovell [128kbs].m4a',
    art: '../multimedia/Imagenes/transparente.png'
},

{
    title: 'There it Go',
    artist: "Juelz Santana",
    url: '../multimedia/Audios/Juelz Santana - There It Go (The Whistle Song)(M4A_128K).m4a',
    art: '../multimedia/Imagenes/transparente.png'
}];

/*window.addEventListener('load', init(), false);*/

/*ESTA LINEA ES PARA INICIO AUTOMÁTICO*/
window.addEventListener('load', init(), audio.play(), false);

function init() {
    song = songs[current_track];
    audio = new Audio();
    audio.src = song.url;
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
}


audio.addEventListener('timeupdate', updateTrack, false);
audio.addEventListener('loadedmetadata', function () {
    duration = this.duration;
}, false);
window.onmousemove = function (e) {
    e.preventDefault();
    if (holding) seekTrack(e);
}
window.onmouseup = function (e) {
    holding = false;
    /*console.log(holding);*/
}
track.onmousedown = function (e) {
    holding = true;
    seekTrack(e);
    console.log(holding);
}
play.onclick = function () {
    playing ? audio.pause() : audio.play();
}
audio.addEventListener("pause", function () {
    play.innerHTML = '<span class="icon-play" />';
    playing = false;
}, false);

audio.addEventListener("playing", function () {
    play.innerHTML = '<span class="icon-pause" />';
    playing = true;
}, false);
next.addEventListener("click", nextTrack, false);
prev.addEventListener("click", prevTrack, false);


function updateTrack() {
    curtime = audio.currentTime;
    percent = Math.round((curtime * 100) / duration);
    /*progress.style.width = percent + '%';
    handler.style.left = percent + '%';*/
    if(percent==100) nextTrack();
}

function seekTrack(e) {
    event = e || window.event;
    var x = e.pageX - player.offsetLeft - track.offsetLeft;
    percent = Math.round((x * 100) / track.offsetWidth);
    if (percent > 100) percent = 100;
    if (percent < 0) percent = 0;
    progress.style.width = percent + '%';
    handler.style.left = percent + '%';
    audio.play();
    audio.currentTime = (percent * duration) / 100
}
function nextTrack() {
    current_track++;
    current_track = current_track % (songs.length);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function prevTrack() {
    current_track--;
    current_track = (current_track == -1 ? (songs.length - 1) : current_track);
    song = songs[current_track];
    audio.src = song.url;
    audio.onloadeddata = function() {
      updateInfo();
    }
}

function updateInfo() {
    title.textContent = song.title;
    artist.textContent = song.artist;
    art.src = song.art;
    art.onload = function() {
        audio.play();
    }
}
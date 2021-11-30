const player = document.querySelector('.player'),
        playBtn = document.querySelector('.play'),
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next'),
        audio = document.querySelector('.audio'),
        progressContainer = document.querySelector('.progress_container'),
        progress = document.querySelector('.progress'),
        title = document.querySelector('.song'),
        cover = document.querySelector('.cover__img'),
        imgSrc = document.querySelector('.img__src')

const songs = [
'Hensonn -  Sahara',
'Phonk - черные глаза',
'Phonk - гимн СССР',
'Mishashi Sensei - IN THE CLUB',
'INCOMING',
'LXST CXNTURY - AMNESIA',
'DVRST - Dream Space',
'АДЛИН - No love (slowed+reverb)',
'HXVRMXN - XFF DREAM',
'Marlow&Billy быстро',
'Marlow&Billy напиваюсь'
]


let songIndex = 0


function loadSong(song){
    title.innerHTML = song 
    audio.src = `audio/${song}.mp3`
    cover.src = `img/cover${songIndex + 1}.jpg`
}

loadSong(songs[songIndex])



function playSong() {
    player.classList.add('play')
    imgSrc.src = './img/pause.svg'
    audio.play()
}
function pauseSong() {
    player.classList.remove('play')
    imgSrc.src = './img/play.svg'
    audio.pause()
}
playBtn.addEventListener('click',() => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying){
        pauseSong()
    } else {
        playSong()
    }
})
// songs
function nextSong() {
    songIndex++

    if (songIndex > songs.length -1 ){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}
nextBtn.addEventListener('click', nextSong)
function prevSong(){
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSong)
//progress
function updateProgress(e)
{
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration)* 100
    progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

//set progress
function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
    
}
progressContainer.addEventListener('click', setProgress)
//autoplay
audio.addEventListener('ended', nextSong)
var muteButton = document.getElementById('video-hudmute');
var volumeScale = document.getElementById('video-hudvolume');
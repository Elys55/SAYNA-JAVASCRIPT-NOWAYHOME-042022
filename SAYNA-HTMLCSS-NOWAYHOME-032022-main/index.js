//Effet de survol sur les bouttons
//on recupère tous les boutons

const bouttons = document.getElementsByClassName('btn');


for(let i = 0; i < bouttons.length ; i++) {
    let btn = bouttons[i];
    btn.addEventListener('mouseover', function () { // Lorsqu'on survole le boutton
       let bg = window.getComputedStyle(btn).getPropertyValue('background-color');
        if(bg === 'rgb(255, 255, 255)') { // si bg est blanc, 
            btn.style.background = 'inherit'; // on change le bg en inherit
            btn.style.color = 'white'; // on change la couleur du texte en blanc
            btn.style.borderColor = 'white'; // on change les bordures en blanc
            btn.style.fontWeight = '600'; // on change le texte en plus épais
            btn.classList.add('surbrillance'); // il y a une effet de surbrillace
            
        } else {
            btn.style.background = 'white';
            btn.style.color = '#b11313';
            btn.style.fontWeight = '600';
            btn.classList.add('surbrillance');
        }

    })
    btn.addEventListener('mouseout', function () { // lorsque le survole est passé, on revient à la sitution de base
       let bg = window.getComputedStyle(btn).getPropertyValue('background-color');
        if(bg === 'rgb(255, 255, 255)') {
            btn.style.background = 'inherit';
            btn.style.color = 'white';
            btn.style.borderColor = 'white';
            btn.style.fontWeight = '400';
            btn.classList.remove('surbrillance');
        } else {
            btn.style.background = 'white';
            btn.style.color = '#b11313';
            btn.style.fontWeight = '400';
            btn.classList.remove('surbrillance');
        }

    })

}

// pour toute la ligne
let menu = document.querySelectorAll('li');

menu.forEach(function(li){
    li.addEventListener('mouseover',()=>{
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout',()=>{
        li.style.textDecoration = 'none';
    });
})

// Effet de gauche à droite
$(document).ready(function(){
    $(".box").animate({
        left: '5px',
    },"slow");
    $(".description").fadeIn(5000);
})
// Formulaire
const news = document.getElementById('news');
const costume = document.getElementById('costume');
const popUp = document.getElementsByClassName('pop-up');
const popUp1 = popUp[0];
const popUp2 = popUp[1];
const annuler = document.getElementsByClassName('annuler');
const annuler1 = annuler[0];
const annuler2 = annuler[1];
// bouton deviens spiderman
costume.addEventListener('submit', function (e) {
    e.preventDefault();
    costume.classList.add('none');
    popUp1.classList.add('block');
})
annuler1.addEventListener('click', function () {
    popUp1.classList.remove('block');
    costume.classList.remove('none');
})

// bouton newletters
news.addEventListener('submit', function (e) {
    e.preventDefault();
    news.classList.add('none');
    popUp2.classList.add('block');
})


annuler2.addEventListener('click', function () {
    popUp2.classList.remove('block');
    news.classList.remove('none');
})
// effet zoom sur les images

const  imgSpider =  document.getElementsByClassName('card-img-top');


for(let i = 0; i < imgSpider.length; i++) {
    let spider = imgSpider[i];
    spider.addEventListener('mouseover', function () {
       spider.classList.add('scale');
       
       
    })
}
for(let i = 0; i < imgSpider.length; i++) {
    let spider = imgSpider[i];
    spider.addEventListener('mouseout', function () {
       spider.classList.remove('scale');
    })
}


// survole footer media
let footericones = document.getElementsByClassName('footer-icones');
for (let i=0; i<footericones.length; i++){
    footericones[i].addEventListener('mouseover',()=>{
    footericones[i].style.color = 'white';
    footericones[i].style.backgroundColor = '#b11313'
    });
    footericones[i].addEventListener('mouseout',()=>{
        footericones[i].style.color = 'black';
    });
}


   // Audio content
   let heart = document.getElementById('heart');
   heart.addEventListener('click', myFav);

   function myFav() {
       if (heart.innerHTML == '<i class="fa-regular fa-heart"></i>') {
           heart.innerHTML = '<i class="fa-solid fa-heart">'
       } else { heart.innerHTML = '<i class="fa-regular fa-heart"></i>' }

   }

   const playButton = document.querySelector('#play');
   const prevButton = document.querySelector('#prev');
   const nextButton = document.querySelector('#next');
   const status = document.querySelector('.status');
   const title = document.querySelector('.title');
   const audio = document.querySelector('#audio');
   const progress = document.querySelector('.progress');
   const progressContainer = document.querySelector('.progress-container');
   const songs = ['What\'s up danger'];
   let songIndex = 0;
   loadSong(songs[songIndex])

   function loadSong(song) {
       title.innerText = song
       audio.src = `./assets/audio/${song}.mp3`
   }

   function playSong() {
       playButton.innerHTML = '<i class="fa-solid fa-play"></i>'
       status.innerHTML = ''
       audio.pause()
   }

   function pauseSong() {
       playButton.innerHTML = '<i class="fa-solid fa-pause"></i>'
       status.innerHTML = 'Now Playing'
       audio.play()
   }

   playButton.addEventListener('click', () => {
       const nowPlaying = playButton.innerHTML == '<i class="fa-solid fa-play"></i>';


       if (nowPlaying) {
           pauseSong()
       } else {
           playSong()

       }
   })
   prevButton.addEventListener('click', prevSong)
   nextButton.addEventListener('click', nextSong)

   function prevSong() {
       songIndex--
       if (songIndex < 0) {
           songIndex = songs.length - 1
       }
       loadSong(songs[songIndex])
       playSong()
   }

   function nextSong() {
       songIndex++
       if (songIndex > songs.length - 1) {
           songIndex = 0
       }
       loadSong(songs[songIndex])
       playSong()
   }
   audio.addEventListener('timeupdate', updateProgress)

   function updateProgress(e) {
       const { duration, currentTime } = e.srcElement;
       const progressPercent = (currentTime / duration) * 100;
       progress.style.width = `${progressPercent}%`;
   }
   progressContainer.addEventListener('click', setProgress)

   function setProgress(e) {
       const width = this.clientWidth
       const clickX = e.offsetX
       const duration = audio.duration
       audio.currentTime = (clickX / width) * duration
   }


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


var countDownDate = new Date("May 5, 2022 08:00:00").getTime();
    

var x = setInterval(function() {
    
// date d'aujourd'hui
var now = new Date().getTime();
    
// distance
var distance = countDownDate - now;
    
// calculation du jour
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
minutes + "m " + seconds + "s ";
    
// quand le temp est compté
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Expired";
}
}, 1000);
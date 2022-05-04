// effet zoom sur les images

const  imgSpider =  document.getElementsByClassName('avengers-img');


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
// survole footer media
let footericones = document.getElementsByClassName('footer-icones');
for (let i=0; i<footericones.length; i++){
    footericones[i].addEventListener('mouseover',()=>{
    footericones[i].style.color = 'white';
    footericones[i].style.backgroundColor = '#114c92'
    });
    footericones[i].addEventListener('mouseout',()=>{
        footericones[i].style.color = 'black';
    });
}
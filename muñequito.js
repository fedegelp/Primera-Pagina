document.addEventListener('DOMContentLoaded', () => {
const muñe = document.querySelector('.character');
let bottom = 0;
let gravity = 0.9;
let isJumping = false;
let isGoingLeft= false;
let isGoingRight= false;
let left = 0;
let rightTimerId
let leftTimerId
let keysPressed = {};
let ssjgodd= false;
let gokussj1= false;
let gokudb = false;
let gokufase0 = true;
let tauntt = false;
let gokussj3xd = false;

function jump(){
    if (isJumping) return;
    muñe.classList.add('character')
    let timerUpId = setInterval(function (){
     if (bottom > 250) {
        clearInterval(timerUpId)
            let timerDownId = setInterval(function(){
                if (bottom < 0) {
                    clearInterval(timerDownId)
                    isJumping= false;
                }
             bottom-=5
             bottom = bottom * gravity
             muñe.style.bottom = bottom + 'px'
           },20)
     }
     //    jump up
    isJumping = true;
    bottom += 30;
    bottom = bottom * gravity;
    muñe.style.bottom = bottom + 'px'
    },20)    // invoca el codigo cada 20 milisegundos hasta q el timer id se clearee
}
function down(){
    if (isJumping) return;
    muñe.classList.remove('character-slide');
    muñe.classList.remove('character-slide-left');
    muñe.classList.add('character');
    bottom = 0
    if (slideLeft){
        clearInterval(leftTimerId);
    } else if (slideRight){
        clearInterval(rightTimerId);
    }
    
}
function reset(){
    if (left != 0){
        left = 0
    } 
    muñe.style.left = left + 'px'
    muñe.classList.remove('character-slide');
    muñe.classList.remove('character-slide-left');
    muñe.classList.add('character');
}

function slideLeft(){
    if (left <= 0) return;
        muñe.classList.add('character-slide-left');
        muñe.classList.remove('character');
        muñe.classList.remove('character-slide');
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    if (ssjgodd === true){
        muñe.classList.add('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokussj1 === true){
        muñe.classList.add('ssjgokuleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokudb === true){
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.add('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokufase0 === true) {
        muñe.classList.remove('character-slide')
        muñe.classList.add('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokussj3xd === true){
        muñe.classList.add('gokussj3left')
        muñe.classList.remove('gokussj3right')
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
    }
    if (isGoingRight){
        clearInterval(rightTimerId);
        isGoingRight = false;
    }else if (slideLeft){
        clearInterval(leftTimerId);
    } else if (slideLeft) return;
    isGoingLeft = true
    left -= 12
    muñe.style.left = left + 'px'
/*      leftTimerId = setInterval(function(){
        console.log('going left')
    left -= 12
    muñe.style.left = left + 'px'
    },30); */
}
function slideRight(){
    if (left > document.body.offsetWidth - 168) return;
    if (ssjgodd === true){
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.add('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokussj1 === true){
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.add('ssjgokuright')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokudb === true){
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.add('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
    } else if (gokufase0 === true)  {  
        muñe.classList.add('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('ssjgokuleft')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')

        } else if (gokussj3xd === true){
            muñe.classList.remove('character-slide')
            muñe.classList.remove('character-slide-left');
            muñe.classList.remove('character')
            muñe.classList.remove('ssjgodright')
            muñe.classList.remove('ssjgodleft')
            muñe.classList.remove('ssjgokuright')
            muñe.classList.remove('ssjgokuleft')
            muñe.classList.remove('gokuchiquitoright')
            muñe.classList.remove('gokuchiquitoleft')
            muñe.classList.remove('gokuchiquitotaunt')
            muñe.classList.remove('gokuvolandoright')
            muñe.classList.remove('gokuvolandoleft')
            muñe.classList.remove('gokussj3left')
            muñe.classList.add('gokussj3right')
        }

    if (isGoingLeft){
        clearInterval(leftTimerId);
        isGoingLeft = false;
    }else if (slideRight){
        clearInterval(rightTimerId);
    }
    isGoingRight = true
    left += 12
    muñe.style.left = left + 'px'
}
function ssjgod(){
    console.log('GOKU SSJ GOD')
    muñe.classList.remove('character-slide')
    muñe.classList.remove('character-slide-left');
    muñe.classList.remove('character')
    muñe.classList.remove('ssjgodleft')
    muñe.classList.add('ssjgodright')
    muñe.classList.remove('ssjgokuright')
    muñe.classList.remove('gokuchiquitoright')
    muñe.classList.remove('gokuchiquitoleft')
    muñe.classList.remove('gokuchiquitotaunt')
    muñe.classList.remove('gokuvolandoright')
    muñe.classList.remove('gokuvolandoleft')
    muñe.classList.remove('gokussj3left')
    muñe.classList.remove('gokussj3right')
    ssjgodd = true;
    gokussj1 = false;
    gokudb = false;
    gokufase0 = false;
    gokussj3xd = false;
}
function gokunormal(){
    console.log('GOKU')
    muñe.classList.remove('character-slide')
    muñe.classList.remove('character-slide-left');
    muñe.classList.add('character')
    muñe.classList.remove('ssjgodright')
    muñe.classList.remove('ssjgodleft')
    muñe.classList.remove('ssjgokuright')
    muñe.classList.remove('gokuchiquitoright')
    muñe.classList.remove('gokuchiquitoleft')
    muñe.classList.remove('gokuchiquitotaunt')
    muñe.classList.remove('gokuvolandoright')
    muñe.classList.remove('gokuvolandoleft')
    muñe.classList.remove('gokussj3left')
    muñe.classList.remove('gokussj3right')
    ssjgodd = false;
    gokussj1 = false;
    gokudb = false;
    gokufase0 = true;
    gokussj3xd = false;
}
function gokussj(){
    console.log('GOKU SUPER SAIYAN 1')
    muñe.classList.remove('character-slide')
    muñe.classList.remove('character-slide-left');
    muñe.classList.remove('character')
    muñe.classList.remove('ssjgodright')
    muñe.classList.remove('ssjgodleft')
    muñe.classList.add('ssjgokuright')
    muñe.classList.remove('gokuchiquitoright')
    muñe.classList.remove('gokuchiquitoleft')
    muñe.classList.remove('gokuchiquitotaunt')
    muñe.classList.remove('gokuvolandoright')
    muñe.classList.remove('gokuvolandoleft')
    muñe.classList.remove('gokussj3left')
    muñe.classList.remove('gokussj3right')
    gokussj1 = true;
    ssjgodd = false;
    gokudb = false;
    gokufase0 = false;
    gokussj3xd = false;
}


function gokuchiquito(){
    console.log('GOKU CHIQUITO')
    muñe.classList.remove('character-slide')
    muñe.classList.remove('character-slide-left');
    muñe.classList.remove('character')
    muñe.classList.remove('ssjgodright')
    muñe.classList.remove('ssjgodleft')
    muñe.classList.remove('ssjgokuright')
    muñe.classList.add('gokuchiquitoright')
    muñe.classList.remove('gokuchiquitoleft')
    muñe.classList.remove('gokuchiquitotaunt')
    muñe.classList.remove('gokuvolandoright')
    muñe.classList.remove('gokuvolandoleft')
    muñe.classList.remove('gokussj3left')
    muñe.classList.remove('gokussj3right')
    gokussj1 = false;
    ssjgodd = false;
    gokudb = true;
    gokufase0 = false;
    gokussj3xd = false;
}


function gokussj3(){
console.log('goku ssj 3 pa')
    muñe.classList.remove('character-slide')
    muñe.classList.remove('character-slide-left');
    muñe.classList.remove('character')
    muñe.classList.remove('ssjgodright')
    muñe.classList.remove('ssjgodleft')
    muñe.classList.remove('ssjgokuright')
    muñe.classList.remove('gokuchiquitoright')
    muñe.classList.remove('gokuchiquitoleft')
    muñe.classList.remove('gokuchiquitotaunt')
    muñe.classList.remove('gokuvolandoright')
    muñe.classList.remove('gokuvolandoleft')
    muñe.classList.remove('gokussj3left')
    muñe.classList.add('gokussj3right')
    gokussj3xd = true;
    gokussj1 = false;
    ssjgodd = false;
    gokudb = false;
    gokufase0 = false;
}


function taunt(){
if (tauntt === false && gokufase0 === true) {
    tauntt = true;
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('character')
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokupiumpiumleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
        muñe.classList.add('gokupiumpium')
        console.log('tirito de goku')
} else if (tauntt === true /* && gokufase0 === true */){ 
    gokussj3xd = false;
    gokussj1 = false;
    ssjgodd = false;
    gokudb = false;
    tauntt = false;
    gokufase0 = true;
        muñe.classList.remove('gokupiumpium')
        muñe.classList.remove('character-slide')
        muñe.classList.remove('character-slide-left');
        muñe.classList.remove('ssjgodright')
        muñe.classList.remove('ssjgodleft')
        muñe.classList.remove('ssjgokuright')
        muñe.classList.remove('gokuchiquitoright')
        muñe.classList.remove('gokuchiquitoleft')
        muñe.classList.remove('gokuchiquitotaunt')
        muñe.classList.remove('gokuvolandoright')
        muñe.classList.remove('gokuvolandoleft')
        muñe.classList.remove('gokussj3left')
        muñe.classList.remove('gokussj3right')
        muñe.classList.add('character')
        console.log('ddd')
}
}


// function keycodes
function control(event) {
    keysPressed[event.key] = true;
    // console.log(keysPressed)
    if (event.keyCode === 87){
        jump();
    } else if (event.keyCode === 65){
        slideLeft();
    } else if (event.keyCode === 68){
        slideRight();
    } else if (event.keyCode === 83){
        down();
    } else if (event.keyCode === 82){
        reset();
    } else if (keysPressed['j'] && event.key == 'u') {
            jump();
            slideRight();
            console.log('asdas')
    } else if (event.keyCode === 53){
        ssjgod();
    } else if (event.keyCode === 49){
        gokunormal();
    } else if (event.keyCode === 50){
        gokussj();
    } else if (event.keyCode === 48){
        gokuchiquito();
    } else if (event.keyCode === 78){
        taunt();
    } else if (event.keyCode === 51  && tauntt === false){
        gokussj3();
    }
}
document.addEventListener('keydown', control) ;

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});
})
const slideselected = document.querySelector('.selected')
const imgselected = document.querySelectorAll('.selected img')
// botones
const prevbtn = document.querySelector('#prevbtn');
const nextbtn = document.querySelector('#nextbtn');
//

// contador
let counter = 1;
const size = imgselected[0].clientWidth;

slideselected.style.transform = 'translateX(' + (-size * counter) + 'px)';
//
nextbtn.addEventListener('click' , () => {
    if (counter >= imgselected.length-1) return;
    slideselected.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideselected.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


prevbtn.addEventListener('click' , () => {
    if (counter <= 0) return;
        slideselected.style.transition = "transform 0.4s ease-in-out";
        counter--;
        slideselected.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
slideselected.addEventListener('transitionend', () => {
    if(imgselected[counter].id === 'lastClone'){
        slideselected.style.transition = "none";
        counter= imgselected.length -2;
        slideselected.style.transform = 'translateX(' + (-size * counter) + 'px)';

    } 
        if(imgselected[counter].id === 'firstClone'){
        slideselected.style.transition = "none";
        counter= imgselected.length - counter;
        slideselected.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
})

//

let slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function personabackgrounds(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("nodisplay");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//
teddieshadowhuman = false;
function teddiehuman(){
    if (teddieshadowhuman === false){
        teddieshadowhuman = true;
        personabackgrounds(10);
    } else if(teddieshadowhuman === true){
        teddieshadowhuman = false;
        personabackgrounds(14)
    }
}
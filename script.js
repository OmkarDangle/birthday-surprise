/*==========================================================
    A Birthday Story ❤️
    script.js - Part 1
==========================================================*/

/*==============================
    EDIT ONLY THESE
==============================*/

const CONFIG = {

    name: "Grecyyy ❤️",

introMessage:
"Someone very special deserves something made with love...",

letterMessage:
`Happy Birthday, Grecyyy! ❤️🎂
I don't know if words can truly express how much I wish for your happiness. 💜
I'm really glad BGMI brought us together because meeting someone as kind and genuine as you is pretty rare. 🧿
May you always find more bots than real enemies, get all the easy kills, grab the best loot, and enjoy endless Chicken Dinners! 😂🏆
And one more thing... never stop laughing. Your laugh is honestly one of the nicest things about you—it always makes me smile. 😊✨
Thank you for existing. ❤️
Happy Birthday! 🎉`,

photoNotes: [

    "This one always makes me smile 😊",

    "One of my favourite memories with you ❤️",

    "You look so happy here 🧿",

    "This moment deserved to be saved forever ✨"

]

};

/*==============================
    ELEMENTS
==============================*/

const loader = document.getElementById("loader");

const progressBar = document.querySelector(".progress-bar");

const music = document.getElementById("music");

const musicBtn = document.getElementById("musicBtn");

const continueBtn = document.getElementById("continueBtn");

const typingText = document.getElementById("typingText");

const personName = document.getElementById("personName");

const finalName = document.getElementById("finalName");

const endingName = document.getElementById("endingName");

const letterText = document.getElementById("letterText");

const scenes = document.querySelectorAll(".scene");

/*==============================
    INSERT NAME
==============================*/

console.log("personName:", personName);
console.log("finalName:", finalName);
console.log("endingName:", endingName);
console.log("letterText:", letterText);

if (personName) personName.textContent = CONFIG.name;
if (finalName) finalName.textContent = CONFIG.name;
if (endingName) endingName.textContent = CONFIG.name;
if (letterText) letterText.textContent = CONFIG.letterMessage;

/*==============================
    LOADER
==============================*/

let progress = 0;

const loading = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";

    if (progress >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.style.opacity = "0";

            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            }, 800);

        }, 400);

    }

}, 30);

/*==============================
    MUSIC
==============================*/

let musicPlaying = false;

function startMusic() {

    music.play().then(() => {

        musicPlaying = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }).catch(() => {

        console.log("Autoplay blocked.");

    });

}

musicBtn.onclick = () => {

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

    }

    else {

        music.play();

        musicPlaying = true;

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }

};

/*==============================
    VOLUME UP / DOWN
==============================*/

const volUpBtn = document.getElementById("volUpBtn");

const volDownBtn = document.getElementById("volDownBtn");

music.volume = 1;

function updateVolumeIcon() {

    if (!musicPlaying) return;

    if (music.volume === 0) {

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';

    } else if (music.volume < 0.5) {

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-low"></i>';

    } else {

        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-high"></i>';

    }

}

volUpBtn.addEventListener("click", () => {

    music.volume = Math.min(1, +(music.volume + 0.1).toFixed(2));

    updateVolumeIcon();

});

volDownBtn.addEventListener("click", () => {

    music.volume = Math.max(0, +(music.volume - 0.1).toFixed(2));

    updateVolumeIcon();

});

/*==============================
    TYPING EFFECT
==============================*/

let typingIndex = 0;

function typeMessage() {

    if (typingIndex < CONFIG.introMessage.length) {

        typingText.innerHTML +=
        CONFIG.introMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeMessage, 45);

    }

}

/*==============================
    SCENE SYSTEM
==============================*/

let currentScene = 1;

function showScene(number) {

    scenes.forEach(scene => {

        scene.classList.remove("active");

    });

    document
        .getElementById("scene" + number)
        .classList.add("active");

}

/*==============================
    CONTINUE BUTTON
==============================*/

continueBtn.addEventListener("click", () => {

    currentScene = 2;

    showScene(currentScene);

    typeMessage();

    startMusic();

});

/*==============================
    RANDOM STARS
==============================*/

const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    star.style.animationDelay =
        Math.random() * 5 + "s";

    stars.appendChild(star);

}

/*==============================
    SHOOTING STAR
==============================*/

function createShootingStar() {

    const sky =
    document.getElementById("shooting-stars");

    const star =
    document.createElement("div");

    star.className = "shooting-star";

    star.style.top =
    Math.random() * 40 + "%";

    star.style.left = "-200px";

    sky.appendChild(star);

    setTimeout(() => {

        star.remove();

    }, 3000);

}

setInterval(createShootingStar, 5000);

/*==============================
    SMALL FADE ANIMATION
==============================*/

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});
/*==========================================================
        SCRIPT.JS PART 2
        Interactive Animations
==========================================================*/


/*==============================
        FLOATING HEARTS
==============================*/

const heartContainer = document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=(18+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,450);





/*==============================
        SPARKLES
==============================*/

const sparkleContainer=document.getElementById("sparkles");

function sparkle(x,y){

    const s=document.createElement("div");

    s.className="spark";

    s.style.left=x+"px";

    s.style.top=y+"px";

    sparkleContainer.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },1500);

}

document.addEventListener("mousemove",(e)=>{

    sparkle(e.clientX,e.clientY);

});



/*==============================
        PHOTO GALLERY EFFECT
        Tap 1: photo moves to center
        Tap 2: photo flips to reveal note
        Tap on overlay: closes it back to the grid
==============================*/

const cards=document.querySelectorAll(".card");

const gallery=document.querySelector(".gallery");

const cardOverlay=document.getElementById("cardOverlay");

let activeCard=null;

cards.forEach((card,i)=>{

    const note=card.querySelector(".card-note");

    if(note){

        note.textContent=CONFIG.photoNotes[i] || "";

    }

    card.addEventListener("click",(e)=>{

        e.stopPropagation();

        if(activeCard===null){

            // first tap: bring this photo to the center

            activeCard=card;

            card.classList.add("centered");

            gallery.classList.add("dim");

            cardOverlay.classList.add("active");

        }

        else if(activeCard===card){

            // second tap on the centered photo: flip it

            card.classList.toggle("flipped");

        }

        // taps on other cards while one is centered are ignored

    });

});

function closeCenteredCard(){

    if(!activeCard)return;

    activeCard.classList.remove("centered","flipped");

    activeCard=null;

    gallery.classList.remove("dim");

    cardOverlay.classList.remove("active");

}

cardOverlay.addEventListener("click",closeCenteredCard);



/*==============================
        GIFT BOX
==============================*/

const gift=document.getElementById("giftBox");

gift.addEventListener("click",()=>{

    gift.style.transform=

    "scale(1.3) rotate(20deg)";

    gift.innerHTML="✨";

    confetti({

        particleCount:250,

        spread:180,

        origin:{y:0.6}

    });

    setTimeout(()=>{

        currentScene=5;

        showScene(currentScene);

    },1800);

});



/*==============================
        LETTER OPENING
==============================*/

document.querySelectorAll(".next").forEach(button=>{

    button.addEventListener("click",()=>{

        currentScene++;

        showScene(currentScene);

    });

});



/*==============================
        AUTO PHOTO ANIMATION
==============================*/

let currentPhoto=0;

setInterval(()=>{

    if(activeCard)return;

    cards.forEach(card=>{

        card.style.opacity=".4";

    });

    cards[currentPhoto].style.opacity="1";

    cards[currentPhoto].style.transform=

    "scale(1.05)";

    setTimeout(()=>{

        cards[currentPhoto].style.transform="";

    },1200);

    currentPhoto++;

    if(currentPhoto>=cards.length){

        currentPhoto=0;

    }

},2500);



/*==============================
        SMALL CONFETTI
==============================*/

function tinyConfetti(){

    confetti({

        particleCount:2,

        spread:70,

        startVelocity:20,

        origin:{

            x:Math.random(),

            y:Math.random()

        }

    });

}

setInterval(tinyConfetti,6000);



/*==============================
        RANDOM GLOW
==============================*/

const randomGlowInterval=setInterval(()=>{

    const bg=document.querySelector(".background");

    if(!bg)return;

    bg.style.filter=

    "brightness(1.03)";

    setTimeout(()=>{

        bg.style.filter="";

    },250);

},4000);

/*==========================================================
        SCRIPT.JS PART 3
        Cake • Fireworks • Petals • Ending
==========================================================*/


/*==============================
        CAKE CLICK
==============================*/

const cake=document.getElementById("cake");

function stopFinalSceneLoops(){

    clearInterval(randomGlowInterval);

    clearInterval(backgroundGlowInterval);

    const bg=document.querySelector(".background");

    if(bg)bg.style.filter="";

}

cake.addEventListener("click",()=>{

    startFireworks();

    launchCelebration();

    setTimeout(()=>{

        currentScene=7;

        showScene(currentScene);

        stopFinalSceneLoops();

    },4000);

});


/*==============================
        BIG FIREWORKS
==============================*/

function startFireworks(){

    const duration=6000;

    const animationEnd=Date.now()+duration;

    const defaults={

        startVelocity:35,

        spread:360,

        ticks:90,

        zIndex:9999

    };

    const interval=setInterval(()=>{

        const timeLeft=animationEnd-Date.now();

        if(timeLeft<=0){

            clearInterval(interval);

            return;

        }

        const particleCount=80;

        confetti({

            ...defaults,

            particleCount,

            origin:{

                x:Math.random(),

                y:Math.random()*0.6

            }

        });

    },250);

}


/*==============================
        CELEBRATION
==============================*/

function launchCelebration(){

    confetti({

        particleCount:300,

        spread:180,

        origin:{y:0.6}

    });

}


/*==============================
        FLOWER PETALS
==============================*/

const FLOWER_TYPES=["🌷","🌸","🪻","💐"];

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML=

    FLOWER_TYPES[Math.floor(Math.random()*FLOWER_TYPES.length)];

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-50px";

    petal.style.fontSize=(18+Math.random()*18)+"px";

    petal.style.zIndex="999";

    petal.style.pointerEvents="none";

    petal.style.transition="transform 10s linear";

    document.body.appendChild(petal);

    requestAnimationFrame(()=>{

        petal.style.transform=

        `translateY(${window.innerHeight+200}px)
         rotate(${Math.random()*720}deg)`;

    });

    setTimeout(()=>{

        petal.remove();

    },10000);

}

// 👇 To change how many flowers fall: lower this number = more flowers, higher = fewer.
// (this is the delay in milliseconds between each flower spawning)
setInterval(createPetal, 500);


/*==============================
        LETTER TYPING
==============================*/

const fullLetter=CONFIG.letterMessage;

let letterIndex=0;

function typeLetter(){

    if(!letterText)return;

    letterText.innerHTML="";

    letterIndex=0;

    const timer=setInterval(()=>{

        if(letterIndex>=fullLetter.length){

            clearInterval(timer);

            return;

        }

        letterText.innerHTML+=

        fullLetter.charAt(letterIndex);

        letterIndex++;

    },30);

}

document.querySelectorAll(".next").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentScene===5){

            typeLetter();

        }

    });

});


/*==============================
        TOUCH HEARTS
==============================*/

document.addEventListener("click",(e)=>{

    for(let i=0;i<10;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤";

        heart.className="heart";

        heart.style.left=e.clientX+"px";

        heart.style.top=e.clientY+"px";

        heart.style.position="fixed";

        heart.style.fontSize=(16+Math.random()*20)+"px";

        heart.style.color="#ff4da6";

        heart.style.pointerEvents="none";

        heart.style.transition="2s ease-out";

        document.body.appendChild(heart);

        requestAnimationFrame(()=>{

            heart.style.transform=

            `translate(${(Math.random()-0.5)*250}px,
                    ${-250-Math.random()*120}px)
            scale(${1+Math.random()})`;

            heart.style.opacity="0";

        });

        setTimeout(()=>{

            heart.remove();

        },2000);

    }

});


/*==============================
        ENDING MESSAGE
==============================*/

function showEnding(){

    currentScene=8;

    document.querySelectorAll(".scene").forEach(scene=>{

        scene.classList.remove("active");

    });

    document.getElementById("ending")
    .classList.add("active");

}

setTimeout(()=>{

    if(currentScene===7){

        showEnding();

    }

},15000);


/*==============================
        BACKGROUND GLOW
==============================*/

const backgroundGlowInterval=setInterval(()=>{

    const bg=document.querySelector(".background");

    if(!bg)return;

    bg.animate(

    [

        {filter:"brightness(1)"},

        {filter:"brightness(1.08)"},

        {filter:"brightness(1)"}

    ],

    {

        duration:2500

    });

},5000);


/*==============================
        RANDOM STAR FLASH
==============================*/

setInterval(()=>{

    const stars=document.querySelectorAll(".star");

    if(stars.length===0)return;

    const star=

    stars[Math.floor(Math.random()*stars.length)];

    star.animate(

    [

        {transform:"scale(1)"},

        {transform:"scale(3)"},

        {transform:"scale(1)"}

    ],

    {

        duration:700

    });

},350);
const scene2Next = document.getElementById("scene2Next");

if (scene2Next) {

    scene2Next.addEventListener("click", () => {

        currentScene = 3;

        showScene(currentScene);

    });

}
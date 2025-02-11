let gameSeq = [];  //empty
let userSeq = [];  // empty

let btns = ["red", "green", "purple", "yellow"];

let started = false;
let level = 0;   // initial level

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {  // to start the game
    if (started == false) {
        console.log("Game is Started");
        started = true;

        levelUp();
    }
});
function btnflash(btn) {    
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}
function userflash(btn) {   
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 200);
}


function levelUp() { // level ko aage badhane  ke liye
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3); 
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(` idx : ${randIdx} , color : ${randColor} , btn : ${randBtn}`);

    gameSeq.push(randColor);
    console. log(gameSeq);
    //random btn choose
    btnflash(randBtn);
}

function checkAns(idx){   // ans check karne ke liye
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 800);
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b><br>Press Any key To Start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        } ,100);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let Allbtn = document.querySelectorAll(".btn");
for (btn of Allbtn) {
    btn.addEventListener("click", btnpress);
}
function reset(){ // to restart the game
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


var timer=60;
var score = 0;
var hitrn = 0;

function makeBubble(){
    var clutter = " ";
    for(var i=1;i<=160;i++){
        clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }
    document.querySelector(".pbtm").innerHTML=clutter;
}

function runTimer(){
    var timeInt=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent= timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector(".pbtm")
            .innerHTML =
            `<div>
                <h1> Game Over </h1>
                <h2> Final Score ${score}
            </div>`;
        }
        
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}
 
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;

}

document.querySelector(".pbtm").addEventListener("click",function (dets) {
    var clickedNum = Number(dets.target.textContent);
    if (hitrn === clickedNum){
        increaseScore();
        getNewHit();
        makeBubble();
        
    }
})

getNewHit();
runTimer();
makeBubble();
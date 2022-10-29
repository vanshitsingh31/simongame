var seq = [];
var userSeq = [];
var j = 0
var number = 0;
var title =  document.querySelector("#level-title");
var level = 0;

function generate() {
    var seqVar = document.getElementsByClassName("btn")[number]; //selects the button from random generated number.
    
    //generated no. for box and push
    number = Math.floor(Math.random()*4);
    seq.push(seqVar.getAttribute("id"));

    // highlights the random box
    seqVar.classList.add("sample");
    setTimeout ( function() {
        seqVar.classList.remove("sample") 
    } , 1000)
    title.innerHTML = "Level "+level;
    level++;
}

//runs after clicks, checks both lists for same values, continues or restarts according to situation.
function checking() {
    for (j = 0; j < userSeq.length; j++) {
        if(seq[j]!=userSeq[j]){
            userSeq=[];
            console.log("fail");
            title.innerHTML = "Game Over, Press Any Key to Restart";
            level = 0;
            break 
        }
        else if (seq.length == userSeq.length) {
            userSeq = [];
            generate();
        }
    }
}

//Start of game
//adds click events to every button
document.addEventListener("keypress", function(event){
    console.log(event);
    if (event.key == "a") {
        seq = [];
        userSeq = [];
        generate();
    }
    else{
        title.innerHTML = "Press A Key to Start";
        seq = [];
        userSeq = [];
    }
})

for (var i = 0; i <= document.querySelectorAll(".btn").length; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){ 
        userSeq.push(this.getAttribute("id")); 
        console.log(userSeq); 
        checking(); 
    })
    
}




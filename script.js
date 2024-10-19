
const player1={
    button: document.getElementById('p1Button'),
    content: document.getElementById('p1Score'),
    score:0
}

const player2={
    button:document.getElementById('p2Button'),
    content: document.getElementById('p2Score'),
    score: 0
}

let Gameover=false;
let target=0;
const winningScore= document.getElementById('playto');
const resetButton=document.getElementById('resetButton');


function updateScore(player,opponent){
    if(!Gameover){
        player.score+=1;
        if(player.score===target){
            Gameover=true;
            player.content.classList.add('has-text-success');
            opponent.content.classList.add('has-text-danger');
            player.button.disabled=true;
            opponent.button.disabled=true;
        }
       player.content.textContent=player.score;           
    }   
}
player1.button.addEventListener('click',function(){
    updateScore(player1,player2);
});

player2.button.addEventListener('click',function(){
    updateScore(player2,player1);
 });


 winningScore.addEventListener('change',function(){
    target=parseInt(this.value);
    reset();

 })

 resetButton.addEventListener('click',reset)


function reset(){
    Gameover=false;
    for (let p of [player1,player2]){
        p.score=0;
        p.content.textContent=0;
        p.content.classList.remove('has-text-success','has-text-danger');
        p.button.disabled=false;
    }
 };


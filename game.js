
var allCards = document.querySelectorAll('.card');
var flippedCards = []; //this will store flipped cards.
var matchedCards = []; //stores the matched cards.
for (i = 0; i < allCards.length; i++){
    
}


$('.card').on('click',checkIfFlip);
function checkIfFlip(){
    console.log(this);
    if (matchedCards.includes(this.id)){
        return; //do nothing if the card has already been matched
    }
    else{
        flip(this); //flip the current card if there has been no flipped cards yet OR if only one card has been flipped.
    }
    if (flippedCards.length === 0){
        flippedCards.push(this.id); //add the id of the clicked card to the array
    }
    else{
        var cardOne = flippedCards.pop();
        var cardTwo = this.id;
        if (document.getElementById(cardOne).className === document.getElementById(cardTwo).className){
            playSound('correct');
            matchedCards.push(cardOne);
            matchedCards.push(cardTwo);
        }
        else {
            playSound('wrong');
            setTimeout(function(){
                flipBack(cardOne);
                flipBack(cardTwo);
            },1000);
        }
    }

    if (matchedCards.length === allCards.length){
        $('h1').text('You have beat the game!');
    }
    

}
function playSound(action){
    if (action === 'correct'){
        var audio = new Audio('audio/Correct Answer sound effect.mp3');
        audio.play();
    }
    else if (action === 'wrong'){
        var audio = new Audio('audio/Wrong Answer Sound effect.mp3');
        audio.play();
    }
    else{
        var audio = new Audio('audio/Congratulations clapping and cheering video of applause sound effects with fireworks.mp3');
        audio.play();
    }
}
function flipBack(id){
    document.getElementById(id).classList.remove('flipped');
    document.getElementById(id).querySelector('img').setAttribute('src','images/question-mark.png');
    

}
function flip(element){
    var classes = element.classList;
    if (element.querySelector('img').getAttribute('src') === 'images/question-mark.png'){
        var imageLink = "images/"+classes[1]+".png";
        classes.add('flipped');
        element.querySelector('img').setAttribute('src',imageLink);
    }
}

function winningScreen(){
    playSound('winner');
    $('h1').css('font-size','70pt');
    $('container').html('<video controls><source src="media/congratulations.gif" type="video/mp4" />');

}
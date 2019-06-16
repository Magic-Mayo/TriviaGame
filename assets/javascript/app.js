window.onload = function(){
    // assignTrue();
}

trivia = {
    questions: ['Who shot Ron?', 'What is the objective of the game Cones of Dunshire?'],
    correctAnswers: ['Tom', 'Nothing'],
    incorrectAnswers: [{
        Ron: ['Leslie', 'Jerry', 'Andy'], 
        Cones: []
    
    }]
}

let rndAnswer = []
let answers = []

function assignTrue(){
    // const a = $(this).data('right')
    for (i in trivia.correctAnswers){
        $(this).attr('id', 'true')
    }
}

function getAnswers(){
    const tmp = trivia.incorrectAnswers[0].Ron.slice(trivia.incorrectAnswers[0].Ron);
    
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * tmp.length);
        const rmv = tmp.splice(index, 1);
        answers.push(rmv[0]);
    }
    answers.push(trivia.correctAnswers[0]);
}

function rndChoice(){
    getAnswers();
    const tmp2 = answers.slice(answers);
    for (let j = 0; j < 4; j++){
        const index = Math.floor(Math.random() * tmp2.length);
        const rmv = tmp2.splice(index, 1);
        rndAnswer.push(rmv[0]);
    }
    assignTrue()
}
rndChoice();

function writeAnswers(){
    for (let i = 0; i < rndAnswer.length; i++){
        $('.answers').append('<div class="row">' + rndAnswer[i] + '</div>')
    }
}

$('.answers').on('click', function(){
    if ($(this).data('right')){
        console.log('this')
    }
})
console.log(rndAnswer)
writeAnswers();
// Set interval and loop for cycling thru quotes

// 
window.onload = function(){

}

trivia = {
    questions: ['Who shot Ron?', 'What is the objective of the game Cones of Dunshire?'],
    correctAnswers: ['Tom', 'Nothing'],
    incorrectAnswers: [{
        Ron: ['Leslie', 'Jerry', 'Andy']}, {
        Cones: []},

    
    ]
}

let rndAnswer = []
let answers = []
const rightAnswer = $('.btn').attr('id', 'true');
function assignTrue(){
    for (let i = 0; i < trivia.correctAnswers; i++){
        rightAnswer.addClass(trivia.correctAnswers[i]);
        console.log(rightAnswer)
    }
}
assignTrue();

function rndChoices(){
    for (i in trivia.incorrectAnswers[0] && trivia.correctAnswers[0])
    answers.push(trivia.incorrectAnswers[0].Ron[i]);
    answers.push(trivia.correctAnswers[0]);
    const tmp2 = answers.slice(answers);
    for (let j = 0; j < 4; j++){
        const index = Math.floor(Math.random() * tmp2.length);
        const rmv = tmp2.splice(index, 1);
        rndAnswer.push(rmv[0]);
    }
}
rndChoices();

function writeAnswers(){
    for (let i = 0; i < rndAnswer.length; i++){
        console.log(trivia.correctAnswers)
        console.log(trivia.correctAnswers.includes(String(rndAnswer[i])))
        if (!trivia.correctAnswers.includes(String(rndAnswer[i]))){
            $('.answers').append('<div class="row"><button type="button" class="btn">' + rndAnswer[i] + '</button></div>')
        }
        if (trivia.correctAnswers.includes(String(rndAnswer[i]))){
            $('.answers').append('<div class="row true"><button type="button" class="btn">' + rndAnswer[i] + '</button></div>')
        }
    }
}
writeAnswers();

$('.true').on('click', function(){
        console.log('this')
})
console.log(rndAnswer)
// Set interval and loop for cycling thru quotes

// 
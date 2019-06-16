window.onload = function(){

}

const trivia = [{
    question: 'Who shot Ron?',
    answers: ['Tom', 'Leslie', 'Jerry', 'Andy'],
    correctAnswer: 'Tom'},{

    question: 'What is the objective of the game Cones of Dunshire?',
    answers: [],
    correctAnswer: ''},{
        
    question: 'Where was Leslie Knope born?',
    answers: [],
    correctAnswer: 'Eagleton'},{

    question: 'What is Leslie\'s middle name?',
    answers: [],
    correctAnswer: 'Barbara'},{

    question: 'Where did Andy live after he broke up with Ann?',
    answers: [],
    correctAnswer: 'The pit'},{

    question: 'How many albums did Duke Silver release?',
    answers: [],
    correctAnswer: ''},{

    question: 'Who is Pawnee\'s town mascot?',
    answers: [],
    correctAnswer: 'Lil\' Sebastian'},{

    question: 'Tom\'s ex-wife',
    answers: [],
    correctAnswer: ''},{

    question: 'What do you do if you\'re feeling down?',
    answers: [],
    correctAnswer: 'Treat yo\' self'},{

    question: '',
    answers: [],
    correctAnswer: ''}]

const parksRec = {
    triviaQ: trivia,
    question: 0,
    qCount: 10,
    rightAnswer: 0,
    wrongAnswer: 0,
    timeOut: 0,

    trivQs: function(){
        setInterval(parksRec.qCount, 1000)
        $('.question').html('<h2>' + parksRec.question)
        for (i in trivia[parksRec.triviaQ].answers.length){
            $('.answer').append('<button class="btn" type="button">' + trivia[parksRec.triviaQ].answers[i] + '</button>')
        }
    },

    nextQ: function(){
        this.question++;

    },

    correct: function(){
        if ($(this).on('click') == trivia[parksRec.question].correctAnswer){
            $('.show').html('Great!');
        }
        else {
            parksRec.incorrect;
        }
        clearInterval()
    },

    incorrect: function(){
        $('.show').html('<h1>Knope!</h1>');
    },

    timeUp: function(){
        if (this.qCount <= 0){
            $('.show').html('<h1>You ran out of time!</h1>')
            this.trivQs;
        }
    },

    gameClock: function(){
        qCount--;

    }
}
$('.true').on('click', function(){
        console.log('this')
})
// Set interval and loop for cycling thru quotes

// 
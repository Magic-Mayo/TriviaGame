$('#start').on('click', function(){
    $('#start').remove();
    $('.welcome').remove();
    parksRec.trivQs();
})

const trivia = [{
    question: 'Who shot Ron?',
    answers: ['Tom', 'Leslie', 'Jerry', 'Andy'],
    correctAnswer: 'Tom'},{

    // question: 'What is the objective of the game Cones of Dunshire?',
    // answers: ['Collect cones by building civilizations', 'Collect cones by defeating other players', 'Collect cones by trading', ''],
    // correctAnswer: 'Collect cones by building civilizations'},{
        
    question: 'Where was Leslie Knope born?',
    answers: ['Pawnee', 'Indianapolis', 'Eagleton', 'Bloomington'],
    correctAnswer: 'Eagleton'},{

    // question: 'What is Leslie\'s middle name?',
    // answers: ['Barbara', 'Ann', ''],
    // correctAnswer: 'Barbara'},{

    question: 'Where did Andy live after he broke up with Ann?',
    answers: ['Ron\'s House', 'City Hall', 'Band Member\'s House', 'Lot 48 pit'],
    correctAnswer: 'Lot 48 pit'},{

    question: 'How many albums did Duke Silver release?',
    answers: ['Six', 'Three', 'Four', 'Two'],
    correctAnswer: 'Three'},{

    question: 'Whose funeral did Andy perform for?',
    answers: ['Li\'l Sebastian', 'Lil Wayne', 'Lil Yachty', 'Lil Dicky'],
    correctAnswer: 'Li\'l Sebastian'},{

    // question: 'What was one of the former names of Andy Dwyer\'s band?',
    // answers: ['Everything rhymes with orange', 'Cat Dog', 'Four Doors Down', ''],
    // correctAnswer: 'Everything rhymes with orange'},{

    // question: 'What do you do if you\'re feeling down?',
    // answers: ['Watch Jerry make a fool of himself', 'Treat yo\' self', 'Go to a Mouse Rat concert', ''],
    // correctAnswer: 'Treat yo\' self'},{

    question: 'What is Ron\'s #3 favorite food?',
    answers: ['Steak','Bacon','Shrimp','Burgers'],
    correctAnswer: 'Shrimp'}]

const parksRec = {
    triviaQ: trivia,
    question: 0,
    qCount: 10,
    rightAnswer: 0,
    wrongAnswer: 0,
    timeOut: 0,
    right: 0,
    wrong: 0,
    
    trivQs: function(){
        time = setInterval(parksRec.gameClock, 1000)
        console.log(trivia[parksRec.question].correctAnswer);
        $('.question').html('<h1>' + trivia[parksRec.question].question + '</h1>')
        $('.clock').html('Time Remaining: 10')
        for (let i = 0; i < trivia[parksRec.question].answers.length; i++){
            $('.question').append('<button class="btn col" type="button">' + trivia[parksRec.question].answers[i] + '</button>')
        }
    },
    
    nextQ: function(){
        parksRec.qCount = 10;
        $('.clock').html('Time Remaining: 10')
        parksRec.question++;
        console.log(parksRec.question)
        parksRec.trivQs();        
    },
    
    chosen: function(){
        clearInterval(time)
        if (event.target.textContent == trivia[parksRec.question].correctAnswer){
            parksRec.correct();
        }
        else {
            parksRec.incorrect();
        }
    },
    
    correct: function(){
        parksRec.right++;
        clearInterval(time);
        console.log(parksRec.question);
        $('.question').empty();
        $('.clock').html('<h1>Great!</h1>');
        if (parksRec.question == trivia.length-1){
            parksRec.endGame();
        }
        else {
            setTimeout(parksRec.nextQ, 3500);
            console.log('right')
        }
    },
    
    incorrect: function(){
        parksRec.wrong++;
        clearInterval(time);
        console.log('wrong')
        $('.question').empty();
        $('.clock').html('<h1>Knope!</h1>');
        if (parksRec.question == trivia.length-1){
            parksRec.endGame();
        }
        else {
            setTimeout(parksRec.nextQ, 3500);
        }
    },
    
    timeUp: function(){
        parksRec.wrong++;
        clearInterval(time);
        $('.question').empty();
        $('.clock').html('<h1>You ran out of time!</h1>');
        if (parksRec.question == trivia.length-1){
            parksRec.endGame();
        }
        else {
            setTimeout(parksRec.nextQ, 3500);
        }
    },
    
    gameClock: function(){
        parksRec.qCount--;
        $('.clock').html('Time Remaining: ' + parksRec.qCount);
        if (parksRec.qCount < 0){
            parksRec.timeUp();
        }
    },

    endGame: function(){
        clearInterval(time);
        $('.content').empty()
        $('.clock').html('<h1>Lot 48 Completed!</h1>');
        $('.clock').append('<h2>Correct: ' + parseInt(parksRec.right) + '</h2>');
        $('.clock').append('<h2>Missed: ' + parseInt(parksRec.wrong) + '</h2');
        setTimeout(function(){
            $('.clock').append('<button class="btn" type="button">Restart Game</button>')
        }, 2000)
    }
}

$(document).on('click', '.question', function(event){
    parksRec.chosen(event);
})
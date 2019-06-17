$('#start').on('click', function(){
    $('#start').remove();
    $('.welcome').remove();
    parksRec.trivQs();
})

const trivia = [{
    question: 'Who shot Ron?',
    answers: ['Tom', 'Leslie', 'Jerry', 'Andy'],
    correctAnswer: 'Tom',
    gif: 'assets/images/apology.gif'},{

    question: 'What is the objective of the game Cones of Dunshire?',
    answers: ['Collect cones by building civilizations', 'Collect cones by defeating other players', 'Collect cones by trading', 'Wear the cone of Dunshire'],
    correctAnswer: 'Collect cones by building civilizations',
    gif: 'assets/images/cones.gif'},{
        
    question: 'Where was Leslie Knope born?',
    answers: ['Pawnee', 'Indianapolis', 'Eagleton', 'Bloomington'],
    correctAnswer: 'Eagleton',
    gif: 'assets/images/eagleton.gif'},{

    question: 'What is Leslie\'s middle name?',
    answers: ['Barbara', 'Susan', 'Elizabeth', 'Grace'],
    correctAnswer: 'Barbara',
    gif: 'assets/images/knope.gif'},{

    question: 'Where did Andy live after he broke up with Ann?',
    answers: ['Ron\'s House', 'City Hall', 'Band Member\'s House', 'Lot 48 pit'],
    correctAnswer: 'Lot 48 pit',
    gif: 'assets/images/pit.gif'},{

    question: 'How many albums did Duke Silver release?',
    answers: ['Six', 'Three', 'Four', 'Two'],
    correctAnswer: 'Three',
    gif: 'assets/images/duke.gif'},{

    question: 'Whose funeral did Andy perform for?',
    answers: ['Li\'l Sebastian', 'Lil Wayne', 'Lil Yachty', 'Lil Dicky'],
    correctAnswer: 'Li\'l Sebastian',
    gif: 'assets/images/sebastian.gif'},{

    question: 'What is one of the former names of Andy\'s band?',
    answers: ['Everything Rhymes with Orange', 'Cat Dog', 'Four Doors Down', 'Coneheads of Dunshire'],
    correctAnswer: 'Everything rhymes with orange',
    gif: 'assets/images/mouserat.gif'},{

    question: 'What do you do if you\'re feeling down?',
    answers: ['Watch Jerry make a fool of himself', 'Treat yo self', 'Go to a Mouse Rat concert', 'Go to JJ\'s diner'],
    correctAnswer: 'Treat yo self',
    gif: 'assets/images/treat.gif'},{

    question: 'What is Ron\'s #3 favorite food?',
    answers: ['Steak','Bacon','Shrimp','Burgers'],
    correctAnswer: 'Shrimp',
    gif: 'assets/images/bacon.gif'}]

const parksRec = {
    triviaQ: trivia,
    question: 0,
    qCount: 10,
    rightAnswer: 0,
    wrongAnswer: 0,
    right: 0,
    wrong: 0,
    
    trivQs: function(){
        time = setInterval(parksRec.gameClock, 1000)
        console.log(trivia[parksRec.question].correctAnswer);
        $('.question').html('<h1>' + trivia[parksRec.question].question + '</h1>')
        $('.clock').html('Time Remaining: 10')
        for (let i = 0; i < trivia[parksRec.question].answers.length; i++){
            $('.question').append('<button class="btn col answer" type="button">' +
            trivia[parksRec.question].answers[i] + '</button>')
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
        $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
        $('.clock').html('<h1>Great job!</h1>');
        if (parksRec.question == trivia.length-1){
            $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
            setTimeout(parksRec.endGame, 4000);
        }
        else {
            setTimeout(parksRec.nextQ, 4000);
            console.log('right')
        }
    },
    
    incorrect: function(){
        parksRec.wrong++;
        clearInterval(time);
        console.log('wrong')
        $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
        $('.clock').html('<h1>Knope! That\'s not right!</h1>');
        if (parksRec.question == trivia.length-1){
            $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
            setTimeout(parksRec.endGame, 4000);
        }
        else {
            setTimeout(parksRec.nextQ, 4000);
        }
    },
    
    timeUp: function(){
        parksRec.wrong++;
        clearInterval(time);
        $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
        $('.clock').html('<h1>You ran out of time!</h1>');
        if (parksRec.question == trivia.length-1){
            $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
            setTimeout(parksRec.endGame, 4000);
        }
        else {
            setTimeout(parksRec.nextQ, 4000);
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
        $('.content').empty();
        $('.clock').html('<h1>Lot 48 Completed!</h1>');
        $('.clock').append('<h2>Correct: ' + parksRec.right + '</h2>');
        $('.clock').append('<h2>Missed: ' + parksRec.wrong + '</h2');
        setTimeout(function(){
            $('.clock').append('<button class="btn restart" type="button">Restart Game</button>')
            $('.clock').append('<img src=assets/images/parksandrec.jpg class="img">');
        }, 2000)
    },

    restart: function(){
        parksRec.question = 0,
        parksRec.rightAnswer = 0,
        parksRec.wrongAnswer = 0,
        parksRec.right = 0,
        parksRec.wrong = 0,
        $('.container').html(`'<h4 class="clock"></h4><div class="content"><h1 class="welcome">\
        Parks and Rec Trivia!!</h1><button class="btn" id="start" type="button">BEGIN</button>\
        <div class="row"><div class="col question"></div></div>'`);
        $('#start').on('click', function(){
            $('#start').remove();
            $('.welcome').remove();
            parksRec.trivQs();
        })
    }
}

$(document).on('click', '.answer', function(event){
    parksRec.chosen(event);
})
$(document).on('click', '.restart', function(event){
    parksRec.restart();
})

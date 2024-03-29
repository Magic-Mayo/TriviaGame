$('#start').on('click', function(){
    $('#start').remove();
    $('.welcome').remove();
    parksRec.trivQs();
    theme.pause()
})

const theme = new Audio('assets/theme.mp3')
window.onload = function(){theme.play()}
const trivia = [{
    question: 'Who shot Ron?',
    answers: ['Tom', 'Leslie', 'Jerry', 'Andy'],
    correctAnswer: 'Tom',
    gif: 'assets/images/apology.gif',
    audio: new Audio('assets/Amazing.mp3')},{

    question: 'What is the objective of the game Cones of Dunshire?',
    answers: ['Collect cones by building civilizations', 'Collect cones by defeating other players', 'Collect cones by trading', 'Wear the cone of Dunshire'],
    correctAnswer: 'Collect cones by building civilizations',
    gif: 'assets/images/cones.gif',
    audio: new Audio('assets/cones.mp3')},{
        
    question: 'Where was Leslie Knope born?',
    answers: ['Pawnee', 'Indianapolis', 'Eagleton', 'Bloomington'],
    correctAnswer: 'Eagleton',
    gif: 'assets/images/eagleton.gif',
    audio: new Audio('assets/Eagleton.mp3')},{

    question: 'What is Leslie\'s middle name?',
    answers: ['Barbara', 'Susan', 'Elizabeth', 'Grace'],
    correctAnswer: 'Barbara',
    gif: 'assets/images/knope.gif',
    audio: new Audio('assets/WTF.mp3')},{

    question: 'Where did Andy live after he broke up with Ann?',
    answers: ['Ron\'s House', 'City Hall', 'Band Member\'s House', 'Lot 48 pit'],
    correctAnswer: 'Lot 48 pit',
    gif: 'assets/images/pit.gif',
    audio: new Audio('assets/FBI.mp3')},{

    question: 'How many albums did Duke Silver release?',
    answers: ['Six', 'Three', 'Four', 'Two'],
    correctAnswer: 'Three',
    gif: 'assets/images/duke.gif',
    audio: new Audio('assets/ron.mp3')},{

    question: 'Whose funeral did Andy perform for?',
    answers: ['Li\'l Sebastian', 'Lil Wayne', 'Lil Yachty', 'Lil Dicky'],
    correctAnswer: 'Li\'l Sebastian',
    gif: 'assets/images/sebastian.gif',
    audio: new Audio('assets/allergic.mp3')},{

    question: 'What is one of the former names of Andy\'s band?',
    answers: ['Everything Rhymes with Orange', 'Cat Dog', 'Four Doors Down', 'Coneheads of Dunshire'],
    correctAnswer: 'Everything Rhymes with Orange',
    gif: 'assets/images/mouserat.gif',
    audio: new Audio('assets/mouserat.mp3')},{

    question: 'What do you do if you\'re feeling down?',
    answers: ['Watch Jerry make a fool of himself', 'Treat yo self', 'Go to a Mouse Rat concert', 'Go to JJ\'s diner'],
    correctAnswer: 'Treat yo self',
    gif: 'assets/images/treat.gif',
    audio: new Audio('assets/treatyoself.mp3')},{

    question: 'What is Ron\'s #3 favorite food?',
    answers: ['Steak','Bacon','Shrimp','Burgers'],
    correctAnswer: 'Shrimp',
    gif: 'assets/images/bacon.gif',
    audio: new Audio('assets/bacon.mp3')}]

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
        $('.question').html('<h1 class="resp-question">' + trivia[parksRec.question].question + '</h1>')
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
        $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
        trivia[parksRec.question].audio.play();
        $('.clock').html('<h1>Great job!</h1>');
        if (parksRec.question == trivia.length-1){
            $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
            setTimeout(parksRec.endGame, 5500);
        }
        else {
            setTimeout(parksRec.nextQ, 5500);
        }
    },
    
    incorrect: function(){
        parksRec.wrong++;
        clearInterval(time);
        $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
        trivia[parksRec.question].audio.play();
        $('.clock').html('<h1>Knope! That\'s not right!</h1>');
        if (parksRec.question == trivia.length-1){
            $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
            setTimeout(parksRec.endGame, 5500);
        }
        else {
            setTimeout(parksRec.nextQ, 5500);
        }
    },
    
    timeUp: function(){
        parksRec.wrong++;
        clearInterval(time);
        $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
        trivia[parksRec.question].audio.play();
        $('.clock').html('<h1>You ran out of time!</h1>');
        if (parksRec.question == trivia.length-1){
            $('.question').html('<img src="' + trivia[parksRec.question].gif + '" class="img-fluid">');
            setTimeout(parksRec.endGame, 5500);
        }
        else {
            setTimeout(parksRec.nextQ, 5500);
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
        $('.clock').html('<h1>Lot 48 Completed!</h1>').css('color', '#ffffff');
        $('.clock').append('<h2>Correct: ' + parksRec.right + '</h2>');
        $('.clock').append('<h2>Missed: ' + parksRec.wrong + '</h2');
        $('body').css("background-image", "url('assets/images/parksandrec.jpg')");
        const regret = new Audio('assets/Regret.mp3');
        regret.play();
        setTimeout(function(){
            $('.clock').append('<button class="btn restart" type="button">Restart Game</button>').css('color', '#ffffff')
        }, 2000)
    },

    restart: function(){
        parksRec.question = 0,
        parksRec.rightAnswer = 0,
        parksRec.wrongAnswer = 0,
        parksRec.right = 0,
        parksRec.wrong = 0,
        rndQuotes.grabQuote(),
        $('.container').html(`'<h4 class="clock"></h4><div class="content"><h1 class="welcome">\
        Parks and Rec Trivia!!</h1><button class="btn" id="start" type="button">BEGIN</button>\
        <div class="row"><div class="col question"></div></div>'`).css('color', '#ffffff'),
        $('#start').on('click', function(){
            $('.clock').css('color', '#000000');
            $('container').css('color', '#000000');
            $('body').css("background-image", "url('assets/images/Wiki-background.jpg')");
            $('#start').remove();
            $('.welcome').remove();
            parksRec.trivQs();
        })
    }
}

const rndQuotes = {
    quoteCount: 0,
    quotes: ['"I regret nothing. The end." --Ron Swanson', '"Fishing relaxes me. It’s like yoga, except I still get to kill something." --Ron Swanson',
            '“There’s only one thing I hate more than lying: skim milk. Which is water that’s lying about being milk.” --Ron Swanson', '"Literally..." --Chris Traeger',
            '“I’ve cried twice in my life. Once when I was 7 and hit by a school bus. And then again when I heard that Li’l Sebastian had passed.” --Ron Swanson',
            '“I’m a simple man. I like pretty, dark-haired women and breakfast food.” --Ron Swanson', '“Everything hurts and I’m dying.” --Leslie Knope',
            '“Sometimes you gotta work a little so you can ball a lot.” --Tom Haverford', '“I wasn’t listening but I strongly disagree with Ann.” --April Ludgate',
            '“I’m fine. It’s just that life is pointless and nothing matters and I’m always tired.” --Andy Dwyer', '“Do I look like I drink water?” --Donna Meagle',
            '“Thank god my grandfather just died, so I am fluh-uh-shed with ca-ah-ash.” --Jean-Ralphio', '“Treat yo self.” --Donna Meagle & Tom Haverford',
            '“Are you dukin\' on my chest right now?” --Jeremy Jamm'],
    grabQuote: function(){
        setInterval(rndQuotes.nextQuote, 6000);
        $('.quote').html(rndQuotes.quotes[rndQuotes.quoteCount]);
        rndQuotes.nextQuote();
    },

    nextQuote: function(){
        rndQuotes.quoteCount++;
        $('.quote').html(rndQuotes.quotes[rndQuotes.quoteCount]);
    }
}

rndQuotes.grabQuote();
$(document).on('click', '.answer', function(event){
    parksRec.chosen(event);
})
$(document).on('click', '.restart', function(event){
    parksRec.restart();
})

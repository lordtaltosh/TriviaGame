$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'Rome was founded in what year?',
        possibleAnswers: ['A. 861 BCE',
            'B. 500 BCE',
            'C. 753 BCE',
            'D. 44 BCE'],
        flags: [false, false, true, false],
        answer: 'C. 753 BCE'
    };

    var q2 = {
        question: 'Who is said to have founded rome?',
        possibleAnswers: ['A. Remus',
            'B. Caesar',
            'C. Romulus',
            'D. Athena'],
        flags: [false, false, true, false],
        answer: 'C. Romulus'
    };

    var q3 = {
        question: 'Who was Rome\'s first emperor?',
        possibleAnswers: ['A. Caesar',
            'B. Augustus',
            'C. Brutus',
            'D. Tiberius'],
        flags: [false, true, false, false],
        answer: 'B. Augustus'
    };

    var q4 = {
        question: 'The Roman Army consisted of what basic unit?',
        possibleAnswers: ['A. Legion',
            'B. Cohort',
            'C. Infantry',
            'D. Maniple'],
        flags: [false, false, false, true],
        answer: 'D. Maniple'
    };

    var q5 = {
        question: 'Rome offically conquered Gaul in 51 BC. What is the modern name for Gaul?',
        possibleAnswers: ['A. Switzerland',
            'B. Morocco',
            'C. France',
            'D. Egypt'],
        flags: [false, false, true, false],
        answer: 'C. France'
    };

    var q6 = {
        question: 'Who was the last emperor of Rome?',
        possibleAnswers: ['A. Constantine XI Palaiologos',
            'B. Julius Nepos',
            'C. Romulus Augustulus',
            'D. Nero'],
        flags: [false, false, true, false],
        answer: 'C. Romulus Augustulus'
    };

    var q7 = {
        question: 'In what year did the Roman Empire split into the Western and Eastern Empires?',
        possibleAnswers: ['A. 285 CE',
            'B. 300 CE',
            'C. 450 CE',
            'D. 127 CE'],
        flags: [true, false, false, false],
        answer: 'A 285 CE'
    };

    var q8 = {
        question: 'What were the two main classes of Roman Citizen?',
        possibleAnswers: ['A. Noble and Commoner',
            'B. Patrician and Plebian',
            'C. Roman and Barbarian',
            'D. Rich and Poor'],
        flags: [false, true, false, false],
        answer: 'B. Patrician and Plebian'
    };

    var q9 = {
        question: 'What Roman holiday was eventually turned into Christmas?',
        possibleAnswers: ['A. Dies Natalis',
            'B. A Dies Ater',
            'C. Dies Natalis Solis Invicti',
            'D. Sigillaria'],
        flags: [false, false, false, true],
        answer: 'D. Sigillaria'
    };

    var q10 = {
        question: 'Which Emporer formally named Christianity as the new Religion of the Roman Empire?',
        possibleAnswers: ['A. Constantine',
            'B. Palagius',
            'C. Maximus',
            'D. Severus'],
        flags: [true, false, false, false],
        answer: 'A. Constantine'
    }

    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

    function loadQuestion(questionSelection) {
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
    }

    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {

        $('.answerchoice').on('click', function () {
            index++;
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        alert("Correct!");
    }

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }
    setup();
    $('.answerchoice').on('click', function () {
        if (this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if (this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });
});
$(document).ready(function () {
    //hides my questions and results until START button is pressed
    hideQuestions();
    hideResults();
    //functions that actually hide my questions
    function hideQuestions() {
        $("#questions").hide();
    }
    function hideResults() {
        $("#results").hide()
    }

    //it shows my results from hiding
    function showResults() {
        $("#results").show();
            //Checks answers and shows results
        var amountCorrect = 0;
        for (var i = 1; i <= 8; i++) {
            var radios = document.getElementsByName("Question" + i);
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value == "c" && radio.checked) {
                    amountCorrect++;
                }
            }
        }
        $("#correct").text("Correct Answer: " + amountCorrect);
            //Also checks answers and shows results

        var amountWrong = 0;
        for (var i = 1; i <= 8; i++) {
            var radios = document.getElementsByName("Question" + i);
            for (var j = 0; j < radios.length; j++) {
                var radio = radios[j];
                if (radio.value == "w" && radio.checked) {
                    amountWrong++;
                }
            }
        }
        $("#incorrect").text("Incorrect Answer: " + amountWrong);
        //------------------------------Cant get 'Unasnwered' to work properly--------------------
        //    var noAnswer = 0;
        //    for (var i = 1; i <= 8; i++) {
        //        var radios = document.getElementsByName("Question" + i);
        //        for (var j = 0; j < radios.length; j++) {
        //            var radio = radios[j];
        //            if (radio.value !== "w"||"c" && radio.checked) {
        //                noAnswer++;
        //            }
        //        }
        //    }
        //    $("#none").text("Unanswered: " + noAnswer);
        //-----------------------------------------------------------------------------------------
    }

    //starts the quiz when the button is pressed
    $("#startQuiz").on("click", function () {
        // set my time to 60 which is the amount of time you have to answer my questions
        var time = 60;
        //starts up my game automatically
        startGame();
        //when it starts up it....
        function startGame() {

            //makes countDown equal setInterval and it goes by the function timer
            countDown = setInterval(timer, 1000);
            //hides my button to start the quiz
            $("#startQuiz").hide();
            //hides my instructions
            $("#instructions").hide();
            //shows my questions
            $("#questions").show();
            //shows button to end timer when user is done early
            $("#endQuiz").show()
        }
        function timer() {
            //makes the time which was set to 60 go down by 1
            time--;
            //this shows the timer on the page
            $("#countDown").html("<h2>" + time + "</h2>");
            //when my timer goes to 0...
            if (time === 0) {
                //alerts that time is up
                alert("Let's see what you got. Think you 'cod' beat my quiz?")
                //stops the countDown
                stopCounter();
                //shows the results
                showResults();
                //and hides my questions
                hideQuestions();
            }
        }
        //function that stops my counter when game is done and it...
        function stopCounter() {
            //clears the countDown
            clearInterval(countDown);
        }
        //button when user is done early and it makes the timer = o
        $("#endQuiz").on("click", submitResults);
        function submitResults() {
            //timer is 1 then equals 0 and game ends
            time = 1;
        }
    })
});
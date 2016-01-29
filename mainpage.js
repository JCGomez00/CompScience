//all my variables I use to make my button work. This also all the id in my html.


var startButton = document.getElementById("startButton");
var quizTitle = document.getElementById("quizTitle");
var container = document.getElementById("container");
var answers = document.getElementsByClassName("answers");
var submitButton = document.getElementById("submitButton");
var questions = document.getElementById("questions");

var i = 0;

//this is my start button functions 
//these functions display and clear the page
startButton.addEventListener("click", function() {
    startButton.style.display = "none";
    quizTitle.style.display = "none";
    container.style.display = "block";
    // answers.style.display = "block";

});

//this is my submit button functions
//this check,highlights,and submit when all questions are answer
submitButton.addEventListener("click", function() {
    submitButton.style.display = "block";
   
    container.style.display = "block";
   
    var myForm =
        document.querySelectorAll(":checked");
    // if (myForm.length === 10) {
        for (var i = 0; i < myForm.length; i++) {
            document.getElementById("question" + i).style.display = "block";

            if (myForm[i].value === "correct") {
                myForm[i].style.backgroundColor = "green";
                document.getElementById("question" + i).style.backgroundColor = "green";
            }
            else {
                document.getElementById("question" + i).style.backgroundColor = "red";
            }
        }
    // }

});

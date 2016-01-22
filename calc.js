//this is all my variables

var button = document.getElementById("submitButton");
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

//this is my button for the equations

button.addEventListener("click", doMath);

//this is the addition sign

function doMath() {
    if  (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        // input1.value=""
        // input2.value.g=""
        display.innerHTML = answer;
    }

//this is th subtraction sign

if  (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
}
//this is the mulitplication sign


if  (dropdown.value == "x"){
        answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }

//this is the division sign

if  (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }

if  (dropdown.value == "^"){
        //answer = parseInt(input1.value) ^ parseInt(input2.value);
        answer=Math.pow(input1.value,input2.value);
        display.innerHTML = answer;
}
    }
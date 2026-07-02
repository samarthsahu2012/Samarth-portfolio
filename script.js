// =============================
// Typing Effect
// =============================

const typing = document.getElementById("typing");

const words = [
    "Python Programmer",
    "AI Learner",
    "Future Software Developer"
];

let word = 0;
let letter = 0;

function type(){

    if(letter < words[word].length){

        typing.innerHTML += words[word].charAt(letter);

        letter++;

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(letter > 0){

        typing.innerHTML = words[word].substring(0,letter-1);

        letter--;

        setTimeout(erase,50);

    }

    else{

        word++;

        if(word>=words.length){

            word=0;

        }

        setTimeout(type,300);

    }

}

type();


// =============================
// Open Projects Button
// =============================

document.getElementById("projectBtn").onclick=function(){

document.getElementById("projects").scrollIntoView({

behavior:"smooth"

});

}
// =============================
// Terminal
// =============================

const terminal = document.getElementById("terminal");
const terminalCode = document.getElementById("terminalCode");

let balance = 5000;
let historyList = [];

function showProgram(name){

    document.getElementById("terminal").style.display = "block";

    document.querySelector(".terminal-top span").innerHTML = "🏦 SBI Banking System";

    document.getElementById("terminalCode").innerHTML = `
        <h2>🏦 SBI Banking System</h2>

        <p>This project cannot run directly in a browser because it is written in Python.</p>

        <p><b>Download the Python file or run it using Python IDLE / VS Code.</b></p>

        <button onclick="window.open('SBI_Banking_System.py')">
            Download / Open Python File
        </button>
    `;
}

function login(){

const name = document.getElementById("name").value;
const birth = Number(document.getElementById("birth").value);
const pin = document.getElementById("pin").value;

if(pin.length != 4){

    alert("PIN must be exactly 4 digits.");

    return;

}

const year = new Date().getFullYear();

if(name=="" || birth=="" || pin==""){

alert("Fill all details");

return;

}

if(year-birth<18){

alert("You must be at least 18 years old.");

return;

}

document.querySelector(".form").style.display="none";

document.getElementById("menu").style.display="block";

document.getElementById("welcome").innerHTML="Welcome, "+name;

document.getElementById("balance").innerHTML = balance;

}

function deposit(){

    let amt = Number(document.getElementById("amount").value);

    if(isNaN(amt) || amt <= 0){

        alert("Enter a valid amount.");

        return;

    }

    balance += amt;

    historyList.push("💰 Deposited ₹" + amt);

    document.getElementById("balance").innerHTML = balance;

    document.getElementById("amount").value = "";

    alert("Deposit Successful!");

}

function withdraw(){

    let amt = Number(document.getElementById("amount").value);

    if(isNaN(amt) || amt <= 0){

        alert("Enter a valid amount.");

        return;

    }

    if(amt > balance){

        alert("Insufficient Balance.");

        return;

    }

    balance -= amt;

    historyList.push("💸 Withdraw ₹" + amt);

    document.getElementById("balance").innerHTML = balance;

    document.getElementById("amount").value = "";

    alert("Withdrawal Successful!");

}

function history(){

document.getElementById("historyBox").innerHTML=

historyList.join("<br>");

}

function logout(){

document.getElementById("terminal").style.display="none";

}

function closeTerminal(){

terminal.style.display="none";

}
function showCalculator(){

    document.getElementById("terminal").style.display = "block";

    document.querySelector(".terminal-top span").innerHTML = "Calculator";

    document.getElementById("bankApp").innerHTML = `

    <h2>🧮 Calculator</h2>

    <input type="number" id="num1" placeholder="First Number">

    <input type="number" id="num2" placeholder="Second Number">

    <br><br>

    <button onclick="calculate('+')">+</button>

    <button onclick="calculate('-')">−</button>

    <button onclick="calculate('*')">×</button>

    <button onclick="calculate('/')">÷</button>

    <h2 id="result"></h2>

    `;

}

function calculate(op){

    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let ans;

    if(op=="+") ans = a+b;
    else if(op=="-") ans = a-b;
    else if(op=="*") ans = a*b;
    else if(op=="/"){

        if(b==0){

            document.getElementById("result").innerHTML = "Cannot divide by zero";

            return;

        }

        ans = a/b;

    }

    document.getElementById("result").innerHTML = "Answer = " + ans;

}
let secretNumber;
let attempts = 0;

function showGuessGame(){

    document.getElementById("terminal").style.display = "block";

    document.querySelector(".terminal-top span").innerHTML = "🎲 Number Guessing Game";

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("bankApp").innerHTML = `

        <h2>🎯 Guess The Number</h2>

        <p>I have chosen a number between <b>1 and 100</b>.</p>

        <input type="number" id="guess" placeholder="Enter your guess">

        <br><br>

        <button onclick="checkGuess()">Guess</button>

        <button onclick="showGuessGame()">New Game</button>

        <h3 id="guessResult"></h3>

        <p>Attempts : <span id="attempts">0</span></p>

    `;

}
function checkGuess(){

    let guess = Number(document.getElementById("guess").value);

    if(isNaN(guess) || guess < 1 || guess > 100){

        document.getElementById("guessResult").innerHTML =
        "⚠ Enter a number between 1 and 100.";

        return;
    }

    attempts++;

    document.getElementById("attempts").innerHTML = attempts;

    if(guess == secretNumber){

        document.getElementById("guessResult").innerHTML =
        "🎉 Correct! You guessed the number in " + attempts + " attempts.";

        document.getElementById("guess").disabled = true;

    }

    else if(guess < secretNumber){

        document.getElementById("guessResult").innerHTML =
        "📉 Too Low! Guess Again.";

        document.getElementById("guess").value = "";
        document.getElementById("guess").focus();

    }

    else{

        document.getElementById("guessResult").innerHTML =
        "📈 Too High! Guess Again.";

        document.getElementById("guess").value = "";
        document.getElementById("guess").focus();

    }

}

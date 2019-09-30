console.log(secondTens);
// let secondOnes = document.querySelector("secondOnes");
// let colon = document.querySelector("colon");
// let msHundreds = document.querySelector("msHundreds");
// let msTens = document.querySelector("msTens");

let msTCount = 0;
let msHCount = 0;
let secOCount = 0;
let secTCount = 0;
let startButton = null;

function init() {
    clearInterval(myTimer);
    msTCount = 0;
    msHCount = 0;
    secOCount = 0;
    secTCount = 0;
    secondTens.textContent = "-";
    secondOnes.textContent = "-";
    msHundreds.textContent = "-";
    msTens.textContent = "-";
    if (startButton != null) {
        startButton.style.border = "1px solid black";
        startButton.style.color = "black";
        startButton.style.background = "white";
        startButton.disabled = false;
    }
    secondOnes.className = "digit";
    secondTens.className = "digit";
    msHundreds.className = "digit";
    msTens.className = "digit";
    colon.className = "digit";
}

let myTimer = null;

function startTimer(btn) {
    secondOnes.className = "digit";
    secondTens.className = "digit";
    msHundreds.className = "digit";
    msTens.className = "digit";
    colon.className = "digit";
    myTimer = setInterval(increment, 10);
    btn.disabled = true;
    btn.style.border = "1px solid red";
    btn.style.color = "red";
    btn.style.background = "rgba(0,0,0,.009)";
    startButton = btn;
}

function stopTimer() {
    if ((startButton.disabled = true)) {
        console.log("stopping timer");
        clearInterval(myTimer);

        if (secondOnes.className.includes("red")) {
            secondOnes.className = "redDigit blinking";
            secondTens.className = "redDigit blinking";
            msHundreds.className = "redDigit blinking";
            msTens.className = "redDigit blinking";
            colon.className = "redDigit blinking";
        } else {
            secondOnes.className = "blinking";
            secondTens.className = "blinking";
            msHundreds.className = "blinking";
            msTens.className = "blinking";
            colon.className = "blinking";
        }

        if (startButton != null) {
            startButton.style.border = "1px solid black";
            startButton.style.color = "black";
            startButton.style.background = "white";
            startButton.disabled = false;
        }
    }
}

function increment() {
    console.log("triggered");

    if (secTCount < 1) {
        if (msTCount < 9) {
            msTCount++;
        } else {
            msTCount = 0;

            if (msHCount < 9) {
                msHCount++;
            } else {
                msHCount = 0;

                if (secOCount < 9) {
                    secOCount++;
                } else {
                    secOCount = 0;
                    secTCount++;
                }
            }
        }
    } else {
        secondOnes.className = "redDigit blinking";
        secondTens.className = "redDigit blinking";
        msHundreds.className = "redDigit blinking";
        msTens.className = "redDigit blinking";
        colon.className = "redDigit blinking";
        clearInterval(myTimer);
    }

    secondOnes.innerHTML = secOCount;
    secondTens.innerHTML = secTCount;
    msHundreds.innerHTML = msHCount;
    msTens.innerHTML = msTCount;
}

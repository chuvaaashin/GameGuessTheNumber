const secretNumber = Math.floor(Math.random() * 20);
console.log(secretNumber);

const again = document.querySelector(".again")
again.addEventListener("click", function() {
    document.location.reload();
})

let countTry = 20;

function countingTrys() {
    countTry -= 1;
    document.querySelector(".score").innerText = countTry;
    if (countTry < 0) {
        alert("Попытки кончились! Попробуйте снова")
        document.location.reload();
    }
}

const userNumber = document.querySelector(".guess");

function checkNumber() {
    if (secretNumber === Number(userNumber.value)) {
        document.body.style.background = "radial-gradient(circle, rgba(144, 238, 144, 1) 30%, rgba(34, 139, 34, 1) 80%)";
        document.querySelector("h1").innerText = "Правильно!"
        console.log("Проверка пройдена");
        countingTrys();
        records();
    }
    else {
        console.log("Проверка не пройдена")
        document.querySelector("h1").innerText = 'Неправильно! Попробуй еще!'
        setTimeout(() => {
            document.querySelector("h1").innerText = 'Угадай число'
        }, 2000)
        countingTrys();
        if (Number(userNumber.value) < secretNumber) {
            document.querySelector(".message").innerText = 'Попробуй число побольше'
        }
        else if (Number(userNumber.value) > secretNumber) {
            document.querySelector(".message").innerText = 'Попробуй число поменьше'
        }
        setTimeout(() => {
            document.querySelector(".message").innerText = 'Начните угадывать...'
        }, 2000)
    }
}

const checkButton = document.querySelector(".check");
checkButton.addEventListener("click", checkNumber);

function records() {
    let countRecords = 20 - countTry;
    document.querySelector(".highscore").innerText = countRecords;
}
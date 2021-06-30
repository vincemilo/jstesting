
const results = document.getElementById("results")

let val = "bOTh"

function capitalize(str){
    val = str.toLowerCase()
    val = str[0].toUpperCase()
    results.innerHTML += val + "<br>"
}


let val2 = "abcd"

function lastLetter(str){
    results.innerHTML += str.slice(-1) + "<br>"
}

capitalize(val)
lastLetter(val2)

let answer = document.getElementById("num")

function fizzbuzz(){
for (let i = 1; i <= answer.value; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        results.innerHTML += "FizzBuzz <br>";
    } else if (i % 3 === 0) {
        results.innerHTML += "Fizz <br>";
    } else if (i % 5 === 0) {
        results.innerHTML += "Buzz <br>";
    } else {
        results.innerHTML += i + "<br>";
    }
  }

}
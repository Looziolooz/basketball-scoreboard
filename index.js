let countGuest = document.getElementById("count-guest")
let countHome = document.getElementById("count-home")

let count1 = 0
let count2 = 0

function increment1() {
    count1 += 1
    countHome.textContent = count1
}

function increment2() {
    count1 += 2
    countHome.textContent = count1
}

function increment3() {
    count1 += 3
    countHome.textContent = count1
}

function increment4() {
    count2 += 1
    countGuest.textContent = count2
}

function increment5() {
    count2 += 2
    countGuest.textContent = count2
}

function increment6() {
    count2 += 3
    countGuest.textContent = count2
}


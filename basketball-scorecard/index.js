let countHome = 0
let countGuest = 0
let countHomeEl = document.getElementById("home-score-el")
let countGuestEl = document.getElementById("guest-score-el")

function add1Home() {
    countHome += 1
    countHomeEl.textContent = countHome
}

function add2Home() {
    countHome += 2
    countHomeEl.textContent = countHome
}

function add3Home() {
    countHome += 3
    countHomeEl.textContent = countHome
}

function add1Guest() {
    countGuest += 1
    countGuestEl.textContent = countGuest
}

function add2Guest() {
    countGuest += 2
    countGuestEl.textContent = countGuest
}

function add3Guest() {
    countGuest += 3
    countGuestEl.textContent = countGuest
}

function reset() {
    countGuestEl.textContent = 0
    countHomeEl.textContent = 0
    countHome = 0
    countGuest = 0
}
// initialize count as 0, store it somewhere
// listen for clicks on the increment button
// increment the count variable when it's clicked
// change count-el in html to reflect new count

let count = 0
let countEl = document.getElementById("count-el")
function increment () {
    count++
    countEl.textContent = count
}

let saveEl = document.getElementById("save-el")
function save() {
    let countInc = count + " - "
    saveEl.textContent += countInc 
    countEl.textContent = 0
    count = 0
}

save()
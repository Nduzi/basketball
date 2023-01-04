let guestscore = 0
document.getElementById("guest-score").textContent = guestscore
let homescore = 0
document.getElementById("home-score").textContent = homescore



function guestScore(score)
{
    guestscore+=score
    console.log(guestscore)
    document.getElementById("guest-score").textContent = guestscore
}

function homeScore(score)
{
    homescore+=score
    console.log(homescore)
    document.getElementById("home-score").textContent = homescore
}




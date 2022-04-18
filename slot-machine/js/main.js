const currentCredits = document.querySelector('#creditsLeft')
const addCreditsBtn = document.querySelector('#addCredits')
const betMaxBtn = document.querySelector('#betMax')
const creditsBet = document.querySelector('#creditsBet')
const pullBtn = document.querySelector('#pull')
const cashOutBtn = document.querySelector('#cashOut')
const symbolImage = document.querySelector('#symbolDisplay')

addCreditsBtn.addEventListener('click', addingBet)
betMaxBtn.addEventListener('click', betMax)
pullBtn.addEventListener('click', checkIfWon)
cashOutBtn.addEventListener('click', cashOutCredits)

let startingCredits = 1000
currentCredits.innerHTML = 'Credits Remaining: ' + startingCredits
let bettingCredits = 0
creditsBet.innerHTML = 'Bet: ' + bettingCredits

function addingBet(){
    if (startingCredits === 0){
        currentCredits.innerHTML = 'You have no more credits left to bet'
        return
    }
    startingCredits-- 
    bettingCredits++
    currentCredits.innerHTML = 'Credits Remaining: ' + startingCredits
    creditsBet.innerHTML = 'Bet: ' + bettingCredits  
}

function betMax(){
    if (startingCredits === 0){
        currentCredits.innerHTML = 'You have no more credits left to bet'
        return
    }
    bettingCredits += 50 
    startingCredits -= 50
    currentCredits.innerHTML = 'Credits Remaining: ' + startingCredits
    creditsBet.innerHTML = 'Bet: ' + bettingCredits
}

function checkIfWon(){
    if (bettingCredits === 0){
        document.querySelector('#results').innerHTML = 'You need to place a bet!'
        return
    }
    let reelArray = threeReels()
    if (reelArray[0] === reelArray[1] && reelArray[1] === reelArray[2]){
        document.querySelector('#results').innerHTML = 'Jackpot!!!'
        startingCredits = startingCredits + (bettingCredits * 10)
        bettingCredits = 0
        currentCredits.innerHTML = 'Credits Remaining: ' + startingCredits
        creditsBet.innerHTML = 'Bet: ' + bettingCredits 
    } else{
        document.querySelector('#results').innerHTML = 'Yikes. You\'re a loser.'
        bettingCredits = 0
        creditsBet.innerHTML = 'Bet: ' + bettingCredits 
    }
}

function threeReels(){
    document.querySelectorAll('img').forEach(img => img.remove())
    const reelArray = []
    for (let i = 1; i <= 3; i++){
        reelArray.push(randomSymbolCombo())
    }
    return reelArray
}

function randomSymbolCombo(){
    const image = document.createElement('img')
    let randomNumber = Math.random()
    let symbolSelected = 'water'
    if (randomNumber < 0.2){
        symbolSelected = 'earth'
        image.src = 'img/earth.jpeg'
    } else if (randomNumber < 0.4){
        symbolSelected = 'lotus'
        image.src = 'img/lotus.jpeg'
    } else if (randomNumber < 0.6){
        symbolSelected = 'fire'
        image.src = 'img/fire.jpeg'
    } else if (randomNumber < 0.8){
        symbolSelected = 'air'
        image.src = 'img/air.jpeg'
    } else{
        image.src = 'img/water.jpeg'
    }
    symbolImage.appendChild(image)
    return symbolSelected
}

function cashOutCredits(){
    if (startingCredits === 0){
        let response = 'You wanna cash out??? You have zero credits, loser'
        document.querySelector('#response').innerHTML = response
        setTimeout(function(){document.querySelector('#response').innerHTML = ''}, 5000);
    } else{
        randomResponse()
    }
}

function randomResponse(){
    let randomNumber = Math.random()
    response = 'You didn\'t even give us your credit card information'
    if (randomNumber < 0.1){
        response = 'Stay broke.'
        } else if (randomNumber < 0.2){
            response = 'Cash out deez nuts'
        } else if (randomNumber < 0.3){
            response = 'Don\'t take my money :( I have a family to support'
        } else if (randomNumber < 0.4){
            response = 'Why would I let you cash out if you didn\'t give any money to begin with?'
        } else if (randomNumber < 0.5){
            response = 'You only want me for my money smh'
        } else if (randomNumber < 0.6){
            response = 'Thanks Obama'
        } else if (randomNumber < 0.7){
            response = 'I\'m transferring you to the gambling addiction hotline. Please hold.'
        } else if (randomNumber < 0.8){
            response = 'I h8 u'
        } else if (randomNumber < 0.9){
            response = 'Sorry I have no money' 
        }
        document.querySelector('#response').innerHTML = response
        setTimeout(function(){document.querySelector('#response').innerHTML = ''}, 3000);
}
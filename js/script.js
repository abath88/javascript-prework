const buttonRock = document.getElementById('button-rock')
const buttonPaper = document.getElementById('button-paper')
const buttonScissors = document.getElementById('button-scissors')

function getMoveName(argMoveId) {
    switch(argMoveId) {
        case 1: return 'kamień'
        case 2: return 'papier'
        case 3: return 'nożyce'
        default: 
            printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
            return 'kamień';
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!')
    } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
        printMessage('Przegrywasz :(')
    } else if (argPlayerMove == 'papier' && argComputerMove == 'papier'){
        printMessage('Remis :|')
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
        printMessage('Remis :|')
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('Wygrywasz!')
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier'){
        printMessage('Przegrywasz :(')
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień') {
        printMessage('Przegrywasz :(')
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
        printMessage('Remis :|')
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('Wygrywasz!')
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
    

function buttonClicked(argButtonName){
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    displayResult(argButtonName, computerMove);
}

buttonRock.addEventListener('click', function(){
    buttonClicked('kamień')
})

buttonPaper.addEventListener('click', function(){
    buttonClicked('papier')
})

buttonScissors.addEventListener('click', function(){
    buttonClicked('nożyce')
})

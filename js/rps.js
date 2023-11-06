// 1. get access to all html elements (show one, students the rest)
// 2. demonstrate using console.log() to see results of code
// 3. add eventListener buttons (show one, students do the rest)
// 4. creating a function to handle the gameplay which will be called when 
//    a button is clicked
// 5. get user choice (passed in to function), update userImg
// 6. get computer choice (create a function to handle this), update compImg
// 7. discuss/show global vs local space
// 8. decide who wins and update result (new function)
// 9. Next steps?

const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorsButton = document.getElementById('scissors')
const result = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp

// function rockBtnClick() {
//     result.innerText = 'rock clicked'
// }

// function paperBtnClick() {
//     result.innerText = 'paper clicked'
// }

// function scissorsBtnClick() {
//     result.innerText = 'scissors clicked'
// }


rockButton.addEventListener('click', () => {
    userImg.src = '../images/rps_imgs/' + rockButton.id + '.png'
    // result.style.backgroundcolor = 'red'
    compChoice()
    winLose(rockButton.id)
})
paperButton.addEventListener('click', () => {
    userImg.src = '../images/rps_imgs/' + paperButton.id + '.png'
    compChoice()
    winLose(paperButton.id)
})
scissorsButton.addEventListener('click', () => {
    userImg.src = '../images/rps_imgs/' + scissorsButton.id + '.png'
    compChoice()
    winLose(scissorsButton.id)
})

function compChoice() {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = '../images/rps_imgs/' + comp + '.png'
}

function winLose(userChoice) {
    if (userChoice == 'rock' && comp == 'paper') {
        result.innerText = 'Computer Wins'
    } else if (userChoice == 'scissors' && comp == 'rock') {
        result.innerText = 'Computer Wins'
    } else if (userChoice == 'paper' && comp == 'scissors') {
        result.innerText = 'Computer Wins'
    } else if (userChoice == 'scissors' && comp == 'paper') {
        result.innerText = 'User Wins'
    } else if (userChoice == 'paper' && comp == 'rock') {
        result.innerText = 'User Wins'
    } else if (userChoice == 'rock' && comp == 'scissors') {
        result.innerText = 'User Wins'
    } else {
        result.innerText = 'Tie'
    }
}

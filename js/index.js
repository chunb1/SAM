// const plusBtnList = document.querySelectorAll('.plus')
// const minusBtnList = document.querySelectorAll('.minus')
// const answerList = document.querySelectorAll('.answer')
const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-menu")
const theJoke = document.querySelector(".output")
const jokeBtn = document.querySelector(".button")
const weatherLocation = document.querySelector('.location')
const dateTime = document.querySelector('.date-time')
const weatherImage = document.querySelector('.weather-icon')
const weatherTemp = document.querySelector('.temp')
const weatherSky = document.querySelector('.sky')


// plusBtnList.forEach(element => {
//     element.addEventListener('click', () =>{
//         let index = parseInt(element.id)
//         minusBtnList[index].style.display = 'block'
//         answerList[index].style.display = 'block'
//         plusBtnList[index].style.display = 'none'
//     })
// });

// minusBtnList.forEach(element => {
//     element.addEventListener('click', () =>{
//         let index = parseInt(element.id)
//         minusBtnList[index].style.display = 'none'
//         answerList[index].style.display = 'none'
//         plusBtnList[index].style.display = 'block'
//     })
// });

hamburgerBtn.addEventListener('click', () => {
    if (optionMenu.style.display == 'none'){
        optionMenu.style.display = 'flex'
    }
    else{
        optionMenu.style.display = 'none'
    }
})

// const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bb01df25f9msha3599434f7cb591p179ab0jsn68ae0b10d3e4',
// 		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
// 	}
// };




async function getJoke() {
    try {
	    const response = await fetch(url, options);
	    const result = await response.json();
	    const joke = result[0].joke;
        theJoke.textContent = joke
    } catch (error) {
	    theJoke.textContent = "something went awry...";
    }
}


// jokeBtn.addEventListener('click', () => {
//     getJoke()
// })

"39dce473c4c96e09983547057571ee73"

weatherLocation.textContent = 'Portland, ME'
weatherSky.textContent = 'cloudy'
weatherTemp.textContent = '40° F'
const dateObject = new Date()
const month = dateObject.getMonth()+1
const date = dateObject.getDate()
const year = dateObject.getFullYear()
let hour = dateObject.getHours()
let minute = dateObject.getMinutes()
let dayPart = 'pm'


if (minute<10) {
    minute = '0'+minute.toString()
}

if (hour<12) {
    dayPart = 'am'
}

if (hour>12) {
    hour = hour-12
}

let time = `${hour}:${minute}${dayPart}`

console.log(month, date, year, time)
weatherLocation.textContent = 'Portland, ME'
weatherSky.textContent = 'cloudy'
weatherTemp.textContent = '40° F'
dateTime.textContent = time
const plusBtnList = document.querySelectorAll('.plus')
const minusBtnList = document.querySelectorAll('.minus')
const answerList = document.querySelectorAll('.answer')
const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-menu")
const theJoke = document.querySelector(".output")
const jokeBtn = document.querySelector(".button")


plusBtnList.forEach(element => {
    element.addEventListener('click', () =>{
        let index = parseInt(element.id)
        minusBtnList[index].style.display = 'block'
        answerList[index].style.display = 'block'
        plusBtnList[index].style.display = 'none'
    })
});

minusBtnList.forEach(element => {
    element.addEventListener('click', () =>{
        let index = parseInt(element.id)
        minusBtnList[index].style.display = 'none'
        answerList[index].style.display = 'none'
        plusBtnList[index].style.display = 'block'
    })
});

hamburgerBtn.addEventListener('click', () => {
    if (optionMenu.style.display == 'none'){
        optionMenu.style.display = 'flex'
    }
    else{
        optionMenu.style.display = 'none'
    }
})

const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bb01df25f9msha3599434f7cb591p179ab0jsn68ae0b10d3e4',
		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};




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


jokeBtn.addEventListener('click', () => {
    getJoke()
})
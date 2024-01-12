const plusBtnList = document.querySelectorAll('.plus')
const minusBtnList = document.querySelectorAll('.minus')
const answerList = document.querySelectorAll('.answer')
const hamburgerBtn = document.querySelector(".hamburger-button")
const optionMenu = document.querySelector(".hamburger-menu")

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
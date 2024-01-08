const plusBtnList = document.querySelectorAll('.plus')
const minusBtnList = document.querySelectorAll('.minus')
const answerList = document.querySelectorAll('.answer')

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
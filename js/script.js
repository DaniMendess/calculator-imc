// Adicionando elementos

const btnStartApp = document.querySelector(".first-card #start")
const btnFemale = document.querySelector(".genre #btn-female")
const btnMale = document.querySelector(".genre #btn-male")
const btnCalc = document.querySelector(".btn-style #btn-calc")
const btnReset = document.querySelector(".btn-style #btn-reset")

const finishApp = document.querySelector(".container #finish")
const container = document.querySelector(".container")


const inputAge = document.querySelector(".age #age")
const inputHeight = document.querySelector(".height #height")
const inputWeight = document.querySelector(".weight #weight")
const showCalc = document.querySelector(".result")

const startApp = document.querySelector(".first-card")



/*Funções*/

function calculation(event) {
    event.preventDefault()



    const height = inputHeight.value
    const weight = inputWeight.value

    const result = (weight / ((height / 100) ** 2)).toFixed(2)
    
    
    
    const lowWeight = `Seu IMC é ${result}, e você está abaixo do peso!`
    const normalWeight = `Seu IMC é ${result}, peso Normal!`
    const upWeight = `Seu IMC é ${result}, voçê está acima do peso!`
    const weightObese = `Seu IMC é ${result}, voçê está obeso!`
    
    
    if(result < 18.5 ) {
       document.querySelector(".result p ").innerText = lowWeight
    }else if(result > 18.5 && result < 25){
        document.querySelector(".result p").innerText = normalWeight
    } if(result > 25 && result < 30){
        document.querySelector(".result p").innerText = upWeight
    }else if(result > 30) {
        document.querySelector(".result p").innerText = weightObese

    }
 
    showCalc.classList.toggle("none")

   
  
}


/*Eventos*/

btnFemale.addEventListener("click", (e) => {
    e.preventDefault()
    btnFemale.classList.toggle('done')
    btnMale.classList.remove('done')
    document.querySelector(".result h4").innerText = "Genêro: Feminino"
})


btnMale.addEventListener("click", (e) => {
    e.preventDefault()
    btnMale.classList.toggle('done')
    btnFemale.classList.remove('done')
    document.querySelector(".result h4").innerText = "Genêro: masculino"
    

})

btnCalc.addEventListener("click", calculation)


btnReset.addEventListener("click", (e) => {
    e.preventDefault()
    inputHeight.value = ""
    inputWeight.value = ""
    inputAge.value = ""
    showCalc.classList.remove("none")
})

finishApp.addEventListener("click", () =>{
    container.classList.toggle("hidden")
    startApp.classList.toggle("visible")
    
})

btnStartApp.addEventListener("click",() => {
    startApp.classList.remove("visible")
    container.classList.remove("hidden")
})




const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const numbers = document.querySelectorAll(".number")
let counter = 0;

function addActive(){
    if(counter < numbers.length){
        numbers[counter].classList.add("active")        
    }
    counter++
    if(counter > 0){
        prev.disabled = false
    }
    if(counter + 1 == numbers.length){
        next.innerHTML = "Submit"
    }  
    if(counter == numbers.length){
        next.disabled = true
    }
}
next.addEventListener("click", addActive)

function removeActive(){
    if(counter > 0){
        numbers[counter-1].classList.remove("active")
        counter--
        if(counter == 0){
            prev.disabled = true
        }
        if(counter < numbers.length){
            next.disabled = false
        }
    }
}
prev.addEventListener("click", removeActive)

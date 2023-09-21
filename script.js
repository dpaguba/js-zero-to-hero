const valueDisplay = document.querySelector(".num")

const display = ()=>{
    let startValue = 0
    let endValue = 100

    let count = setInterval(()=>{
        valueDisplay.innerHTML = startValue++
        if(startValue > endValue){
            clearInterval(count)
        }
    }, 10)
}

display()

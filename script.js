const amount = document.querySelector("#amount")
const fromCurrencyItems = document.querySelector("#from-currency")
const toCurrencyItems = document.querySelector("#to-currency")
const swapButton = document.querySelector("#swap")
const convertButton = document.querySelector("#convert") 
const result = document.querySelector(".result")
const conversionRateFrom = document.querySelector(".from-to")

const fillOptions = ()=>{
    fetch(`https://v6.exchangerate-api.com/v6/a40b2238bb61dd03ffccd614/latest/USD`)
        .then((response) => response.json())
        .then((data) =>{
            for(const [key, value] of Object.entries(data.conversion_rates)){
                fromCurrencyItems.add(new Option(`${key}`, `${key}`), undefined)
                toCurrencyItems.add(new Option(`${key}`, `${key}`), undefined)
            }
            fromCurrencyItems.value = "USD"
            toCurrencyItems.value = "EUR"
        })
}
fillOptions()


amount.addEventListener("click", ()=>{
    if(amount.value == ""){
        amount.classList.add("selected")
    }
})
amount.addEventListener("keydown", (keydown)=>{
    if((keydown.keyCode >= 48) && (keydown.keyCode <= 57) && 
        amount.classList.contains("selected") && 
        (amount.value != undefined)){
        amount.classList.remove("selected")
        convertButton.disabled = false
        convertButton.classList.remove("disabled")
    }else if(keydown.keyCode == 8 && amount.value.length == 1){
        amount.classList.add("selected")
        convertButton.classList.add("disabled")
    }
})

const swapCurrencies = ()=>{
    let fromCurrencySelected = fromCurrencyItems.selectedOptions[0]
    fromCurrencyItems.value = toCurrencyItems.selectedOptions[0].value
    toCurrencyItems.value = fromCurrencySelected.value
}
swapButton.addEventListener("click", swapCurrencies)

const convert = ()=>{
    let fromCurrency = fromCurrencyItems.selectedOptions[0].value
    let toCurrency = toCurrencyItems.selectedOptions[0].value
    fetch(`https://v6.exchangerate-api.com/v6/a40b2238bb61dd03ffccd614/latest/${fromCurrency}`)
        .then((response) => response.json())
        .then((data) =>{
            let convertationResult = parseInt(amount.value) * data.conversion_rates[toCurrency]
            result.innerHTML = `${amount.value} ${fromCurrency} = ${convertationResult.toFixed(4)} ${toCurrency}`
            conversionRateFrom.innerHTML = `1 ${fromCurrency} = ${data.conversion_rates[toCurrency].toFixed(4)} ${toCurrency}`
        })
}
convertButton.addEventListener("click", convert)


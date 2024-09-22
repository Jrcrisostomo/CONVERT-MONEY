const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    const convertedValue = inputCurrencyValue / dolarToday

        if (currencySelect,convertedValue== "dolar"){ //se o select estiver selecionado o valor de dolar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)  
    }

    if (currencySelect,convertedValue == "euro"){ //se o select estiver selecionado o valor de euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(convertedValue)  

}

function changeCurrency() {
    const currencyName = document.getElementById(".currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect,Valueconverted == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dólar americano.png"
    }    

    if (currencySelect,Value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"        
    }


    convertValues()
}

currencySelect,addEventListener("change", changeCurrency)
convertButton,addEventListener("click", convertValues)
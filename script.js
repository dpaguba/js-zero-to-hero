const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weather = document.querySelector(".weather")
const error = document.querySelector(".not-found")
const input = document.querySelector(".search-box input")

search.addEventListener("click", getWeather)
input.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        getWeather()
    }
})

function getWeather(){
    const APIKey = "219e46cf6fa7aa091842d2040dbfadc9"
    const city = input.value
    
    if(city === ""){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {
            
            if(json.cod === "404"){
                container.style.height = "400px"
                weatherBox.style.display = "none"
                weather.style.display = "none"
                error.style.display = "block"
                error.classList.add("fadeIn")
                return
            }

            error.style.display = "none";
            error.classList.remove("fadeIn");

            const image = document.querySelector(".weather-box img")
            const temperature = document.querySelector(".weather-box .temperature")
            const description = document.querySelector(".weather-box .description")
            const humidity = document.querySelector(".weather .humidity span")
            const wind = document.querySelector(".weather .wind span")

            switch(json.weather[0].main){
                case "Clear":
                    image.src = "images/clear.png"
                    break

                case "Rain":
                    image.src = "images/rain.png"
                    break
                    
                case "Clouds":
                    image.src = "images/cloud.png"
                    break
                
                case "Haze":
                    image.src = "images/mist.png"
                    break

                case "Snow":
                    image.src = "images/snow.png"
                    break
                
                default:
                    image.src = ""
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>C</span>`
            description.innerHTML = `${json.weather[0].description}`
            humidity.innerHTML = `${json.main.humidity}%`
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`

            weatherBox.style.display = ""
            weather.style.display = ""
            weatherBox.classList.add("fadeIn")
            weather.classList.add("fadeIn")
            container.style.height = "600px"

        })
}

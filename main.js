const inpSearch = document.querySelector(".inpSearch")
const btnSearch = document.querySelector(".btnSearch")
const weather = {
    apiKey: "6b4c292e3e049dbf64d6c2441cc77864",
    fetchWeather: function(city) {
fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric&lang=RU`)
.then ((data)=> data.json())
.then ((data)=>{
    console.log(data);
    this.displayWeather(data)
})
},
displayWeather:function(data) {
    if(data.cod == "404"){
    document.querySelector(".weather-country").innerText = ` ${data.message}`
    return
    }
    document.querySelector(".weather-country").innerText = ` ${data.name}`
    document.querySelector(".temp").innerText = ` ${data.main.temp}`
    document.querySelector(".humidity").innerText = `Влажность  ${data.main.humidity}%`
    document.querySelector(".speed").innerText = `Скорость ${data.wind.speed}км/ч`
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/` + data.weather?.[0].icon + ".png"
    
},
searchWeather: function (){
    this.fetchWeather(inpSearch.value)
}
}
weather.fetchWeather("Bishkek")

inpSearch.addEventListener("keyup", (e) =>{
    if(e.key == "Enter" ){
        weather.searchWeather()

    }
    
})
btnSearch.addEventListener("click", ()=>{
    weather.searchWeather()
})

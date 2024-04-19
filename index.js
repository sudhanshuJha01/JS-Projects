const search = document.querySelector(".search");
const city = document.querySelector(".city");   
const searchBox = document.querySelector('.search-input')
const searchBtn = document.querySelector('button')
const weatherIcon = document.querySelector('.weather-icon')

const apiKey=`cbf132fca14a67b60d0c1f63d653ba85`
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

searchBtn.addEventListener('click',()=>{
    fetchWeather(searchBox.value)
    searchBox.value=""
})

async function fetchWeather(city){
    const response  = await fetch(apiUrl + city+`&appid=${apiKey}`)
    let data = await response.json()
    console.log(data);
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp ) +'°c'
    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%"
   document.querySelector('.wind').innerHTML=data.wind.speed+" km/h" 
};




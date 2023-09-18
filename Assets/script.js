const cityName = document.querySelector("#cityName");
const searchBtn = document.querySelector(".SearchBtn");
const weatherContainer = document.querySelector('.weather');

var apiKey = "8f2921d9830d570df7f944886cb15690"

async function getWeather(){
    var location = document.querySelector(".search-bar");
    var forecast = "https://api.openweathermap.org/data/2.5/forecast?q="+location.value+"&appid="+apiKey+"&units=imperial";
    
    fetch(forecast)   
        .then (response => response.json())
        .then (data => {
            console.log(data);
            for (var i = 0; i < data.list.length; i+=8) {
            var temp = document.createElement('h1');
            var date = document.createElement('div');
            var icon = document.createElement('img');
            var windSpeed = document.createElement('div');
            var descr = document.createElement('div');
            var humidity = document.createElement('div');
            var iconNum = data.list[i].weather[0].icon;

            temp.className='temp';
            date.className='date';
            icon.className='icon';
            windSpeed.className='wind';
            descr.className='description';
            humidity.className='humidity';
            

            temp.textContent = data.list[i].main.temp;
            date.textContent = data.list[i].dt_txt;
            icon.src="http://openweathermap.org/img/w/" + iconNum + ".png";
            windSpeed.textContent = data.list[i].wind.speed;
            descr.textContent = data.list[i].weather[0].description;
            humidity.textContent = data.list[i].main.humidity;

            console.log(temp,date,icon,windSpeed,descr,humidity);

            weatherContainer.append(temp);
            weatherContainer.appendChild(date);
            weatherContainer.appendChild(icon);
            weatherContainer.appendChild(windSpeed);
            weatherContainer.append(descr);
            weatherContainer.append(humidity);

        }
})};


function storeSearch(){
};

searchBtn.addEventListener("click", getWeather);
    
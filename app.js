const apikey = "da78ee1a5e32cfdc806ad6477ed39033";
const api_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector('.search button');
const Weather_icon = document.querySelector(".weather-icon");

async function CheckWeather(city) {
    const response = await fetch(api_url+city+`&appid=${apikey}`);
        if(response.status==404){
            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display = "none";
        }else{
            document.querySelector(".error").style.display="none";

        }
       
        let data = await response.json();
        console.log(data)
        
        // Updating UI
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";

        if (data.weather[0].main == "Clouds") {
            Weather_icon.src = "./images/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            Weather_icon.src = "./images/sun(1).png";
        } else if (data.weather[0].main == "Drizzle") {
            Weather_icon.src = "./images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            Weather_icon.src = "./images/mist(2).png";
        }
       
    
}

searchBtn.addEventListener("click", () => {
    CheckWeather(searchBox.value);
    document.querySelector(".weather").style.display = "block";
});

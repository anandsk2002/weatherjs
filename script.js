const apiKey = "a89ef72caa14e0c656adbd35a45c438e";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const weathericon = document.querySelector(".weather-icon");
        

        async function checkWeather(city){
            const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
            var data = await response.json();
            console.log(data);
            const conditions = data.weather[0].main;
            
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            document.querySelector(".cond").innerHTML = conditions;

            if(data.weather[0].main == "Clouds"){
                weathericon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
                weathericon.src = "images/clear.png"; 
            }
            else if(data.weather[0].main == "Rain"){
                weathericon.src = "images/rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weathericon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weathericon.src = "images/mist.png";
               
            }
        }

        document.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    checkWeather(searchbox.value);
  }
});

        searchbtn.addEventListener("click",()=>{
            checkWeather(searchbox.value);
        })

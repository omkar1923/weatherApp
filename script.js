let apiKey = "345640ecdf75c1eff8ec59b7a9b688b7";


let city = document.getElementById("city"); 
let temp = document.getElementById("temp"); 
let humid = document.getElementById("humid"); 
let wind = document.getElementById("wind"); 

// Function to fetch weather data when button is clicked
function fetchWeather() {
   
    let cityName = document.getElementById("cityName").value;
    
    // Checking if city name is not empty
    if (cityName != "") {
        // Making a GET request to OpenWeatherMap API to fetch weather data for the specified city
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            // Processing the response as JSON
            .then(resp => resp.json())
            // Handling the JSON data
            .then(data => {
           
                city.innerHTML = data.name;
               
                temp.innerHTML = ((data.main.temp) - 273.15).toFixed(2) + "°C";
              
                humid.innerHTML = data.main.humidity + "%";
              
                wind.innerHTML = data.wind.speed + "km/hr";
            })
           
    } else {
       
        alert("Enter a city name");
    }
}
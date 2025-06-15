var fahrenheit;

function renderWeather(weather){
	
	console.log(weather);
	var results = document.querySelector("#weatherresults");
	
	var city = document.createElement("h2");
	city.id = "cityname";
	city.textContent = weather.name;
	weatherresults.append(city);
	
	var temp = document.createElement("p");
	temp.id = "temp";
	fahrenheit = (weather.main.temp - 32) * (5/9);
	temp.textContent = "Temp: " + fahrenheit.toFixed(2) + " F";
	weatherresults.append(temp);
	
	var wind = document.createElement("p");
	wind.textContent = "Wind speed: " + weather.wind.speed + " m/s ";
	wind.id = "wind";
	weatherresults.innerHTML += "<p id='wind'>Wind speed: " + weather.wind.speed + " m/s " + "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-wind' viewBox='0 0 16 16'>" + "<path d='M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z'/>" + "</svg>" + "</p>";
	
	var weatherDetails = document.createElement("p");
		weatherDetails.textContent = "<p id='weather'> Current weather: " + weather.weather[0].description; + "</p>";
		
		if(weather.weather[0].description == "light snow" || weather.weather[0].description == "snow"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg = xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-cloud-snow' viewBox='0 0 16 16'>" + "<path d='M13.405 4.277a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10.25H13a3 3 0 0 0 .405-5.973zM8.5 1.25a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1.25zM2.625 11.5a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm2.75 2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm-2.75-2a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25zm5.5 0a.25.25 0 0 1 .25.25v.57l.501-.287a.25.25 0 0 1 .248.434l-.495.283.495.283a.25.25 0 0 1-.248.434l-.501-.286v.569a.25.25 0 1 1-.5 0v-.57l-.501.287a.25.25 0 0 1-.248-.434l.495-.283-.495-.283a.25.25 0 0 1 .248-.434l.501.286v-.569a.25.25 0 0 1 .25-.25z'/>" + "</br>" + "</svg>" + "</p>";
			
		}else if (weather.weather[0].description == "overcast clouds" || weather.weather[0].description == "broken clouds" || weather.weather[0].description == "few clouds"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-cloudy' viewBox='0 0 16 16'>" + "<path d='M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973zM8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 5.5z'/>" + "</br>" + "</svg>" + "</p>";
		}else if (weather.weather[0].description == "scattered clouds"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-clouds' viewBox='0 0 16 16'>" + "<path d='M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z'/>" + "<path d='M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z'/>" + "</br>" + "</svg>" + "</p>";

		}else if (weather.weather[0].description == "clear sky"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-clouds' viewBox='0 0 16 16'>" + "<path fill-rule='evenodd' d='M3.112 5.112a3.125 3.125 0 0 0-.17.613C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13H11l-1-1H3.781C2.231 12 1 10.785 1 9.318c0-1.365 1.064-2.513 2.46-2.666l.446-.05v-.447c0-.075.006-.152.018-.231l-.812-.812zm2.55-1.45-.725-.725A5.512 5.512 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773a3.2 3.2 0 0 1-1.516 2.711l-.733-.733C14.498 11.378 15 10.626 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3c-.875 0-1.678.26-2.339.661z'/>" + "<path d='m13.646 14.354-12-12 .708-.708 12 12-.707.707z'/>" + "</br>" + "</svg>" + "</p>";
			
		}else if (weather.weather[0].description == "thunderstorm"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-cloud-lightning-rain' viewBox='0 0 16 16'>" + "<path d='M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-.753-8.499a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973zM8.5 1a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1 0 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4.002 4.002 0 0 1 8.5 1zM7.053 11.276A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2z'/>" + "</br>" + "</svg>" + "</p>";
			
		}else if (weather.weather[0].description == "light rain"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-cloud-rain-fill' viewBox='0 0 16 16'>" + "<path d='M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z'/>" + "</br>" + "</svg>" + "</p>";
			
		}else if (weather.weather[0].description == "heavy rain"){
			
			weatherresults.innerHTML += "<p id='weather'> Current weather: " + weather.weather[0].description + "<br>" + "<svg xmlns='http://www.w3.org/2000/svg' width='250' height='250' fill='currentColor' class='bi bi-cloud-rain-heavy-fill' viewBox='0 0 16 16'>" + "<path d='M4.176 11.032a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm3 0a.5.5 0 0 1 .292.643l-1.5 4a.5.5 0 0 1-.936-.35l1.5-4a.5.5 0 0 1 .644-.293zm.229-7.005a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z'/>" + "</br>" + "</svg>" + "</p>";
			
		}		

}
function fetchWeather(query){
	
	var url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=imperial&appid=my_api_key";
	
	fetch(url)
	.then(response => response.json())
	.then(data => renderWeather(data))
}

function search(){
	
	document.getElementById("cityname").innerHTML = null;
	document.getElementById("wind").innerHTML = null;
	document.getElementById("temp").innerHTML = null;
	document.getElementById("weatherresults").innerHTML = null;
	
	let serach = document.getElementById("textinput").value;
	fetchWeather(serach);
	
	}
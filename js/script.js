// button for sending the user back to the home page
document.getElementById("home-btn").onclick = function() {
    window.location.href = "index.html";
};

// for the weather api integration
async function getWeather() {
    const apiKey = '1ddbc56188878aee463d4182301720e8';
    const city = "hackettstown, new jersey";
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

    // http://weatherstack.com{apiKey}&query=${city}

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert('Error: ' + data.error.info);
            return;
        }

        // Display results
        document.getElementById('weatherDisplay').innerHTML = `
            <h3>${data.location.name}, ${data.location.country}</h3>
            <p>Temperature: ${data.current.temperature}°C</p>
            <p>Weather: ${data.current.weather_descriptions[0]}</p>
            <img src="${data.current.weather_icons[0]}" alt="Weather icon">
        `;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
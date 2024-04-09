document.addEventListener("DOMContentLoaded", () => {

        const defaultLocation = "Delhi"; // Set your default location here
        fetchWeatherData(defaultLocation);    

    const locationInput = document.getElementById("location-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", () => {
        const location = locationInput.value.trim();
        if (location !== "") {
            fetchWeatherData(location);
        } else {
            alert("Please enter a location.");
        }
    });
});

function fetchWeatherData(location) {
    const apiKey = 'YGCWVGSSWMNPYUZRGDH6QW3LA'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&key=${apiKey}&contentType=json`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            renderUI(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function renderUI(data) {
    const currentDayInfo = document.getElementById("current-day-info");
    currentDayInfo.innerHTML = "";

    // Render current day information
    const currentDay = data.days[0];
    const currentDayHtml = `
        <h1>${currentDay.temp} C</h1>
        <h2>${currentDay.datetime}</h2>
        <p>Conditions: ${currentDay.conditions}</p>
        <p>Cloud Cover: ${currentDay.cloudcover}</p>
        <p>Humidity: ${currentDay.humidity}</p>
        <p>Pressure: ${currentDay.pressure}</p>
    `;
    currentDayInfo.innerHTML = currentDayHtml;

    // Render other days
    const otherDaysContainer = document.getElementById("other-days-container");
    otherDaysContainer.innerHTML = "";

    for (let i = 1; i < data.days.length; i++) {
        const day = data.days[i];
        const cardHtml = `
            <div class="card">
                <h3>${day.temp} C</h3>
                <p>${day.datetime}</p>
                <p>Conditions: ${day.conditions}</p>
            </div>
        `;
        otherDaysContainer.innerHTML += cardHtml;
    }
}


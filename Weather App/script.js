function fetchAPI() {
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=YGCWVGSSWMNPYUZRGDH6QW3LA&contentType=json')
     .then(res => res.json())
     .then((data) => {renderUI(data)});
}

function renderUI(data) {
    const days = data.days;
    const currentDayInfo = document.getElementById("current-day-info");

    // Render current day information in header
    const currentDay = days[0];
    currentDayInfo.innerHTML = `
        <h1>Current Temp: ${currentDay.temp}</h1>
        <h3>${getDayName(new Date(currentDay.datetime))}, ${currentDay.datetime}</h3>
        <h3>Conditions: ${currentDay.conditions}</h3>
        
    `;

    const otherDaysContainer = document.getElementById("other-days-container");

    // Render other days
    for (let i = 1; i < days.length; i++) {
        const day = days[i];
        renderCard(day, otherDaysContainer);
    }
}

function renderCard(data, container) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const date = document.createElement("h2");
    date.innerHTML = `${getDayName(new Date(data.datetime))}, ${data.datetime}`;
    card.appendChild(date);

    const conditions = document.createElement("p");
    conditions.innerHTML = `Conditions: ${data.conditions}`;
    card.appendChild(conditions);

    // Add event listener to each card
    card.addEventListener("click", () => {
        displayOverlay(data); // Call function to display overlay with detailed information
    });

    container.appendChild(card);
}

// Function to get the day name from date
function getDayName(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

fetchAPI();  // Call the API






function displayOverlay(data) {
    // Create overlay div
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay");

    // Create content div
    const content = document.createElement("div");
    content.setAttribute("class", "overlay-content");

    // Add close button
    const closeButton = document.createElement("button");
    closeButton.setAttribute("class", "close-button");
    closeButton.innerHTML = "X";
    closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay); // Remove overlay when close button is clicked
    });
    content.appendChild(closeButton);

    // Add detailed weather information to content div
    const detailedInfo = document.createElement("p");
    detailedInfo.innerHTML = `Cloud Cover: ${data.cloudcover}<br>
                             Conditions: ${data.conditions}<br>
                             Datetime: ${data.datetime}<br>
                             Datetime Epoch: ${data.datetimeEpoch}<br>
                             Dew: ${data.dew}<br>
                             Feels Like: ${data.feelslike}<br>
                             Humidity: ${data.humidity}<br>
                             Icon: ${data.icon}<br>
                             Precip: ${data.precip}<br>
                             Precip Prob: ${data.precipprob}<br>
                             Precip Type: ${data.preciptype}<br>
                             Pressure: ${data.pressure}<br>
                             Severe Risk: ${data.severerisk}<br>
                             Snow: ${data.snow}<br>
                             Snow Depth: ${data.snowdepth}<br>
                             Solar Energy: ${data.solarenergy}<br>
                             Solar Radiation: ${data.solarradiation}`;
    content.appendChild(detailedInfo);

    // Append content div to overlay
    overlay.appendChild(content);

    // Append overlay to body
    document.body.appendChild(overlay);
}


fetchAPI();  // Call the API

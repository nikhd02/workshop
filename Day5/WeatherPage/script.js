function fetchAPI(){
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=us&key=YGCWVGSSWMNPYUZRGDH6QW3LA&contentType=json')
    .then(res => res.json())
    .then((data) => {renderUI(data)});
    }

    function renderUI(data){
        const days = data.days;
        console.log(days);
        
        for(let i=0;i<days.length;i++){
        const arr = days[i];
        const row = document.createElement("tr");
        tr.setAttribute("class", "tr");
        const cell = document.createElement("th");
        th.setAttribute("class", "th");
        cell.innerHTML = arr.datetime;
        row.appendChild(cell);

        // const cel0 = document.createElement("th");
        // cel0.innerHTML = 'data.temp;
        // row.appendChild(cel0);

        const cel2 = document.createElement("th");
        cel2.innerHTML = arr.tempmax;
        row.appendChild(cel2);

        const cel3 = document.createElement("th");
        cel3.innerHTML = arr.tempmin;
        row.appendChild(cel3);


        root.append(row);
        }
    }
    fetchAPI();  // Call the API
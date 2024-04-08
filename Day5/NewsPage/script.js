console.log(".....APP START...");

function callAPI(){
    console.log('GEC Start');
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=d386fd95a7724acb89b8009ec7071159")
    .then(res => res.json())
    .then((data) => {renderUI(data)});
    console.log('GEC End');
}

function renderUI(data){
    const articles = data.articles;
    console.log(articles);

    

    const root = document.getElementById('root');
    for(let i=0;i<articles.length; i++){
    const ar = articles[i];
    console.log(ar);

    const div = document.createElement('div');
    div.setAttribute("class", "news-card");
    const h3 = document.createElement('h3');
    h3.innerHTML = ar.title;
    div.appendChild(h3);

    const img = document.createElement('img');
    img.src = ar.urlToImage;
    div.appendChild(img);

    const p = document.createElement('p');
    p.innerHTML = ar.description;
    div.appendChild(p);

    root.appendChild(div);
    }
}
// renderUI();
callAPI();
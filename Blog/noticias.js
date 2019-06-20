var req = new XMLHttpRequest ();

var url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=48905b7295554e2e94ea37b284db9421';

function processaDados2(){
    var dados = JSON.parse(req.responseText);
    var saida = '';
    for(i=0;i<dados.articles.length; i++)
    {
    saida += `<div id="Lista-Noticias">
        <div class="box-Noticias">
        <a href="Notícia.html"><b><p>${dados.articles[i].title}</p></b> 
            <img src="${dados.articles[i].urlToImage}" alt=""> 
            <p>${dados.articles[i].description} </p>
            
            </a>
        </div>`;
    }
    document.getElementById('Lista-Noticias').innerHTML = saida;
}

function getData2 () {
    req.onload = processaDados2;
    req.open('GET',url,true);
    req.send();
}

AOS.init();
const btn = document.querySelector('.btn-busca');
const apiKey = '47f133a0432106089affd4c904a708d3';
function inputButton(){
    const input = document.querySelector('.input-nome').value;
    if(!input){
        alert('Digite o nome da cidade - Cavalo')
    }
    buscarCidade(input);   
}

async function buscarCidade(cidade){
const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`)
.then(res => res.json())
.catch(req => console.log(req))
console.log(api);

completarDados(api)

}

function completarDados(dados){
    document.querySelector('.title').innerHTML = `Tempo em: ${dados.name}`;
    document.querySelector('.graus-max').innerHTML = `Max. ${Math.floor(dados.main.temp_max)} °C`;
    document.querySelector('.graus-min').innerHTML = `Min. ${Math.floor(dados.main.temp_min)} °C`;
    document.querySelector('.img-tempo').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector('.description').innerHTML = `${dados.weather[0].description}`.toUpperCase();
    document.querySelector('.umidade').innerHTML = `Umidade: ${dados.main.humidity}%`;
    
    console.log('title' , dados.name);

}



